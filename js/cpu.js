let contenedorCpu1 = document.getElementById("cuarto");
let contenedorCpu2 = document.getElementById("quinto");
let contenedorCpu3 = document.getElementById("sexto");

//Funcion renderizar Cpu
function renderizarCpu(){
    for(const procesador of cpu)
    if (procesador.id >= 10){
    contenedorCpu1.innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-4" id="card-animation">
    <div class="card mb-4" id="card-tamaño">
      <img src=${procesador.imagen} class="card-img-top pt-2" alt=${procesador.nombre}
        id="imagen-tarjeta"/>
      <div class="card-body text-center">
        <h2 class="card-title" id="h2">${procesador.nombre}</h2>
        <p>US$${procesador.precio}</p>
        <button class="btn btn-negro mt-3" id="btn${procesador.id}" target="_blank">Comprar</button>
      </div>
    </div>
  </div>
    `}else if (procesador.id <= 13 && procesador.id >= 15){
    contenedorCpu2.innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-4" id="card-animation">
    <div class="card mb-4" id="card-tamaño">
      <img src=${procesador.imagen} class="card-img-top pt-2" alt=${procesador.nombre}
        id="imagen-tarjeta"/>
      <div class="card-body text-center">
        <h2 class="card-title" id="h2">${procesador.nombre}</h2>
        <p>US$${procesador.precio}</p>
        <button class="btn btn-negro mt-3" id="btn${procesador.id}" target="_blank">Comprar</button>
      </div>
    </div>
  </div>
    `
    }
    else {
    contenedorCpu3.innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-4" id="card-animation">
    <div class="card mb-4" id="card-tamaño">
      <img src=${procesador.imagen} class="card-img-top pt-2" alt=${procesador.nombre}
        id="imagen-tarjeta"/>
      <div class="card-body text-center">
        <h2 class="card-title" id="h2">${procesador.nombre}</h2>
        <p>US$${procesador.precio}</p>
        <button class="btn btn-negro mt-3" id="btn${procesador.id}" target="_blank">Comprar</button>
      </div>
    </div>
  </div>
  `
    }
    // console.log(carrito);
    //Eventos
    cpu.forEach((procesador)=>{
      document.getElementById(`btn${procesador.id}`).addEventListener("click",function(){
        agregarAlCarrito(procesador)
      });
    })
}

renderizarCpu();