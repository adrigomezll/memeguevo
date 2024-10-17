/**
 * Clase que representa un producto en la tienda.
 * @class Producto
 */
class Producto {
    /**
     * Crea un producto.
     * @param {string} nombre - El nombre del producto.
     * @param {number} precio - El precio del producto.
     */
    constructor(nombre, precio) {
        this.nombre = nombre;  // Nombre del producto
        this.precio = precio;  // Precio del producto
    }

    /**
     * Obtiene el precio del producto con impuestos aplicados.
     * @param {number} impuesto - El porcentaje del impuesto.
     * @return {number} Precio final con impuestos.
     */
    obtenerPrecioConImpuesto(impuesto) {
        return this.precio + (this.precio * impuesto);
    }
}

/**
 * Clase que representa el carrito de compras de un usuario.
 * @class Carrito
 */
class Carrito {
    /**
     * Crea un carrito de compras.
     */
    constructor() {
        this.productos = [];  // Lista de productos en el carrito
    }

    /**
     * Agrega un producto al carrito.
     * @param {Producto} producto - El producto a agregar.
     */
    agregarProducto(producto) {
        this.productos.push(producto);
    }

    /**
     * Calcula el precio total de todos los productos en el carrito.
     * @return {number} El precio total.
     */
    calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }
}

/**
 * Clase que representa un usuario de la tienda.
 * @class Usuario
 */
class Usuario {
    /**
     * Crea un usuario.
     * @param {string} nombre - El nombre del usuario.
     * @param {Carrito} carrito - El carrito de compras del usuario.
     */
    constructor(nombre, carrito) {
        this.nombre = nombre;  // Nombre del usuario
        this.carrito = carrito;  // Carrito del usuario
    }

    /**
     * Realiza la compra de todos los productos en el carrito.
     */
    realizarCompra() {
        const total = this.carrito.calcularTotal();
        console.log(`${this.nombre} ha realizado una compra por un total de $${total}`);
    }
}

// Ejemplo de uso:
const producto1 = new Producto("Laptop", 1000);
const producto2 = new Producto("Ratón", 50);

const carrito = new Carrito();
carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);

const usuario = new Usuario("Eric Conejero", carrito);
usuario.realizarCompra();  // "Eric Conejero ha realizado una compra por un total de $1050"
