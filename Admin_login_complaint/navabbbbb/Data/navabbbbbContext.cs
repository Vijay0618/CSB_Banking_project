using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using navabbbbb.Model;

namespace navabbbbb.Data
{
    public class navabbbbbContext : DbContext
    {
        public navabbbbbContext (DbContextOptions<navabbbbbContext> options)
            : base(options)
        {
        }

        public DbSet<navabbbbb.Model.Navab> Navab { get; set; } = default!;
    }
}
