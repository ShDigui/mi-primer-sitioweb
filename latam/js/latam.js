class datosVuelos {
    constructor (economia, precio, origenVuelos, horaSalida, textDuracion, duracionVuelo, destinoVuelos, horaLlegada, tipoVuelo) {
        this.economia=economia;
        this.precio=precio;
        this.origenVuelos=origenVuelos;
        this.horaSalida=horaSalida;
        this.textDuracion=textDuracion;
        this.duracionVuelo=duracionVuelo;
        this.destinoVuelos=destinoVuelos;
        this.horaLlegada=horaLlegada;
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
    "tipoVuelo":"Directo",
}];

function mostrarVuelos () {
    cargarVuelos (vuelo[0].economia, vuelo[0].precio, vuelo[0].origenVuelos, vuelo[0].horaSalida, vuelo[0].textDuracion, vuelo[0].duracionVuelo, vuelo[0].destinoVuelos, vuelo[0].horaLlegada,  vuelo[0].tipoVuelo);
    cargarVuelos (vuelo[1].economia, vuelo[1].precio, vuelo[1].origenVuelos, vuelo[1].horaSalida, vuelo[1].textDuracion, vuelo[1].duracionVuelo, vuelo[1].destinoVuelos, vuelo[1].horaLlegada,  vuelo[1].tipoVuelo);
    cargarVuelos (vuelo[2].economia, vuelo[2].precio, vuelo[2].origenVuelos, vuelo[2].horaSalida, vuelo[2].textDuracion, vuelo[2].duracionVuelo, vuelo[2].destinoVuelos, vuelo[2].horaLlegada,  vuelo[2].tipoVuelo);
};

function cargarVuelos (economia, precio, origenVuelos, horaSalida, textDuracion, duracionVuelo, destinoVuelos, horaLlegada,  tipoVuelo){
  
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

        // contenedor descripcion del vuelo

    let descVuelo = document.createElement("div");
    descVuelo.setAttribute("class", "desc-vuelo");
    contentVuelos.appendChild(descVuelo);
        //contenedor origen hora
    let origenHora = document.createElement("div");
    origenHora.setAttribute("class", "origen-hora");
    descVuelo.appendChild(origenHora);
        //hora de salida del vuelo
    let salidaVuelo = document.createElement("span");
    salidaVuelo.setAttribute("class", "hora-salida");
    //descVuelo.appendChild(salidaVuelo);
    let textHoraSalida = document.createTextNode(horaSalida);
    salidaVuelo.appendChild(textHoraSalida);
    origenHora.appendChild(salidaVuelo)
        //origen del vuelo
    let origen = document.createElement("span");
    origen.setAttribute("class", "origen-vuelo");
    //descVuelo.appendChild(origen);
    let textOrigen=document.createTextNode(origenVuelos);
    origen.appendChild(textOrigen);
    origenHora.appendChild(origen);
        //contenedor duracion del vuelo
    let duracionDelVuelo = document.createElement("div");
    duracionDelVuelo.setAttribute("class", "duracion-del-vuelo");
    descVuelo.appendChild(duracionDelVuelo);
        //texto de duracion 
    let tiempoVuelo = document.createElement("span");
    tiempoVuelo.setAttribute("class", "duracion-vuelo");
    //descVuelo.appendChild(tiempoVuelo);
    let textoDuracion = document.createTextNode(textDuracion);
    tiempoVuelo.appendChild(textoDuracion);
    duracionDelVuelo.appendChild(tiempoVuelo);
        //duracion del vuelo
    let vueloDuracion = document.createElement("span");
    vueloDuracion.setAttribute("class","vuelo-duracion");
    //descVuelo.appendChild(vueloDuracion);
    let testDuracion = document.createTextNode(duracionVuelo);
    vueloDuracion.appendChild(testDuracion);
    duracionDelVuelo.appendChild(vueloDuracion);
          //contenedor destino y hora llegada
    let destinoHoraLlegada = document.createElement("div");
    destinoHoraLlegada.setAttribute("class", "destino-hora-llegada");
    descVuelo.appendChild(destinoHoraLlegada)
          //hora de llegada del vuelo 
    let llegadaVuelo = document.createElement("span");
    llegadaVuelo.setAttribute("class", "llegada-vuelo");
    //descVuelo.appendChild(llegadaVuelo);
    let textLlegada = document.createTextNode(horaLlegada);
    llegadaVuelo.appendChild(textLlegada);
    destinoHoraLlegada.appendChild(llegadaVuelo);
        //destino del vuelo
    let destino = document.createElement("span");
    destino.setAttribute("class", "destino-vuelo");
    //descVuelo.appendChild(destino);
    let textDestino = document.createTextNode(destinoVuelos);
    destino.appendChild(textDestino);
    destinoHoraLlegada.appendChild(destino)
      
       
        //contenedor tipo y pasajeros el vuelo
    
    let pasajeroTipoVUelos = document.createElement("div");
    pasajeroTipoVUelos.setAttribute("class", "pasajeros-tipos-vuelos");
    contentVuelos.appendChild(pasajeroTipoVUelos);
        //tipo
    let tipoVuelos = document.createElement("span");
    tipoVuelos.setAttribute("class", "tipo-vuelo");
    pasajeroTipoVUelos.appendChild(tipoVuelos);
    let textTipo = document.createTextNode(tipoVuelo);
    tipoVuelos.appendChild(textTipo);
         //precio
    let cntPrecio = document.createElement("span");
    cntPrecio.setAttribute("class", "precio");
    pasajeroTipoVUelos.appendChild(cntPrecio);
    let textPrecio = document.createTextNode(precio)
    cntPrecio.appendChild(textPrecio);
};


window.onload = function() {
    mostrarVuelos();
};