using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Win32;
using navabbbbb.Data;
using navabbbbb.Model;

namespace navabbbbb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("MycorsPolicy")]
    public class RegistersController : ControllerBase
    {
        private readonly navabbbbbContext _context;
        private readonly IConfiguration _configuration;

        public RegistersController(navabbbbbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost("Login")]
        public object Login(Navab nAuth)
        {
            IEnumerable<Navab> val = _context.Navab.ToList();
            foreach (var item in val)
            {
                if (item.username == nAuth.username && item.password == nAuth.password)
                {
                    return new Response { Status = "Success", Message = "Login Successfully" };
                }
            }
            return new Response { Status = "Invalid", Message = "Invalid." };
        }

        // GET: api/Navabs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Navab>>> GetNavab()
        {
            return await _context.Navab.ToListAsync();
        }

        // GET: api/Navabs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Navab>> GetNavab(int id)
        {
            var navab = await _context.Navab.FindAsync(id);

            if (navab == null)
            {
                return NotFound();
            }

            return navab;
        }

        // PUT: api/Navabs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNavab(int id, Navab navab)
        {
            if (id != navab.Id)
            {
                return BadRequest();
            }

            _context.Entry(navab).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NavabExists(id))
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

        // POST: api/Navabs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Navab>> PostNavab(Navab navab)
        {
            _context.Navab.Add(navab);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNavab", new { id = navab.Id }, navab);
        }

        // DELETE: api/Navabs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNavab(int id)
        {
            var navab = await _context.Navab.FindAsync(id);
            if (navab == null)
            {
                return NotFound();
            }

            _context.Navab.Remove(navab);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NavabExists(int id)
        {
            return _context.Navab.Any(e => e.Id == id);
        }
    }
}
