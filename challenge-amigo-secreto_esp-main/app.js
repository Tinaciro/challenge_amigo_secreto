// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nameAmigosSecretos =[]; //el array es una lista, la cual permite todo tipo de datos

function agregarAmigo() {
    let inputName= document.getElementById("amigo");
        
    let name = inputName.value.trim() ;

    if (name === "") {
        alert("Por favor, inserte un nombre.");
        return;

    } if (nameAmigosSecretos.includes(name)) { //esta propiedad verifica si una condicion se cumple
        alert("para una mayor interactividad, por favor no repetir los nombres");
        return;
    }

    nameAmigosSecretos.push(name); //llamamos esa lista y empujamos dentro de ella lo que el usuario va ingresando
    inputName.value="" ;//limpiar el input
    listaName() ; //es lo que contiene mi array 

}
function listaName() {
    let elementosLista = document.getElementById ("listaAmigos"); //le pedimos que nos traiga la etiqueta completa del ul
    elementosLista.innerHTML = "";
    
    //el bucle for,tiene 3 estapas, inicializacion, la condicion y la actualizacion 
    for(let na= 0 ; na < nameAmigosSecretos.length; na++ ){ //.lenhth significa el largo de nuestro array
    elementosLista.innerHTML += "<li>" + nameAmigosSecretos[na] + "</li>" ;
    }  
}

function sortearAmigo(){
    if(nameAmigosSecretos.length === 0 ) {
    alert("por favor ingrear mas de un nombre ");
    return;
    }
    let resultado= document.getElementById("resultado");


    let amigoSecreto= nameAmigosSecretos[Math.floor(Math.random() * nameAmigosSecretos.length)];
    resultado.innerHTML = "El amigo secreto es: " +  amigoSecreto; 
    

}

