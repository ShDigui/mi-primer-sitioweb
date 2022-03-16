class Automovil {
    constructor (marca, modelo, precio, imagen) {
        this.Marca = marca ;
        this.Modelo = modelo;
        this.Precio = precio;
        this.Imagen = imagen;
    }
}
let auto = new Automovil ("mazda 3", "Touring", "5500000000", "imagenes/mazda-3.jpg");

function validarObjeto () {
    alert(auto.Marca + "" + auto.Modelo + ""  + " El automovil que necesitas");
    
    mostrarVehiculo();
}
function mostrarVehiculo() {
    let contentPrincipal = document.getElementById("main_content");
    let contentAuto      = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);

    let marcaAuto = document.createElement("label");
    contentAuto.appendChild(marcaAuto);
    let textMarca = document.createTextNode(auto.Marca);
    marcaAuto.appendChild(textMarca);

    let modeloAuto  =  document.createElement("label");
    contentAuto.appendChild(modeloAuto);
    let textModelo  =  document.createTextNode(auto.Modelo);
    marcaAuto.appendChild(textModelo);

    let imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", auto.Imagen);
}



window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if (event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Mazda 3") {
            mostrarVehiculo(auto);
        }
        else {
            this.alert("no se han encontrado resultados.");
        }
    }
})


function limpiarVentana () {
    document.getElementById("main_content").innerHTML = "" ;
}