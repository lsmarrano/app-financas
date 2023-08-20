namespace api_financas.DTOs
{
    public class LoginResponseDTO
    {
        public int UserId { get; set; }
        public string PasswordHash { get; set; }
        public string Name { get; set; }
    }
}
