let carrito = [];
let precio = 0;
let acumulador = 0;


function agregarAlCarrito(productoAComprar){
    // Metodo push para ingresar los items seleccionados al carrito de compras 
    carrito.push(productoAComprar)
    const objetoCarrito = JSON.stringify(carrito);
    localStorage.setItem("carrito", objetoCarrito);
    Swal.fire({
        title: productoAComprar.nombre,
        text: 'Agregado al carrito',
        imageUrl: productoAComprar.imagen,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: productoAComprar.nombre,
        footer: '<a href="carrito.html" style="text-decoration:none"><h3 class="h3">Clickea aqui para ver carrito de compras</h3></a>'
      })
        precio = precioFinal(productoAComprar.precio,precio);
  }

  // Funcion para sumar los precios de los productos y devolver el acumulado para ver el total de la compra.
  function precioFinal(productoElegido, acumulador) {
    acumulador +=  productoElegido;
    localStorage.setItem("precioTotal", acumulador)
    return acumulador;
}


//Funcion para mostrar el acumulado sin modificar pagando con debito y moficandolo al pagar con tarjeta de credito en mas de 3 cuotas.
function formasDePago(acumulador) {
    alert("Seleccione una forma de pago, teniendo en cuenta que si compra con debito no tendra recargo, de lo contrario abonando con credito tendra 3 cuotas sin interes y si desea hacerlo en mas coutas sera con un %35 de recargo");
    let cort = 0;
    while (cort == 0) {
        let abono = parseInt(prompt("Seleccione 1.- Para abonar con debito\nSeleccione 2.- Para abonar Credito"));

        if (abono == 1) {
            alert("El total a pagar es de: $" + acumulador);
            cort = 1;
        }
        else if (abono == 2) {
            let cuotas = parseInt(prompt("Seleccione la cantidad de cuotas que desee hacer, si lo hace en 3 no tendra interes alguno de lo contrario el interes sera de una %35"));
            if (cuotas <= 3) {
                let pagar = acumulador / cuotas;
                alert("Usted pagara un total de: $" + acumulador + " En: " + cuotas + " De: $" + pagar + " Cada cuota");
            }
            else {
                acumulador = acumulador + (acumulador * 0.35);
                pagar = acumulador / cuotas;
                alert("Usted pagara un total de: $" + acumulador + " En: " + cuotas + " De: $" + pagar + " Cada cuota");
            }
            cort = 1;
        }
        else {
            alert("Seleccion invalida");
        }
    }
    return acumulador;
}


//Metodo para buscar un producto mediante un input(lo voy a implementar para el proyecto final)

// const productoBuscado = misProductos.filter((item) => item.nombre.includes(buscar));
// console.table(productoBuscado);

//Utilizacion del metodo find para seleccionar el item a comprar dentro del array de productos 
// const productoBuscado = misProductos.filter((item) => item.nombre.includes(buscar));

//Metodo para ordenar mi pagina de productos mediante menor a mayor precio o viceversa(Futuramente lo voy a utilizar para el proyecto final)

// motherboard.sort((a,b) => a.precio - b.precio);//ascendente

// motherboard.sort((a,b) => b.precio - a.precio);//descendente



