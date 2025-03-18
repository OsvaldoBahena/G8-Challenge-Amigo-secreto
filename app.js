// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Fecha: 14 de marzo del 2025 al 18 de marzo del 2025.

//Estas seran las variables a usar.
let nombreAmigo; //Guardara los nombres ingresados.
let amigos = []; //Almacenara los nombres aqui.
let listaAmigos; //Mostrara los nombres almacenados.
let numeroSorteo; //Sera el que busque al ganador.
let nombreSorteado; //Guardara el nombre ganador.
let resultado; //Mostrara al ganador del sorteo.

//Funcion para agregar amigos.
function agregarAmigo() {
    //Captura los nombres ingresados.
    nombreAmigo = document.getElementById("amigo").value;
    //Validara si el campo esta vacio o no.
    if (nombreAmigo == '') {
        //Manda mensaje de alerta si el campo esta vacio.
        alert('Por favor, ingresa un nombre');
        return;
    }
    //Validar si el nombre ya existe.
    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} ya esta incluido`);
        return;
    }
    //Manda a llamar las funciones.
    guardarAmigos();
    limpiarCaja();
    actualizarLista();
}

//Funcion para agregar a la lista.
function guardarAmigos() {
    amigos.push(nombreAmigo);
    return;
}

//Funcion para limpiar la caja.
function limpiarCaja() {
    document.querySelector("#amigo").value = '';
}

//Funcion para actualizar la lista de nombres.
function actualizarLista() {
    //Mostrara los nombres almacenados.
    listaAmigos = document.getElementById('listaAmigos');
    //Limpiara la lista para evitar duplicados.
    listaAmigos.innerHTML = '';
    //Recorrera el arreglo y creara los elementos de lista.
    for (let i = 0; i < amigos.length; i++) {
        //Creara los elementos de lista.
        const li = document.createElement('li');
        //Creara un elemento nuevo para cada amigo.
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//Funcion para sortear al amigo secreto.
function sortearAmigo() {
    //Validara si el arreglo esta vacio o no.
    if (amigos.length != 0) {
        //Genara el numero sorteado de forma aleatoria.
        numeroSorteo = Math.floor(Math.random() * amigos.length);
        //Sacara el nombre sorteado de la lista.
        nombreSorteado = amigos[numeroSorteo];
        //Actualizara y mostrara al nombre ganador.
        resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo secreto sorteado es: ${nombreSorteado}`;
    } else {
        //Mostrara el mensaje si el arreglo esta vacio.
        alert('No hay participantes en la lista');
    }
}
