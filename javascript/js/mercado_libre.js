class Automovil {
    constructor (marca, modelo, precio) {
        this.marca = marca ;
        this.modelo = modelo;
        this.precio = precio;
    }
}
let auto = new Automovil ("mazda 3", "Touring", "5500000000");

function validarObjeto () {
    alert(auto.marca + "" + auto.modelo + "" + auto.precio);
}