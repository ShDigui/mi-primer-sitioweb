let botonForm = document.getElementById("botonForm");
let botonCerrar = document.getElementById("botonCerrar");
let popUp = document.getElementById("pop-up");

botonForm.addEventListener("click", mostrarForm);
botonCerrar.addEventListener("click", ocultarForm);

function mostrarForm () {
    popUp.classList.add("transform-visible");
    popUp.classList.remove("transform-hide");
    botonCerrar.classList.add("botonCerrarVisible");
    botonCerrar.classList.remove("botonCerrar");
}

function ocultarForm () {
    popUp.classList.add("transform-visible");
    popUp.classList.remove("transform-hide");
    botonCerrar.classList.add("botonCerrarVisible");
    botonCerrar.classList.remove("botonCerrar");
}