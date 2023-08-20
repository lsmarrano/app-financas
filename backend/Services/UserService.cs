using api_financas.Data;
using api_financas.DTOs;
using api_financas.Models;

namespace api_financas.Services
{
    public class UserService
    {
        private readonly FinanceDbContext _context;

        public UserService(FinanceDbContext context)
        {
            _context = context;
        }

        public void CreateUser(User user)
        {
            // Aqui você pode adicionar lógica para hash da senha, por exemplo
            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public UserDTO GetUserById(int id)
        {
            var user = _context.Users.FirstOrDefault(u => u.Id == id);

            if (user == null) return null;

            return new UserDTO
            {
                Id = user.Id,
                Name = user.Name,
                Email = user.Email
                
            };
        }

        public LoginResponseDTO Authenticate(string email)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == email);

            if (user == null)
            {
                return null; // Usuário não encontrado
            }

            return new LoginResponseDTO { UserId = user.Id, PasswordHash = user.Password, Name = user.Name }; // Usuário encontrado
        }


    }

}
