"use strit"
//variables globales
let nodoTabla = undefined;
function crearEncabezado() {
    nodoTabla = document.createElement("table");
    let contenedor = document.getElementById("table-js");
    contenedor.appendChild(nodoTabla);

    let nodoFilaEncabezado = document.createElement("tr");
    nodoTabla.appendChild(nodoFilaEncabezado);

    let nodoEncabezado1 = document.createElement("th")
    nodoFilaEncabezado.appendChild(nodoEncabezado1);
    let codigoHeading = document.createTextNode("Código");
    nodoEncabezado1.appendChild(codigoHeading)

    let nodoEncabezado2 = document.createElement("th")
    nodoFilaEncabezado.appendChild(nodoEncabezado2);
    let descriptHeading = document.createTextNode("Descripción");
    nodoEncabezado2.appendChild(descriptHeading);

    let nodoEncabezado3 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado3);
    let valorHeading = document.createTextNode("Valor Unitario");
    nodoEncabezado3.appendChild(valorHeading);

    let nodoEncabezado4 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado4);
    let stockHeading = document.createTextNode("Unidades en Stock");
    nodoEncabezado4.appendChild(stockHeading);



    nodoTabla.setAttribute("class", "table-style");
    nodoTabla.setAttribute("id", "table-stock");
}
function validarTabla() {
    if (!document.getElementById("table-stock")) {
        crearEncabezado();
    }
}
function cargarProducto(){
    validarTabla();

    let inputCodigoN = document.getElementById("codigo").value;
    let inputCodigoNodo = document.createTextNode(inputCodigoN);

    let inputDescripcionN = document.getElementById("descripcion").value;
    let inputDescripcionNodo = document.createTextNode(inputDescripcionN);

    let inputValorUnitarioN = document.getElementById("valorUnitario").value;
    let inputValorUnitarioNodo = document.createTextNode(inputValorUnitarioN);

    let inputUnidadStockN = document.getElementById("unidadStock").value;
    let inputUnidadStockNodo = document.createTextNode(inputUnidadStockN);

    cargarInfoTabla(inputCodigoNodo, inputDescripcionNodo, inputValorUnitarioNodo, inputUnidadStockNodo)
}
function cargarInfoTabla (codigo, descripcion, valorUnitario, unidadStock) {
    let nodoProducto = document.createElement("tr");
    nodoTabla.appendChild(nodoProducto);

    let nodoCodigoTD = document.createElement("td");
    nodoProducto.appendChild(nodoCodigoTD);
    nodoCodigoTD.appendChild(codigo);

    let nodoDescTD = document.createElement("td");
    nodoProducto.appendChild(nodoDescTD);
    nodoDescTD.appendChild(descripcion);

    let nodoValorUnitario = document.createElement("td")
    nodoProducto.appendChild(nodoValorUnitario);
    nodoValorUnitario.appendChild(valorUnitario);

    let nodoUnidadStock = document.createElement("td");
    nodoProducto.appendChild(nodoUnidadStock);
    nodoUnidadStock.appendChild(unidadStock);
}
function validarFomulario (){
    let inputCodigo = document.getElementById("codigo").value.trim();
    if(inputCodigo == "") {
        alert("Por favor ingrese el còdigo");
        return false;
    }

    let inputDescripcion = document.getElementById("descripcion").value.trim();
    if(inputDescripcion == "") {
        alert("Por favor ingresar la descripciòn");
        return false;
    }

    return true;
}