let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); 

    if (nombre === "") {
        alert("El campo esta vacio, ingrese un nombre válido.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = ""; 
    input.focus(); 
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        const nombreSpan = document.createElement("span");
        nombreSpan.textContent = amigo;
        nombreSpan.classList.add("name-amigo");
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.classList.add("delete-button");
        btnEliminar.onclick = () => eliminarAmigo(index);
        li.appendChild(nombreSpan)
        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1); 
    actualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agregue amigos para poder sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSeleccionado}</strong> 🎉</li>`;
}
