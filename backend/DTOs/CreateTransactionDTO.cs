namespace api_financas.DTOs
{
    public class CreateTransactionDTO
    {
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public bool IsExpense { get; set; }
        public int AccountId { get; set; }
    }

}
