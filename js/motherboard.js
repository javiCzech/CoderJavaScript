let contenedorMotherboard1 = document.getElementById("septimo");
let contenedorMotherboard2 = document.getElementById("octavo");
let contenedorMotherboard3 = document.getElementById("noveno");



//Funcion renderizar Motherboards
function renderizarMotherboard(){
    for(const mother of motherboard)
    if (mother.id >= 19){
    contenedorMotherboard1.innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-4" id="card-animation">
    <div class="card mb-4" id="card-tamaño">
      <img src=${mother.imagen} class="card-img-top pt-2" alt=${mother.nombre}
        id="imagen-tarjeta"/>
      <div class="card-body text-center">
        <h2 class="card-title" id="h2">${mother.nombre}</h2>
        <p>US$${mother.precio}</p>
        <button class="btn btn-negro mt-3" id="btn${mother.id}" target="_blank">Comprar</button>
      </div>
    </div>
  </div>
    `}else if (mother.id <= 22 && mother.id >= 24){
    contenedorMotherboard2.innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-4" id="card-animation">
    <div class="card mb-4" id="card-tamaño">
      <img src=${mother.imagen} class="card-img-top pt-2" alt=${mother.nombre}
        id="imagen-tarjeta"/>
      <div class="card-body text-center">
        <h2 class="card-title" id="h2">${mother.nombre}</h2>
        <p>US$${mother.precio}</p>
        <button class="btn btn-negro mt-3" id="btn${mother.id}" target="_blank">Comprar</button>
      </div>
    </div>
  </div>
    `
    }
    else {
    contenedorMotherboard3.innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-4" id="card-animation">
    <div class="card mb-4" id="card-tamaño">
      <img src=${mother.imagen} class="card-img-top pt-2" alt=${mother.nombre}
        id="imagen-tarjeta"/>
      <div class="card-body text-center">
        <h2 class="card-title" id="h2">${mother.nombre}</h2>
        <p>US$${mother.precio}</p>
        <button class="btn btn-negro mt-3" id="btn${mother.id}" target="_blank">Comprar</button>
      </div>
    </div>
  </div>
  `
    }
    //Eventos
    motherboard.forEach((mother)=>{
        document.getElementById(`btn${mother.id}`).addEventListener("click",function(){
          agregarAlCarrito(mother)
          console.log(carrito);
        });
      })
}

renderizarMotherboard();