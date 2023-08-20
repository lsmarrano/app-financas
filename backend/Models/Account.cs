using System.Transactions;

namespace api_financas.Models
{
    public class Account
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Balance { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public List<Transaction> Transactions { get; set; }

        public Account()
        {
            Transactions = new List<Transaction>();
        }
    }


}
