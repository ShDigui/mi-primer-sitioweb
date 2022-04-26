class datosVuelos {
    constructor (economia, precio, origenVuelos, horaSalida, textDuracion, duracionVuelo, destinoVuelos, horaLlegada, pasajero, tipoVuelo) {
        this.economia=economia;
        this.precio=precio;
        this.origenVuelos=origenVuelos;
        this.horaSalida=horaSalida;
        this.textDuracion=textDuracion;
        this.duracionVuelo=duracionVuelo;
        this.destinoVuelos=destinoVuelos;
        this.horaLlegada=horaLlegada;
        this.pasajero=pasajero;
        this.tipoVuelo=tipoVuelo
    }
}

let vuelo = [{
    
    "economia":"Màs econòmico",
    "precio":"COP 205.480",
    "origenVuelos":"BGT",
    "horaSalida":"7:10 a.m",
    "textDuracion":"duraciòn",
    "duracionVuelo":"1 h 30 min",
    "destinoVuelos":"CTG",
    "horaLlegada":"8:40 p.m",
    "pasajero":"Adulto desde",
    "tipoVuelo":"Directo",
/*},
{
    "economia":"Màs econòmico",
    "precio":"COP 205.480",
    "origenVuelos":"BGT",
    "horaSalida":"7:10 a.m",
    "textDuracion":"duraciòn",
    "duracionVuelo":"1 h 30 min",
    "destinoVuelos":"CTG",
    "horaLlegada":"8:40 p.m",
    "pasajero":"Adulto desde",
    "tipoVuelo":"Directo",*/
}];

function mostrarVuelos () {
    cargarVuelos (vuelo[0].economia, vuelo[0].precio, vuelo[0].origenVuelos, vuelo[0].horaSalida, vuelo[0].textDuracion, vuelo[0].duracionVuelo, vuelo[0].destinoVuelos, vuelo[0].horaLlegada,  vuelo[0].pasajero,  vuelo[0].tipoVuelo);
    cargarVuelos (vuelo[1].economia, vuelo[1].precio, vuelo[1].origenVuelos, vuelo[1].horaSalida, vuelo[1].textDuracion, vuelo[1].duracionVuelo, vuelo[1].destinoVuelos, vuelo[1].horaLlegada,  vuelo[1].pasajero,  vuelo[1].tipoVuelo);
  //  cargarVuelos (vuelo[2].economia, vuelo[2].precio, vuelo[2].origenVuelos, vuelo[2].horaSalida, vuelo[2].textDuracion, vuelo[2].duracionVuelo, vuelo[2].destinoVuelos, vuelo[2].horaLlegada,  vuelo[2].pasajero,  vuelo[2].tipoVuelo);
}

function cargarVuelos (economia, precio, origenVuelos, horaSalida, textDuracion, duracionVuelo, destinoVuelos, horaLlegada, pasajero, tipoVuelo){
  
        //contenedor principal         

    let contentVuelos = document.getElementById("vuelos");
    contentVuelos.setAttribute("class", "content-vuelos");

        //contenedor economia

    let economico = document.createElement("div");
    economico.setAttribute("class", "cont-economico");
    contentVuelos.appendChild(economico);
    let textEconomico = document.createElement("span");
    textEconomico.setAttribute("class", "span-economico")
    economico.appendChild(textEconomico);
    let defEconomico= document.createTextNode(economia)
    textEconomico.appendChild(defEconomico);
};


window.onload = function() {
    mostrarVuelos ();
};