class Automovil {
    constructor (marca, modelo, precio, imagen) {
        this.marca = marca ;
        this.modelo = modelo;
        this.precio = precio;
        this.imagen = imagen;
    }
}
let auto = new Automovil ("mazda 3", "Touring", "5500000000", "imagenes/mazda-3.jpg");

function validarObjeto () {
    alert(auto.marca + "" + auto.modelo + ""  + " El automovil que necesitas")
    
    mostrarVehiculo();
}
function mostrarVehiculo() {
    let contentPrincipal = document.getElementById("content");
    let contentAuto      = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);

    let marcaAuto = document.createElement("label");
    contentAuto.appendChild(marcaAuto);
    let textMarca = documet.createTextNode(auto.marca);
    marcaAuto.appendChild(textMarca);

    let modeloAuto  =  document.createElement("label");
    contentAuto.appendChild(modeloAuto);
    let textModelo  =  document.createTextNode(auto.modelo);
    marcaAuto.appendChild(textModelo);

    let imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", auto.imagen);
}