using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Login_Register_Page.Data;
using Login_Register_Page.Model;
using Microsoft.AspNetCore.Cors;

namespace Login_Register_Page.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("MycorsPolicy")]
    public class RegistersController : ControllerBase
    {
        private readonly Login_Register_PageContext _context;
        private readonly IConfiguration _configuration;

        public RegistersController(Login_Register_PageContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost("Login")]
        public object Login(Register nAuth)
        {
            IEnumerable<Register> val = _context.Register.ToList();
            foreach (var item in val)
            {
                if (item.Name == nAuth.Name && item.Password == nAuth.Password && item.Phone == nAuth.Phone)
                {
                    return new Response { Status = "Success", Message = "Login Successfully" };
                }
            }
            return new Response { Status = "Invalid", Message = "Invalid." };
        }

        // GET: api/Registers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Register>>> GetRegister()
        {
            return await _context.Register.ToListAsync();
        }

        // GET: api/Registers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Register>> GetRegister(int id)
        {
            var register = await _context.Register.FindAsync(id);

            if (register == null)
            {
                return NotFound();
            }

            return register;
        }

        // PUT: api/Registers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRegister(int id, Register register)
        {
            if (id != register.Id)
            {
                return BadRequest();
            }

            _context.Entry(register).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RegisterExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Registers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Register>> PostRegister(Register register)
        {
            _context.Register.Add(register);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRegister", new { id = register.Id }, register);
        }

        // DELETE: api/Registers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRegister(int id)
        {
            var register = await _context.Register.FindAsync(id);
            if (register == null)
            {
                return NotFound();
            }

            _context.Register.Remove(register);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RegisterExists(int id)
        {
            return _context.Register.Any(e => e.Id == id);
        }
    }
}
