using System.Security.Principal;

namespace api_financas.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public List<Account> Accounts { get; set; }

        public User()
        {
            Accounts = new List<Account>();
        }
    }


}
