/*todo el que lea este documento que sepa que detesto utilizar js
asi que si el contenido es demasiado corto es que intento evitarlo
siempre que puedo, pero con Michelle me casó <3 */
let menuvisible = false;
/*Estuve una hora luchando con el código y resulta que me faltaba un " ; " en la variable de arriba*/
function mostrarOcultarMenu(){
    menuvisible = !menuvisible;
    document.getElementById("nav").classList = menuvisible ? "" : "responsive";
}
function seleccionar(){
    document.getElementById("nav").classList ="";
    menuvisible = false;
}
/*importante recordar que aquí no colocan " ; " automáticos*/