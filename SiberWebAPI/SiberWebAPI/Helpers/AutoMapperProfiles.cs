using AutoMapper;
using SiberWebAPI.Dtos;
using SiberWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiberWebAPI.Helpers
{
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Question, QuestionForListDto>();
            CreateMap<User, UserForListDto>();

        }
    }
}
