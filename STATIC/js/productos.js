const btnCarrito = document.querySelector('.contenedor-carrito-ico');
const containerCarritoProductos = document.querySelector(
    '.contenedor-carrito-productos'
);

btnCarrito.addEventListener('click', () => {
    containerCarritoProductos.classList.toggle('.hidden-carrito')

});

const carritoInfo = document.querySelector('.carrito-producto');
const filaProducto = document.querySelector('.fila-productos');

const productosLista = document.querySelector('.contenedor-cards');

let todosProductos = [];

const valorTotal = document.querySelector('.total-pagar');

const carritoVacio = document.querySelector('.carrito-vacio');

const carritoTotal = document.querySelector('.carrito-total');

const contadorProductos = document.querySelector('#contador-prd');

productosLista.addEventListener('click', e => {
    if (e.target.classList.contains('boton-compra')) {
        const producto = e.target.parentElement;

        const infoProducto = {
            quantity: 1,
            title: producto.querySelector('.titulo-producto').textContent,
            price: producto.querySelector('.precio').textContent,
        };

        const existe = todosProductos.some(producto => producto.title === infoProducto.title);
        if(existe){
            const producto = todosProductos.map(producto =>{
                if(producto.title === infoProducto.title) {
                    producto.quantity++ ;
                    return producto;
                } else {
                    return producto;
                }
            })
            todosProductos = [...producto];
        } else{
            todosProductos = [...todosProductos, infoProducto];
        }

        showHTML();
    }

});

filaProducto.addEventListener('click', e=> {
    if(e.target.classList.contains('icono-cerrar')){
        const producto = e.target.parentElement
        const titulo = producto.querySelector('p').textContent

        todosProductos = todosProductos.filter(producto => producto.title !== titulo);

        console.log(todosProductos);
        showHTML();
    }
});

const showHTML = () => {
    if(todosProductos.length ===0) {
        carritoVacio.classList.remove('hidden');
        filaProducto.classList.add('hidden');
        carritoTotal.classList.add('hidden');
    } else {
        carritoVacio.classList.add('hidden');
        filaProducto.classList.remove('hidden');
        carritoTotal.classList.remove('hidden');
    }

    filaProducto.innerHTML= "";

    let total = 0;

    let totalProductos= 0;

    todosProductos.forEach(producto => {
        const contenedorProducto = document.createElement('div');
        contenedorProducto.classList.add('carrito-producto');

        contenedorProducto.innerHTML = `
                        <div class="info-carrito-producto">
                            <span class="cantidad-producto-carrito">${producto.quantity}</span>
                            <p class="titulo-producto-carrito">${producto.title}</p>
                            <span class="precio-producto-carrito">${producto.price}</span>
                        </div>
                        <img src="../STATIC/IMG/iconos/cerrar.png" alt="cerrar" class="icono-cerrar">
        `

        filaProducto.append(contenedorProducto);

        total = total + parseInt(producto.quantity * producto.price.slice(1));
        totalProductos = totalProductos + producto.quantity;
    });

    valorTotal.innerText = `$${total}`;
    contadorProductos.innerText = totalProductos;
};

