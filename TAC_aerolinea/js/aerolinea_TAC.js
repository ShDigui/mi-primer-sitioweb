class datosVuelos {
    constructor (codigoVuelos, precio,  origenVuelos, fechaSalida, horaSalida, fechaRegreso, horaRegreso, duracionVuelo, destinoVuelos ) {
        this.codigoVuelos =codigoVuelos ;
        this.precio = precio ;
        this.origenVuelos =origenVuelos;
        this.fechaSalida = fechaSalida;
        this.horaSalida = horaSalida;
        this.fechaRegreso = fechaRegreso;
        this.horaRegreso = horaRegreso;
        this.duracionVuelo = duracionVuelo;
        this.destinoVuelos = destinoVuelos;
    }
}

let vuelo = [{
    "codigoVuelos":"P2-098",
    "precio":"$ 250.000",
    "origenVuelos":"Bogota",
    "fechaSalida":"20/04/2022",
    "horaSalida":"4:00 A.M",
    "fechaRegreso":"30/04/2022",
    "horaRegreso":"9:00 P.M",
    "duracionVuelo":"1 hora(s) 30 minutos",
    "destinoVuelos":"Cartagena",
},
{
    "codigoVuelos":"P3-598",
    "precio":"$ 300.000",
    "origenVuelos":"Cartagena", 
    "fechaSalida":"25/04/2022",
    "horaSalida":"9:00 A.M",
    "fechaRegreso":"01/05/2022",
    "horaRegreso":"5:00 P.M",
    "duracionVuelo":"2 hora(s) 40 minutos", 
    "destinoVuelos":"Bogota",
}];

function mostrarVuelos () {
    cargarVuelos (vuelo[0].codigoVuelos, vuelo[0].precio, vuelo[0].origenVuelos, vuelo[0].fechaSalida, vuelo[0].horaSalida, vuelo[0].fechaRegreso, vuelo[0].horaRegreso, vuelo[0].duracionVuelo, vuelo[0].destinoVuelos);
    cargarVuelos (vuelo[1].codigoVuelos, vuelo[1].precio, vuelo[1].origenVuelos, vuelo[1].fechaSalida, vuelo[1].horaSalida, vuelo[1].fechaRegreso, vuelo[1].horaRegreso, vuelo[1].duracionVuelo, vuelo[1].destinoVuelos);
    cargarVuelos (vuelo[2].codigoVuelos, vuelo[2].precio, vuelo[2].origenVuelos, vuelo[2].fechaSalida, vuelo[2].horaSalida, vuelo[2].fechaRegreso, vuelo[2].horaRegreso, vuelo[2].duracionVuelo, vuelo[2].destinoVuelos);             
}

function cargarVuelos (codigoVuelos, precio, origenVuelos, fechaSalida, horaSalida, fechaRegreso, horaRegreso, duracionVuelo, destinoVuelos){
    let contendorVuelos = document.getElementById("vuelos")
    let mainContent = document.createElement("div")
    contendorVuelos.appendChild(mainContent)
    mainContent.setAttribute("class", "mainContent")
    let vueloPrimero = document.createElement("div")
    mainContent.appendChild(vueloPrimero)
    vueloPrimero.setAttribute("class", "mainContent2")
    /* creamos el primer contenedor */
    let codigoVuelo = document.createElement("div")
    mainContent.appendChild(codigoVuelo)
    codigoVuelo.setAttribute("class", "codigoContent")

/*  codigo y precio */

    let numeroVuelo = document.createElement("span")
    codigoVuelo.appendChild(numeroVuelo)
    let spanvalor = document.createTextNode(codigoVuelos)
    numeroVuelo.appendChild(spanvalor) 
    numeroVuelo.setAttribute("class", "codigoVuelo")

    let precioVuelo = document.createElement("label")
    codigoVuelo.appendChild(precioVuelo)
    let valorVuelo = document.createTextNode(precio);
    precioVuelo.appendChild(valorVuelo)
    precioVuelo.setAttribute("class", "precioVuelo")

 /// origen del vuelo 

    let inicioVuelo = document.createElement("div")
    vueloPrimero.appendChild(inicioVuelo)
    inicioVuelo.setAttribute("class", "inicioContent")
    let parrafoOrigen = document.createElement("p")
    inicioVuelo.appendChild(parrafoOrigen)
    let InicioVueloP = document.createTextNode(origenVuelos)
    parrafoOrigen.appendChild(InicioVueloP) 

    ///Fecha y hora salida
    
    let descripcionVuelo = document.createElement("div")
    vueloPrimero.appendChild(descripcionVuelo)
    descripcionVuelo.setAttribute("class", "descripcionContent")
    let fechaHoraInicio = document.createElement("div")
    descripcionVuelo.appendChild(fechaHoraInicio)
    fechaHoraInicio.setAttribute("class", "fechaHoraInicio")
    let fechaInicio1 = document.createElement("p")
    fechaHoraInicio.appendChild(fechaInicio1)
    let valorfechaP = document.createTextNode(fechaSalida)
    fechaInicio1.appendChild(valorfechaP) 
    fechaInicio1.setAttribute("class", "salidadLegadaFecha")
/// fecha de inicio del vuelo
    let horaSalida1 = document.createElement("p")
    fechaHoraInicio.appendChild(horaSalida1)
    let valorHoraSalida = document.createTextNode(horaSalida)
    horaSalida1.appendChild(valorHoraSalida)
    horaSalida1.setAttribute("class", "horaSalidadLlegada")
/// Hora salida 
    let fechaHorafinal = document.createElement("div")
    descripcionVuelo.appendChild(fechaHorafinal)
    fechaHorafinal.setAttribute("class", "fechaHorafinal")
    let fechaFin1 = document.createElement("p")
    fechaHorafinal.appendChild(fechaFin1)
    let valorfechafin1 = document.createTextNode(fechaRegreso)
    fechaFin1.appendChild(valorfechafin1) 
    fechaFin1.setAttribute("class", "salidadLegadaFecha")
/// fecha de llegada del vuelo
    let horaLegadaP = document.createElement("p")
    fechaHorafinal.appendChild(horaLegadaP)
    let horaLegadaNode = document.createTextNode(horaRegreso)
    horaLegadaP.appendChild(horaLegadaNode) 
    horaLegadaP.setAttribute("class", "horaSalidadLlegada")
    //////
    let duracionContent = document.createElement("div")
    descripcionVuelo.appendChild(duracionContent)
    duracionContent.setAttribute("class", "duracionVuelo")
    let duracionVuelo1 = document.createElement("p")
    duracionContent.appendChild(duracionVuelo1)
    let valorduracionVuelo = document.createTextNode(duracionVuelo)
    duracionVuelo1.appendChild(valorduracionVuelo)
    duracionVuelo1.setAttribute("class", "duracionVuelo") 
/// duracion del vuelo

/// hora de llegada del vuelo
    let destinoVueloD = document.createElement("div")
    vueloPrimero.appendChild(destinoVueloD)
    destinoVueloD.setAttribute("class", "destinoContent")

    let destinoVueloP = document.createElement("p")
    destinoVueloD.appendChild(destinoVueloP)
    let destinoVueloPNode = document.createTextNode(destinoVuelos)
    destinoVueloP.appendChild(destinoVueloPNode)
};


window.onload = function() {
    mostrarVuelos ();
};