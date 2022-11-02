const celulares = [{
    id: 1,
    nombre: "Iphone13",
    imagen: "../img/iphone-13-efe-900x600.jpg",
    precio: 1100
},
{
    id: 2,
    nombre: "Samsung-Galaxy-S21",
    imagen: "../img/s21_ultra_group_kv_mo_img.jpg",
    precio: 1000
},
{
    id: 3,
    nombre: "Google Pixel 6 - Pro",
    imagen: "../img/csm_Google_Pixel_6_Pro_2513_cbfd8c7d69.jpg",
    precio: 700
},
{
    id: 4,
    nombre: "OnePlus 9",
    imagen: "../img/oneplus-9-2-90485-g-alt.jpg",
    precio: 800
},
{
    id: 5,
    nombre: "Xiaomi Mi 11 5G",
    imagen: "../img/MI-11-5G.1.jpg",
    precio: 600
},
{
    id: 6,
    nombre: "OPPO Find X3 Neo",
    imagen: "../img/oppo-find-x3-neo-900x609.jpg",
    precio: 750
},
{
    id: 7,
    nombre: "Motorola Moto G Power",
    imagen: "../img/moto-G-power.jpg",
    precio: 500
},
{
    id: 8,
    nombre: "Samsung Galaxy Z Fold 3",
    imagen: "../img/samsung-galaxy-z-fold-3-review-image1-coz70vermc.jpg",
    precio: 900
},
{
    id: 9,
    nombre: "Iphone-12",
    imagen: "../img/iphone-12-gallery1-2021_FMT_WHH.jpg",
    precio: 800
},

];

const cpu = [{
    id: 10,
    nombre: "AMD Ryzen 9 3950x",
    imagen: "../img/AMD-Ryzen-9-3950x.jpg",
    precio: 250
},
{
    id: 11,
    nombre: "AMD Ryzen 9 3900XT",
    imagen: "../img/AMD-Ryzen-9-3900XT.jpg",
    precio: 300
},
{
    id: 12,
    nombre: "Intel Core I9-9900K",
    imagen: "../img/Intel-Core-I9-9900K.jpg",
    precio: 350
},
{
    id: 13,
    nombre: "Intel Core i7-9700K",
    imagen: "../img/Intel-Core-i7-9700K.jpg",
    precio: 300
},
{
    id: 14,
    nombre: "AMD Ryzen 7 3700X",
    imagen: "../img/AMD-Ryzen-7-3700X.jpg",
    precio: 200
},
{
    id: 15,
    nombre: "Intel-Core-i5-9600k",
    imagen: "../img/Intel-Core-i5-9600k.jpg",
    precio: 300
},
{
    id: 16,
    nombre: "AMD 3200G Ryzen 3",
    imagen: "../img/AMD-3200G-Ryzen-3.jpg",
    precio: 150
},
{
    id: 17,
    nombre: "Intel i7 10700K",
    imagen: "../img/Intel-Core-i7-10700K.jpg",
    precio: 390
},
{
    id: 18,
    nombre: "AMD Ryzen Threadripper 3970x",
    imagen: "../img/AMD-Ryzen-Threadripper-3970x.jpg",
    precio: 420
}
];


const motherboard = [{
    id: 19,
    nombre: "ASUS ROG Strix X570-E Gaming WiFi II",
    imagen: "../img/ASUS-ROG-Strix-X570-E-Gaming.jpg",
    precio: 350
},
{
    id: 20,
    nombre: "ASUS ROG Strix Z690 E Gaming WiFi",
    imagen: "../img/ASUS-ROG-Strix-Z690-E.jpg",
    precio: 350
},
{
    id: 21,
    nombre: "Gigabyte TRX40 AORUS Master",
    imagen: "../img/Gigabyte-TRX40-AORUS-Master.jpg",
    precio: 250
},
{
    id: 22,
    nombre: "ASUS ROG Maximus Z690 Formula",
    imagen: "../img/ASUS-ROG-Maximus-Z690-Formula.jpg",
    precio: 450
},
{
    id: 23,
    nombre: "ASUS TUF Gaming B550-PLUS",
    imagen: "../img/ASUS-TUF-Gaming-B550-PLUS.jpg",
    precio: 300
},
{
    id: 24,
    nombre: "MSI MAG B660 Tomahawk WiFi",
    imagen: "../img/MSI-MAG-B660-Tomahawk-WiFi.jpg",
    precio: 450
},
{
    id: 25,
    nombre: "Gigabyte X570 I AORUS Pro WiFi",
    imagen: "../img/Gigabyte-X570-I-AORUS-Pro-WiFi.jpg",
    precio: 300
},
{
    id: 26,
    nombre: "ASUS ROG Strix Z690-I Gaming WiFi",
    imagen: "../img/ASUS-ROG-Strix-Z690-I-Gaming-WiFi.jpg",
    precio: 450
},
{
    id: 27,
    nombre: "Asrock B550 Phantom Gaming Velocita",
    imagen: "../img/Asrock-B550.jpg",
    precio: 240
}
];


//Para esta entrega decidi usar objetos estaticos dentro de un array hardcodeado en vez de la clase constructora
//Para la entrega final pienso aplicar de nuevo la clase constructora con metodos para disminuir stock.
//Lo hice asi para esta entrega porque no llegaba con los tiempos!.








// class Producto{
//     constructor(id,nombre,marca,precio,stock){
//         this.id = id;
//         this.nombre = nombre;
//         this.precio = precio;
//         this.marca = marca;
//         this.stock = stock
//     }
//     //Futuramente lo voy a utilizar junto con la minipulacion del DOM para disminuir el stock a medida que se selecciona para comprar un producto.
//     restarStock(){
//         this.stock = this.stock - 1;
//         console.log(`El stock de ${this.nombre} ha sido actualizado`);
//     }
// }

// //Creamos los productos para vender

// const producto0 = new Producto(0,"Teclado Gamer", "Logitech",4000,5);
// const producto1 = new Producto(1,"Auricular Gamer", "Logitech",5000,4);
// const producto2 = new Producto(2,"Mouse inalambrico", "Corsair",6000,6);
// const producto3 = new Producto(3,"Mouse Gamer", "RedDragon",3000,3);
// const producto4 = new Producto(4,"Monitor Gamer", "Asus",40000,3);
// const producto5 = new Producto(5,"Mouse Pad", "Razer",2000,2);

// const misProductos = [producto0,producto1, producto2,producto3,producto4,producto5];

// let precio = 0;
// let acumulador = 0;
// let terminar = 0;
// let productoElegido;
// const conjuntoDeProductos = [];