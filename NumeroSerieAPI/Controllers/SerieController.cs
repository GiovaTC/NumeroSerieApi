using Microsoft.AspNetCore.Mvc;

namespace NumeroSerieAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SerieController : ControllerBase
    {
        [HttpGet("generar")]
        public IActionResult GenerarSerie()
        {
            var numeros = Enumerable.Range(1, 1056).ToArray();
            return Ok(numeros);
        }
    }
}