
//Funcion para renderizar el carrito en la pantalla con la suma del total a pagar.
function renderizarCarrito(){
    let productoAComprar = localStorage.getItem("carrito");
    const compra = JSON.parse(productoAComprar);
    let productosCarrito = [];
    for (prod of compra){
        productosCarrito.push(prod)
    }
    let acumulador = parseInt(localStorage.getItem("precioTotal"));
    for (productos of productosCarrito){
        document.getElementById("tablabody").innerHTML += `
        <tr>
        <td>${productos.id}</td>
        <td>${productos.nombre}</td>
        <td>${productos.precio}</td>
        </tr>`
    }
    document.getElementById("total").innerHTML += `${acumulador}`
}

renderizarCarrito();


// Funcion de limpiar el carrito de compras y el localstorage.
function limpiar(){
        carrito = [];
        localStorage.clear();
        document.getElementById("tablabody").innerHTML = ``;
        document.getElementById("vacio").innerText = `Carrito vacio.`;
        document.getElementById("total").innerText = ``;
}
document.getElementById("limpiar").addEventListener("click",function(){
       limpiar()})