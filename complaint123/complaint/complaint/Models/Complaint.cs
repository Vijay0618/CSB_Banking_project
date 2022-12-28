namespace complaint.Models
{
    public class Complaint
    {
        public int userId { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string TypeOfComplaint { get; set; }
        public string IPaddress { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string Branch { get; set; }
        public string ComplaintDescription { get; set; }
        public string AccountNumber { get; set; }
     
        public string Status { get; set; }
        public string Reply { get; set; }

        public DateTime datetime { get; set; }


    }
}
