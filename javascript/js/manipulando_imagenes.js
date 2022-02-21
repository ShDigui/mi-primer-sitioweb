// con esta funcion podemos hacer la imagen invisible solo haciendo clik
function hacer_invisible() {
    document.getElementById("lobito").className = "hidden";
}
// con esta funcion logramos intercambiar la imagen una por una.
function intercambiar() {
    document.getElementById("lobo").src = "imagenes/lobo.jpg";
}
// con esta funcion podemos intercambiar varias imagenes solo desde el html
function interConArg() {
    document.getElementById(id).src = ruta; 
}

function interConArg (idPic, ruta) {
    let newPic = document.getElementById(idPic);
    newPic.src = ruta;
}