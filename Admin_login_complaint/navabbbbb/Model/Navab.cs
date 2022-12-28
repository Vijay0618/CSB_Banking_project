using System.ComponentModel.DataAnnotations;

namespace navabbbbb.Model
{
    public class Navab
    {
        [Key]
        public int Id { get; set; }
        public string username { get; set; }
        public string password { get; set; }
    }
}
