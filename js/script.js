
const libros = [
    { id: 1, nombre: "El heroe perdido", precio: 875, autor: "Rick Riodan", formato: "Fisico", imagen: "/img/libro.jpg" },
    { id: 2, nombre: "El Arte de la Guerra", precio: 723, autor: "Sun Tzu", formato: "Fisico", imagen: "/img/libro.jpg" },
    { id: 3, nombre: "Casa de Hojas", precio: 877, autor: "Mark Z. Danielewski", formato: "Fisico", imagen: "/img/libro.jpg" },
    { id: 4, nombre: "Into the Pit", precio: 402, autor: "Scott Cawthon", formato: "Fisico", imagen: "/img/libro.jpg" },
    { id: 5, nombre: "Voces Anonimas", precio: 490, autor: "Guillermo Lockhart", formato: "Fisico", imagen: "/img/libro.jpg" },
    { id: 6, nombre: "Heartstopper", precio: 850, autor: "Alice Oseman", formato: "Fisico", imagen: "/img/libro.jpg" },
    { id: 7, nombre: "The Lord of the Rings", precio: 670, autor: "J. R. R. Tolkien", formato: "Fisico", imagen: "/img/libro.jpg" }
]; // array de los libros



// funcion para mostrar el catalogo
function mostrar() { 
    const cont = document.getElementById("cont"); // div con id cont
    cont.innerHTML = ""; // reinicia el contenido del hmtl
    libros.forEach(libro => { // recorre los libros del array
        const tar = document.createElement("div"); // crea elemento div 
        tar.classList.add("producto"); // le asigna la clase producto
    tar.innerHTML = `
        <img src="${libro.imagen}" alt="${libro.nombre}">
        <h3>${libro.nombre}</h3>
        <p>${libro.precio}</p>
        <p>${libro.autor}</p>
        <p>${libro.formato}</p>
        <button class="addbutton">Agregar al carrito</button>
        `; // para cada libro se crea una tarjeta

        const boton = tar.querySelector(".addbutton"); // busca el boton de los libros
        boton.addEventListener('click', () => agregar(libro)); // le da una funcion al boton

        cont.appendChild(tar); //agrega al contenedor cont las tarjetas

        actualizar(); // actualiza la notificacion
});
}
//

// funcion para agregar carrito
function agregar(libro) { 
    const carrito = cargarCarrito(); // asigna el carrito
    const existente = carrito.find(item => item.id === libro.id); // busca el id del libro
        carrito.push({ //manda estos datos al array carrito
        id: libro.id,
        nombre: libro.nombre,
        precio: libro.precio,
        formato: libro.formato,
        imagen: libro.imagen
    });
    guardarCarrito(carrito); // guarda el carrito
    actualizar(); // actualiza la notificacion
}
//



document.addEventListener("DOMContentLoaded", () => { // cuando se carga la pagina muestra el catalogo
    mostrar();
});

