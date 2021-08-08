using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SiberWebAPI.Models;

namespace SiberWebAPI.Data
{
    public class AppRepository : IAppRepository
    {
        private DataContext _context;

        public AppRepository(DataContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public int dailyTotal()
        {
            DateTime now=DateTime.Now;
            int result = _context.Users.Where(d => d.QuizDateTime.Value.Day == now.Day&& d.QuizDateTime.Value.Month == now.Month&& d.QuizDateTime.Value.Year == now.Year).ToList().Count;
            return result;
        }

        public List<Question> GetQuestions()
        {
            var question = _context.Questions.ToList();
            return question;
        }

        public List<User> GetUsers()
        {
            var user = _context.Users.OrderByDescending(x=>x.Score).ToList();
            return user;
        }

        public bool SaveAll()
        {
            return _context.SaveChanges() > 0;
        }

        public void UserAdd<T>(T entity) where T : class
        {
            _context.Add(entity);
        }
    }
}
