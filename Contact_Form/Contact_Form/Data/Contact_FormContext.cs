using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Contact_Form.Model;

namespace Contact_Form.Data
{
    public class Contact_FormContext : DbContext
    {
        public Contact_FormContext (DbContextOptions<Contact_FormContext> options)
            : base(options)
        {
        }

        public DbSet<Contact_Form.Model.Contact> Contact { get; set; } = default!;
    }
}
