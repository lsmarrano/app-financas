using api_financas.DTOs;
using api_financas.Models;
using api_financas.Services;
using Microsoft.AspNetCore.Mvc;

namespace api_financas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountsController : ControllerBase
    {
        private readonly IAccountService _accountService;

        public AccountsController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpPost]
        public ActionResult<AccountResponseDTO> Create([FromBody] CreateAccountDTO createAccountDto)
        {
            var account = new Account
            {
                Name = createAccountDto.Name,
                Balance = 0, // Iniciando com saldo zero
                UserId = createAccountDto.UserId // Associando com o usuário
            };

            var createdAccount = _accountService.CreateAccount(account, createAccountDto.UserId);

            var responseDto = new AccountResponseDTO
            {
                Id = createdAccount.Id,
                Name = createdAccount.Name,
                Balance = createdAccount.Balance
            };

            return responseDto;
        }



        [HttpGet("{id}")]
        public ActionResult<Account> GetById(int id)
        {
            return _accountService.GetAccountById(id);
        }

        [HttpGet("user/{userId}")]
        public ActionResult<IEnumerable<Account>> GetAllForUser(int userId)
        {
            return _accountService.GetAllAccountsForUser(userId).ToList();
        }

        [HttpPut("{id}")]
        public ActionResult<Account> Update(int id, Account account)
        {
            if (id != account.Id)
            {
                return BadRequest();
            }
            return _accountService.UpdateAccount(account);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _accountService.DeleteAccount(id);
            return NoContent();
        }
    }


}
