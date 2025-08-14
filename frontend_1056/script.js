async function cargarSerie() {
    const response = await fetch('https://localhost:7096/api/Serie/generar'); // Cambia el puerto si es necesario
    const numeros = await response.json();

    const lista = document.getElementById('lista-numeros');
    lista.innerHTML = ''; // Limpiar antes

    numeros.forEach(num => {
        const item = document.createElement('li');
        item.textContent = num;
        lista.appendChild(item);
    });
}