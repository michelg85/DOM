//Creo la clase de objeto producto como base para cargar los productos 
class Producto {
    constructor(nombre, id, precio, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.stock = stock;

    }
}

//Inicializo arrays para las categorias de los productos
const tablas = [];
const tonkatsus = [];
const gyozas = [];

//Cargo el stock de los productos
//TABLAS
tablas.push(new Producto("Tabla Taiko", 1, 2000, 10));
tablas.push(new Producto("Tabla Taikito", 2, 1400, 8));
tablas.push(new Producto("Tabla simple", 3, 1200, 12));
tablas.push(new Producto("Tabla Veggie", 4, 1200, 5));
//TONKATSU
tonkatsus.push(new Producto("Tonkatsu Cerdo", 5, 1200, 30));
//GYOZAS
gyozas.push(new Producto("Gyozas Taiko", 6, 980, 30));



//DOM ----------------------------------------------------------------------------------------------------
//primero tomo control sobre la section previamente creada en el HTML
let sectionProductos = document.getElementById("section-productos");

//creo la funcion para crear el codigo HTML de las cards
function crearCard (producto) {
    //primero creo el div contenedor para cada card y aplico estilos de bootstrap
    let card = document.createElement("div");
    card.setAttribute("class", "card card-producto");
    card.style.width = "18rem";
    //le asigno las cards al elemento padre section
    sectionProductos.appendChild(card);
    //creo divs que contengan las imagenes de los productos y se los asigno como hijos a las cards
    let cardImg = document.createElement("div");
    let pathimagen = `./imagenes/${producto.id}.jpg`
    console.log(pathimagen)
    cardImg.innerHTML = `<img src="${pathimagen}"  class="card-img-top" alt="${producto.nombre}"></img>`;
    card.appendChild(cardImg);
    //creo divs que contengan los nombres de los productos y los botones, despues se los asigno como hijos a las cards
    let cardBody = document.createElement("div");
    cardBody.innerHTML = `<h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text"> Precio: $${producto.precio} </p>
                            <button class="btn btn-dark">Comprar</button>`;
    card.appendChild(cardBody);
    cardBody.setAttribute("class", "card-body");
}

//recorro los arrays de productos para crear las cards con la funcion crearCard
for (const tabla of tablas) {
   crearCard(tabla);
}

for (const tonkatsu of tonkatsus) {
    crearCard(tonkatsu);
}

for (const gyoza of gyozas) {
    crearCard(gyoza);
}

