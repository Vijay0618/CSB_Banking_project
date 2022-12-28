using complaint.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace complaint.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors("MycorsPolicy")]
    public class ComplaintController : ControllerBase
    {
        private ComplaintService _trans;

        public ComplaintController(ComplaintService trans)
        {
            _trans = trans;
        }


        // GET: api/<ComplaintController>
        [HttpGet]
        [EnableCors("MycorsPolicy")]
        public IEnumerable<Complaint> Get()
        {
            return _trans.getall().ToList();
        }

        // GET api/<ComplaintController>/5

        [HttpGet("{name}")]
        [ActionName("Getname")]
        [EnableCors("MycorsPolicy")]
        public IEnumerable<Complaint> Getname(string name)
        {
            return _trans.Selectname(name);
        }

        // GET api/<ComplaintController>/5
        [HttpGet("{dept}")]
        [ActionName("Getdept")]
        public IEnumerable<Complaint> Getdept(string dept)
        {
            return _trans.Selectdept(dept);
        }




        // POST api/<ComplaintController>
        [HttpPost]
        public void Post([FromBody] Complaint value)
        {
            _trans.Insert(value);
        }

        // PUT api/<ComplaintController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Complaint value)
        {
            _trans.Update(id, value);
        }

        // DELETE api/<ComplaintController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _trans.delete(id);
        }
    }
}
