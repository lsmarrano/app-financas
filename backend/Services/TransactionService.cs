using api_financas.Data;
using api_financas.DTOs;
using api_financas.Models;
using Microsoft.EntityFrameworkCore;

namespace api_financas.Services
{
    public interface ITransactionService
    {
        Transaction CreateTransaction(Transaction transaction, int accountId);
        IEnumerable<Transaction> GetTransactionsForAccount(int accountId);
        Transaction GetTransactionById(int id);
        Transaction UpdateTransaction(Transaction transaction);
        void DeleteTransaction(int id);
    }

    public class TransactionService : ITransactionService
    {
        private readonly FinanceDbContext _context;

        public TransactionService(FinanceDbContext context)
        {
            _context = context;
        }

        public Transaction CreateTransaction(Transaction transaction, int accountId)
        {
            var account = _context.Accounts.Find(accountId);
            if (account == null)
            {
                throw new Exception("Conta não encontrada.");
            }

            // Verifique se a transação é uma despesa e se há saldo suficiente
            if (transaction.IsExpense && account.Balance < transaction.Amount)
            {
                throw new Exception("Saldo insuficiente para realizar esta transação.");
            }

            // Se for uma despesa, subtrair do saldo; se for uma receita, adicionar ao saldo
            account.Balance += transaction.IsExpense ? -transaction.Amount : transaction.Amount;

            transaction.AccountId = accountId;
            _context.Transactions.Add(transaction);
            _context.SaveChanges();
            return transaction;
        }


        public IEnumerable<Transaction> GetTransactionsForAccount(int accountId)
        {
            var account = _context.Accounts.Find(accountId);
            if (account == null)
            {
                throw new Exception("Conta não encontrada.");
            }

            return _context.Transactions.Where(t => t.AccountId == accountId).ToList();
        }


        public Transaction GetTransactionById(int id)
        {
            return _context.Transactions.Find(id);
        }

        public Transaction UpdateTransaction(Transaction transaction)
        {
            _context.Entry(transaction).State = EntityState.Modified;
            _context.SaveChanges();
            return transaction;
        }

        public void DeleteTransaction(int id)
        {
            // Encontrar a transação
            var transaction = _context.Transactions.Find(id);
            if (transaction != null)
            {
                // Encontrar a conta associada à transação
                var account = _context.Accounts.Find(transaction.AccountId);
                if (account != null)
                {
                    // Atualizar o saldo da conta com base no tipo de transação
                    if (transaction.IsExpense)
                    {
                        account.Balance += transaction.Amount; // Adicionando de volta o valor se for uma despesa
                    }
                    else
                    {
                        account.Balance -= transaction.Amount; // Subtraindo de volta o valor se for uma receita
                    }

                    // Salvar a mudança na conta
                    _context.SaveChanges();
                }

                // Remover a transação
                _context.Transactions.Remove(transaction);

                // Salvar as mudanças na transação
                _context.SaveChanges();
            }
        }

    }

}
