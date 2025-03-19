// Array para almacenar los nombres de los amigos
let listaDeAmigos = []; // <-- Aquí está el problema, declaraste 'list' pero usas 'listaDeAmigos'

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // por si esta vacio el campo
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido');
        return;
    }
    
    // Agregar el nombre a la lista
    listaDeAmigos.push(nombreAmigo);
    
    // Actualizar la lista visible
    actualizarListaAmigos();
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Enfocar el campo de entrada para continuar agregando nombres
    inputAmigo.focus();
}

// Función para actualizar la lista visible de amigos
function actualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = '';
    
    // Crear elementos de lista para cada amigo
    listaDeAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Verificar si hay amigos en la lista
    if (listaDeAmigos.length === 0) {
        alert('Por favor, agregue al menos un amigo antes de sortear');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    
    // Obtener el amigo seleccionado
    const amigoSeleccionado = listaDeAmigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>¡${amigoSeleccionado} es tu amigo secreto!</li>`;
}

// Agregar evento para permitir agregar amigos presionando Enter
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});