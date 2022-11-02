let contenedorCelular1 = document.getElementById("primero");
let contenedorCelular2 = document.getElementById("segundo");
let contenedorCelular3 = document.getElementById("tercero");




//Funcion renderizar Celulares
function renderizarCelulares(){
    for(const celular of celulares)
    if (celular.id <= 3){
    contenedorCelular1.innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-4" id="card-animation">
    <div class="card mb-4" id="card-tamaño">
      <img src=${celular.imagen} class="card-img-top pt-2" alt=${celular.nombre}
        id="imagen-tarjeta"/>
      <div class="card-body text-center">
        <h2 class="card-title" id="h2">${celular.nombre}</h2>
        <p>US$${celular.precio}</p>
        <button class="btn btn-negro mt-3" id="btn${celular.id}" target="_blank">Comprar</button>
      </div>
    </div>
  </div>
    `}else if (celular.id <= 4 && celular.id >= 7){
    contenedorCelular2.innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-4" id="card-animation">
    <div class="card mb-4" id="card-tamaño">
      <img src=${celular.imagen} class="card-img-top pt-2" alt=${celular.nombre}
        id="imagen-tarjeta"/>
      <div class="card-body text-center">
        <h2 class="card-title" id="h2">${celular.nombre}</h2>
        <p>US$${celular.precio}</p>
        <button class= btn btn-negro mt-3" id="btn${celular.id}" target="_blank">Comprar</button>
      </div>
    </div>
  </div>
    `
    }
    else {
    contenedorCelular3.innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-4" id="card-animation">
    <div class="card mb-4" id="card-tamaño">
      <img src=${celular.imagen} class="card-img-top pt-2" alt=${celular.nombre}
        id="imagen-tarjeta"/>
      <div class="card-body text-center">
        <h2 class="card-title" id="h2">${celular.nombre}</h2>
        <p>US$${celular.precio}</p>
        <button class="btn btn-negro mt-3" id="btn${celular.id}" target="_blank">Comprar</button>
      </div>
    </div>
  </div>
  `
    }
    //Eventos
    celulares.forEach((celular)=>{
      document.getElementById(`btn${celular.id}`).addEventListener("click",function(){
        agregarAlCarrito( celular)
      });
    })
    
}

renderizarCelulares();

