using api_financas.DTOs;
using api_financas.Models;
using api_financas.Services;
using Microsoft.AspNetCore.Mvc;

namespace api_financas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public IActionResult Post([FromBody] CreateUserDTO userDto)
        {
            
            User newUser = new()
            {
                Name = userDto.Name,
                Email = userDto.Email,
                Password = userDto.Password 
            };

            
            _userService.CreateUser(newUser); 

            
            return CreatedAtAction(nameof(GetById), new { id = newUser.Id }, newUser);
        }  
        

        [HttpGet("{id}")]
        public ActionResult<UserDTO> GetById(int id)
        {
            var userDto = _userService.GetUserById(id);

            if (userDto == null)
            {
                return NotFound();
            }

            return userDto;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDTO loginDto)
        {
            var response = _userService.Authenticate(loginDto.Email);

            if (response == null)
            {
                return NotFound(); // Retornar 404 Not Found se o usuário não for encontrado
            }

            return Ok(response); // Retornar 200 OK com a resposta se o usuário for encontrado
        }


    }

}
