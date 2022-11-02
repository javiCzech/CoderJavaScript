# Tercer Pre Entrega

Terminado el tercer pre entrega del trabajo final.

Agrege el el html y css de mi trabajo previo de programacion web.

En esta entrega utilize objetos hardcodeados en vez de clase constructoras porque no llegaba con los tiempo,
para la entrega final planeo volver a sumar las clase constructora.

Modularize el codigo, el array con los productos estan en la pagina productos y despues renderize segun los productos,
(celulares,cpu,motherboard) con una pagina para cada uno.

Cree una funcion para agregar cada producto que el cliente quiere comprar a un array carrito y en el mismo lo parseo con json para despues subirlo al local storage.

Despues con sweetAlert2 cree una alerta donde me da la opcion de seguir comprando presionando ok o ir al carrito con el link en la misma alerta.

En la pagina de carrito (que solo se llega a travez del alert), tomo el array guardado en el localStorage y lo itero para
renderizarlo y mostrarlo en pantalla.

Por ultimo cree una funcion para limpiar el carrito, limpiar el localstorage y ademas limpiar los datos en pantalla para dejar un h2 con la frase "Carrito vacio". y un boton para volver al index para seguir navegando.

Un abrazo gracias!
