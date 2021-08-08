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
    public class QuestionsController : ControllerBase
    {
        private IAppRepository _appRepository;
        private IMapper _mapper;
        public QuestionsController(IAppRepository appRepository, IMapper mapper)
        {
            _appRepository = appRepository;
            _mapper = mapper;
        }
        [HttpGet]
        public ActionResult GetQuestions()
        {
            var questions = _appRepository.GetQuestions().OrderBy(r => Guid.NewGuid()).Take(10);
            var questionstoreturn = _mapper.Map<List<QuestionForListDto>>(questions);
            return Ok(questionstoreturn);
        }

        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody]Question question)
        {
            _appRepository.Add(question);
            _appRepository.SaveAll();
            return Ok(question);
        }

    }
}