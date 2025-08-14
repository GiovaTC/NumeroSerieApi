# NumeroSerieApi

<img width="2552" height="1079" alt="image" src="https://github.com/user-attachments/assets/cb754279-4421-4786-90ce-853367e65e12" />

Para crear un sistema que genere una serie de 1056 números, los muestre en un frontend hecho en JavaScript (por ejemplo, usando HTML + JS en Visual Studio Code) y 
procese los datos en un backend desarrollado en Visual Studio 2022 (usando, por ejemplo, ASP.NET Core), te puedo guiar paso a paso.

🧩 Estructura general del proyecto
🖥️ Frontend (Visual Studio Code)

HTML para la estructura.

JavaScript para conectarse con el backend y mostrar los datos.

🖧 Backend (Visual Studio 2022)

ASP.NET Core Web API.

Endpoint que genera la serie de 1056 números.

Endpoint para procesar datos si se requiere.

1. 🧠 Backend – ASP.NET Core Web API (Visual Studio 2022)
Paso 1: Crear un proyecto

Abre Visual Studio 2022

Crea un nuevo proyecto: ASP.NET Core Web API

Nombre sugerido: NumeroSerieAPI

Framework: .NET 6 o .NET 7

Paso 2: Crear el controlador

En el proyecto, agrega un controlador llamado SerieController.cs:

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


Este endpoint devuelve una serie de 1056 números del 1 al 1056.

Paso 3: Permitir CORS

En Program.cs (o Startup.cs dependiendo de la versión):

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("PermitirTodo", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

builder.Services.AddControllers();
var app = builder.Build();

app.UseCors("PermitirTodo");
app.MapControllers();
app.Run();

2. 🌐 Frontend – HTML + JavaScript (Visual Studio Code)
Estructura de archivos
frontend/
│
├── index.html
└── script.js

index.html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Serie de Números</title>
</head>
<body>
    <h1>Serie de 1056 Números</h1>
    <button onclick="cargarSerie()">Cargar Serie</button>
    <ul id="lista-numeros"></ul>

    <script src="script.js"></script>
</body>
</html>

script.js
async function cargarSerie() {
    const response = await fetch('https://localhost:5001/api/serie/generar'); // Cambia el puerto si es necesario
    const numeros = await response.json();

    const lista = document.getElementById('lista-numeros');
    lista.innerHTML = ''; // Limpiar antes

    numeros.forEach(num => {
        const item = document.createElement('li');
        item.textContent = num;
        lista.appendChild(item);
    });
}

✅ Resultado esperado

Ejecutas el backend en Visual Studio 2022 → corre en https://localhost:5001 o similar.

Abres el frontend (index.html) en un navegador desde Visual Studio Code.

Al hacer clic en "Cargar Serie", se hace una petición al backend y se muestra la serie de 1056 números en una lista HTML.

🧪 Extras (opcional)

Puedes reemplazar Enumerable.Range(1, 1056) por una lógica diferente si deseas otra secuencia (ej. aleatoria, pares, Fibonacci, etc.).

Agrega más endpoints para procesamiento, filtrado o estadísticas.
