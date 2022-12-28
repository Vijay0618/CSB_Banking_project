using Microsoft.AspNetCore.Mvc;

namespace complaint.Models
{
    public interface IComplaint
    {
          public void Insert([FromBody] Complaint bk);
        public List<Complaint> Selectdept(string dept);
        public List<Complaint> getall();

        public List<Complaint> Selectname(string name);

    }
}
