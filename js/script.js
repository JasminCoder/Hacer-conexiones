//cambiar nombre al hacer click en editar perfil.. linea 53 html
function cambiarNombre(){ 
var location = document.querySelector('#name');
location.innerText = "Elena De Troya";
}




//eliminar solicitud y descontar n° solicitudes
var sol = 2;
var solMenos = document.querySelector('.sol');

function elimina(){
    sol--;
    solMenos.innerText = sol;
    var remove = document.querySelector('.solicitantes');
    remove.remove();
}




//aceptar solicitud, eliminar solicitante y aumentar n° amigos
var sol = 2;
var solMenos = document.querySelector('.sol');

var amis = 500;
var masAmis = document.querySelector('.amis');

function acepta(){
    amis++;
    masAmis.innerText = amis;
    var remove = document.querySelector('.solicitantes');
    remove.remove();  
    sol--;
    solMenos.innerText = sol;
}
