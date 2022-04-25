class Automovil {
    constructor (marca, modelo, precio, imagen) {
        this.Marca = marca ;
        this.Modelo = modelo;
        this.Precio = precio;
        this.Imagen = imagen;
    }
}
let auto = new Automovil ("mazda 3", "Touring", "$ 5500000000", "imagenes/mazda-3.jpg");

function validarMazda () {
    alert(auto.Marca + "" + auto.Modelo + ""  + " El automovil que necesitas¡¡");
    
    mostrarVehiculo();
}
function mostrarVehiculo() {
    let contentPrincipal = document.getElementById("main_content");
    let contentAuto      = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "mazda")

    let imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", auto.Imagen, );

    let marcaAuto = document.createElement("label");
    contentAuto.appendChild(marcaAuto);
    let textMarca = document.createTextNode(auto.Marca );
    marcaAuto.appendChild(textMarca);
    marcaAuto.setAttribute("class", "label")

    let modeloAuto  =  document.createElement("label");
    contentAuto.appendChild(modeloAuto);
    let textModelo  =  document.createTextNode(auto.Modelo);
    modeloAuto.appendChild(textModelo);
    modeloAuto.setAttribute("class", "label")

    let precioAuto = document.createElement("label");
    contentAuto.appendChild(precioAuto);
    let textAuto = document.createTextNode(auto.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "label")

    
}

let toyota = new Automovil ("Toyota", "Prado", "$ 219.800.000", "imagenes/toyota_prado.jpg");

function validarToyota () {
    alert (toyota.Marca + "" + toyota.Modelo + "" + "El auto perfecto para salir de paseo con tu familia o amigos¡¡")

    mostrarToyota ();
}

function mostrarToyota () {
    let contenedorPrinToyota = document.getElementById("main_content");
    let contentToyota        = document.createElement("div");
    contenedorPrinToyota.appendChild(contentToyota);
    contentToyota.setAttribute("class", "toyota")

    let imgToyota = document.createElement("img");
    contentToyota.appendChild(imgToyota);
    imgToyota.setAttribute("src", toyota.Imagen)
    
    let marcaToyota = document.createElement("label");
    contentToyota.appendChild(marcaToyota);
    let textToyotaMarca = document.createTextNode(toyota.Marca);
    marcaToyota.appendChild(textToyotaMarca);

    let modeloToyota = document.createElement("label");
    contentToyota.appendChild(modeloToyota);
    let textModelToyota = document.createTextNode(toyota.Modelo);
    modeloToyota.appendChild(textModelToyota);

    let precioToyota = document.createElement("label");
    contentToyota.appendChild(precioToyota);
    let textPrecioToyota = document.createTextNode(toyota.Precio);
    precioToyota.appendChild(textPrecioToyota);

    
}
 let chevrolet = new Automovil ("Chevrolet", "Camaro", "$ 274000000", "imagenes/chevrolet_camaro.jpg");
 function validarChevrolet() {
     alert (chevrolet.Marca + "" + chevrolet.Modelo + "" + "El auto mas eficaz en la carretera¡¡")

     mostarChevrolet();
 }

function mostarChevrolet () {
    let contenedorPrincChevrolet = document.getElementById("main_content");
    let contnedorChevrolet = document.createElement("div");
    contenedorPrincChevrolet.appendChild(contnedorChevrolet);
    contnedorChevrolet.setAttribute("class", "chevrolet")

    let imgChevrolet = document.createElement("img");
    contnedorChevrolet.appendChild(imgChevrolet);
    imgChevrolet.setAttribute("src", chevrolet.Imagen)
    

    let marcaChevrolet = document.createElement("label");
    contnedorChevrolet.appendChild(marcaChevrolet);
    let textMarcaChevrolet = document.createTextNode(chevrolet.Marca);
    marcaChevrolet.appendChild(textMarcaChevrolet);

    let modeloChevrolet = document.createElement("label");
    contnedorChevrolet.appendChild(modeloChevrolet);
    let textModeloChevrolet = document.createTextNode(chevrolet.Modelo);
    modeloChevrolet.appendChild(textModeloChevrolet);

    let precioChevrolet = document.createElement("label");
    contnedorChevrolet.appendChild(precioChevrolet);
    let textPrecioChevrolet = document.createTextNode(chevrolet.Precio);
    precioChevrolet.appendChild(textPrecioChevrolet);
    
}

window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if (event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Automoviles Disponibles" ) {
            mostrarVehiculo(auto);
            mostrarToyota(toyota);
            mostarChevrolet(chevrolet);
        }
        else if (busqueda == "Mazda 3" ) {
            mostrarVehiculo(auto);}
        

        if (busqueda == "Toyota Prado") {
            mostrarToyota(toyota);}

        else if (busqueda == "Chevrolet Camaro") {
            mostarChevrolet(chevrolet);
        }
            
        else {
               this. false.alert("no se han encontrado resultados.");
        } 
      
    }
})


function limpiarVentana () {
    document.getElementById("main_content").innerHTML = "" ;
}