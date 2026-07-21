function mostrarCarrito() {
    const carrito = cargarCarrito();
    const cont = document.getElementById("cont")
    const resumen = document.getElementById("resumen")

    let total = 0;

    cont.innerHTML = "";

    if (carrito.length === 0) {
        cont.innerHTML = `<h3>CARRITO VACIO</h3>`;
        resumen.textContent = `Total: $${total}`;
        return;
    }

    carrito.forEach(libro => {
        const subtotal = libro.precio;
        total += subtotal;

        const div = document.createElement("div");
        div.classList.add("producto")
        
        div.innerHTML = `
        <h3>${libro.nombre}</h3>
        <img src="${libro.imagen}" alt="${libro.nombre}">
        <p>Formato: ${libro.formato}</p>
        <p>Precio: ${libro.precio}</p>
        <button class="eliminar">ELIMINAR</button>
        `;
        const boton = div.querySelector(".eliminar");
        boton.addEventListener("click", () => eliminar(libro))
        cont.appendChild(div);


    });

    resumen.textContent = `Total: $${total}`;
    actualizar();

};

function eliminar(libro) {
    console.log("aura");
    const carrito = cargarCarrito();
    const existente = carrito.find(item => item.id === libro.id);
        carrito.splice(libro, 1);
    
    guardarCarrito(carrito);
    actualizar();
    mostrarCarrito();
}
//

function vaciarCarrito() {
    guardarCarrito([]);
    actualizar();
    mostrarCarrito();
}

function comprar() {
    const carrito = cargarCarrito();
    
    if (carrito.length === 0) {
        alert("Carrito vacio");
    } else {
        alert("Compra realizada con exito");
        vaciarCarrito();
    }
    actualizar();
}
document.addEventListener("DOMContentLoaded", () => {
    mostrarCarrito();
    actualizar();
    document.getElementById("comprar").addEventListener("click", comprar)
    document.getElementById("vaciar").addEventListener("click", vaciarCarrito);
});

