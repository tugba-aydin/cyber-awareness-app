using SiberWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiberWebAPI.Data
{
    public interface IAppRepository
    {
        void Add<T>(T entity) where T:class;
        void UserAdd<T>(T entity) where T : class;
        bool SaveAll();
        List<Question> GetQuestions();
        List<User> GetUsers();
        int dailyTotal();
    }
}
