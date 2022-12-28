using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Login_Register_Page.Model;

namespace Login_Register_Page.Data
{
    public class Login_Register_PageContext : DbContext
    {
        public Login_Register_PageContext (DbContextOptions<Login_Register_PageContext> options)
            : base(options)
        {
        }

        public DbSet<Login_Register_Page.Model.Register> Register { get; set; } = default!;
    }
}
