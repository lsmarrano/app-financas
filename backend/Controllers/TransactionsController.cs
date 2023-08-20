using api_financas.DTOs;
using api_financas.Models;
using api_financas.Services;
using Microsoft.AspNetCore.Mvc;

namespace api_financas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransactionsController : ControllerBase
    {
        private readonly ITransactionService _transactionService;

        public TransactionsController(ITransactionService transactionService)
        {
            _transactionService = transactionService;
        }

        // GET: api/Transactions/{accountId}
        [HttpGet("{accountId}")]
        public IActionResult GetTransactionsForAccount(int accountId)
        {
            try
            {
                return Ok(_transactionService.GetTransactionsForAccount(accountId));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // GET: api/Transactions/Details/{id}
        [HttpGet("Details/{id}")]
        public IActionResult GetTransactionById(int id)
        {
            try
            {
                return Ok(_transactionService.GetTransactionById(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // POST: api/Transactions
        [HttpPost]
        public IActionResult CreateTransaction([FromBody] CreateTransactionDTO createTransactionDto)
        {
            try
            {
                Transaction transaction = new Transaction
                {
                    Amount = createTransactionDto.Amount,
                    Date = createTransactionDto.Date,
                    Description = createTransactionDto.Description,
                    IsExpense = createTransactionDto.IsExpense,
                    AccountId = createTransactionDto.AccountId
                };

                return Ok(_transactionService.CreateTransaction(transaction, createTransactionDto.AccountId));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        // PUT: api/Transactions/{id}
        [HttpPut("{id}")]
        public IActionResult UpdateTransaction(int id, [FromBody] Transaction transaction)
        {
            try
            {
                return Ok(_transactionService.UpdateTransaction(transaction));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // DELETE: api/Transactions/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteTransaction(int id)
        {
            try
            {
                _transactionService.DeleteTransaction(id);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }

}
