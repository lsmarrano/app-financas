namespace api_financas.Models
{
    public class Transaction
    {
        public int Id { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public bool IsExpense { get; set; } // Verdadeiro para despesa, falso para receita
                                            // Relação com Conta
        public int AccountId { get; set; }
        public Account Account { get; set; }
    }

}
