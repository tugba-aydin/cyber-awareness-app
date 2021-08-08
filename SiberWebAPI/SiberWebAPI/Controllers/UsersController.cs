using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SiberWebAPI.Data;
using SiberWebAPI.Dtos;
using SiberWebAPI.Models;

namespace SiberWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private IAppRepository _appRepository;
        private IMapper _mapper;
        public UsersController(IAppRepository appRepository, IMapper mapper)
        {
            _appRepository = appRepository;
            _mapper = mapper;
        }

        public ActionResult GetUsers()
        {
            var users = _appRepository.GetUsers();
            var userstoreturn = _mapper.Map<List<UserForListDto>>(users);
            return Ok(userstoreturn);
        }

        [HttpGet]
        [Route("dailycount")]
        public ActionResult GetDailyCount()
        {
            var users_count = _appRepository.dailyTotal();
            return Ok(users_count);
        }

        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody]User user)
        {
            user.QuizDateTime = DateTime.Now;
            _appRepository.Add(user);
            _appRepository.SaveAll();
            return Ok(user);
        }
    }
}