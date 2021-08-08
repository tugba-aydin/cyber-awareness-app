using SiberWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiberWebAPI.Data
{
    public interface IAuthRepository
    {
        Task<Admin> Register(Admin admin, string password);
        Task<Admin> Login(string userName, string password);
        Task<bool> UserExists(string userName);
    }
}
