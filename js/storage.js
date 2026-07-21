
function guardarCarrito(carrito) { 
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
};

const CLAVE_CARRITO = "carrito";

function cargarCarrito() {
    const carritoGuardado = localStorage.getItem(CLAVE_CARRITO);

    if (carritoGuardado) {
        return JSON.parse(carritoGuardado);
    }
    return [];
};

function actualizar() { // funcion para mostrar cuando el carrito esta vacio o tiene algo
    const carrito = cargarCarrito();
    const noti = document.getElementById("not")
        if (carrito.length === 0) {
        noti.style.visibility = "hidden";   
        } else {
        noti.style.visibility = "visible";
        }
}
