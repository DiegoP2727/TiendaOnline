const header = document.querySelector("header")
const section = document.querySelector("section")

const requestURL = "https://fakestoreapi.com/products"

const request = new XMLHttpRequest();

request.open("GET", requestURL);//Para traer todo el contenido de un json es con un get

request.responseType = "json";
request.send();
request.onload = function(){
    const tienda = request.response;
    pintarCabecera(tienda);
    pintarSection(tienda);
}
function pintarCabecera(jsonObj){
    // console.log("Desde pintarCabecera", jsonObj)
    const etiquetaH1 = document.createElement("h1");
    etiquetaH1.textContent = "Tienda de Productos";
    header.appendChild(etiquetaH1);
}

function pintarSection(tienda){
    for(const producto of tienda){
        const articulo = document.createElement("article");

        const img = document.createElement("img");
        img.src=producto.image;
        img.alt=producto.title;

        const titulo = document.createElement("h2");
        titulo.textContent = producto.title;

        const precio = document.createElement("p");
        precio.className = "precio";
        precio.textContent = `$ ${producto.price}`

        const desc = document.createElement("p");
        desc.textContent = producto.description;

        const boton = document.createElement("button");
        boton.innerText = "Comprar"

        articulo.appendChild(img)
        articulo.appendChild(titulo)
        articulo.appendChild(precio)
        articulo.appendChild(desc)
        articulo.appendChild(boton)

        section.appendChild(articulo)
        
    }
}