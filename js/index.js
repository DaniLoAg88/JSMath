let inputMostrado = true;
let entrada = document.querySelector("#entrada");

window.onload = ()=>{ //Con ésto esperamos a que cargue todo el HTML y después se ejecuta el script
    document.querySelector("#valorAbs").addEventListener("click", valorAbs);
    document.querySelector("#enteroSup").addEventListener("click", enteroSup);
    document.querySelector("#exponencial").addEventListener("click", exponencial);
    document.querySelector("#max").addEventListener("click", max);
    document.querySelector("#min").addEventListener("click", min);
    document.querySelector("#redondeo").addEventListener("click", redondeo);
    document.querySelector("#raizC").addEventListener("click", raizC);
    document.querySelector("#truncar").addEventListener("click", truncar);


}

//Crear el input 1
function crearInput1(){
    let input = document.createElement("input");
    input.setAttribute("id", "input1");
    input.setAttribute("placeholder", "Escribe un número");

    entrada.appendChild(input);
}

//Crear el input 2
function crearInput2(){
    let input = document.createElement("input");
    input.setAttribute("id", "input2");
    input.setAttribute("placeholder", "Escribe un número");

    entrada.appendChild(input);
}

//Crear el botón
function crearBoton(){
    let boton = document.createElement("button");
    boton.setAttribute("id", "calcular");
    boton.classList.add("boton");
    boton.textContent = "Calcular";
    entrada.appendChild(boton);
}

//Borrar boton
function borrarBoton(){
    document.querySelector(".boton").remove();
}

//Crear todo


function valorAbs(){
    crearInput1();
    crearInput2();
    crearBoton();
}

function enteroSup(){

}

function exponencial(){
    
}
function max(){

}
function min(){

}
function redondeo(){

}
function raizC(){

}
function truncar(){

}