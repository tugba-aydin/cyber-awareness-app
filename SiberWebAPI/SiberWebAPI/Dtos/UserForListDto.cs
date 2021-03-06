using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiberWebAPI.Dtos
{
    public class UserForListDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Gender { get; set; }
        public string City { get; set; }
        public int Age { get; set; }
        public int Score { get; set; }
        public string EducationLevel { get; set; }
    }
}
