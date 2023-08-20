using api_financas.Data;
using api_financas.Models;
using Microsoft.EntityFrameworkCore;

namespace api_financas.Services
{
    public interface IAccountService
    {
        Account CreateAccount(Account account, int userId);
        Account GetAccountById(int id);
        IEnumerable<Account> GetAllAccountsForUser(int userId);
        Account UpdateAccount(Account account);
        void DeleteAccount(int id);
    }

    public class AccountService : IAccountService
    {
        private readonly FinanceDbContext _context;

        public AccountService(FinanceDbContext context)
        {
            _context = context;
        }

        public Account CreateAccount(Account account, int userId)
        {
            var user = _context.Users.Find(userId);
            if (user == null)
            {
                throw new Exception("Usuário não encontrado.");
            }

            account.User = user;
            _context.Accounts.Add(account);
            _context.SaveChanges();
            return account;
        }


        public Account GetAccountById(int id)
        {
            return _context.Accounts
                .Include(a => a.Transactions) // Inclui as transações relacionadas
                .FirstOrDefault(a => a.Id == id); // Busca a conta pelo ID
        }

        public IEnumerable<Account> GetAllAccountsForUser(int userId)
        {
            return _context.Accounts.Where(a => a.UserId == userId).ToList();
        }

        public Account UpdateAccount(Account account)
        {
            _context.Entry(account).State = EntityState.Modified;
            _context.SaveChanges();
            return account;
        }

        public void DeleteAccount(int id)
        {
            var account = _context.Accounts.Find(id);
            if (account != null)
            {
                _context.Accounts.Remove(account);
                _context.SaveChanges();
            }
        }
    }

}
