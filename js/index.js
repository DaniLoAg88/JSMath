let inputMostrado = false; //Va a controlar si existe un input en pantalla
let entrada = document.querySelector("#entrada");
let salida = document.querySelector("#salida");

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
function crearInputs(numImputs) {
    if(inputMostrado){ //Tenemos inputs en pantalla
        salida.innerHTML = "";
        document.querySelector("#input1").remove();

        if (document.querySelector("#input2")) {
            document.querySelector("#input2").remove();
        }

        borrarBoton();
        inputMostrado = false;
    }

    if (!inputMostrado) {
        entrada.style.visibility = "visible";
        crearInput1();
        if (numImputs == 2) {
            crearInput2();
        }
        crearBoton();
        inputMostrado = true;
    }
    
}



function valorAbs(){
    crearInputs(1);
    
    document.querySelector("#calcular").addEventListener("click", function(){
        let numero = document.querySelector("#input1").value;
        if (validar(numero)) {
            salida.textContent = "El valor absoluto de " + numero + " es " + Math.abs(numero);
        }
    })
}

function enteroSup(){
    crearInputs(1);
    
    document.querySelector("#calcular").addEventListener("click", function(){
        let numero = document.querySelector("#input1").value;
        if (validar(numero)) {
            salida.textContent = "El entero superior de " + numero + " es " + Math.ceil(numero);
        }
    })

}

function exponencial(){
    crearInputs(2);

    document.querySelector("#calcular").addEventListener("click", function(){
        let base = document.querySelector("#input1").value;
        let exponente = document.querySelector("#input2").value;
        if (validar(base) && validar(exponente)) {
            salida.innerHTML = "El resultado de " + base + "<sup>" + exponente + "</sup> es " + Math.pow(base,exponente);
        }
    })
}
function max(){
    crearInputs(2);

    document.querySelector("#calcular").addEventListener("click", function(){
        let numero1 = document.querySelector("#input1").value;
        let numero2 = document.querySelector("#input2").value;
        if (validar(numero1) && validar(numero2)) {
            if(numero1 == numero2){
                salida.innerHTML = "Los números son iguales";
            } else{
                salida.innerHTML = "El mayor de los dos números es " + Math.max(numero1,numero2);
            }
        }
    })
}
function min(){
    crearInputs(2);

    document.querySelector("#calcular").addEventListener("click", function(){
        let numero1 = document.querySelector("#input1").value;
        let numero2 = document.querySelector("#input2").value;
        if (validar(numero1) && validar(numero2)) {
            if(numero1 == numero2){
                salida.innerHTML = "Los números son iguales";
            } else{
                salida.innerHTML = "El menor de los dos números es " + Math.min(numero1,numero2);
            }
        }
    })
}
function redondeo(){
    crearInputs(1);
    
    document.querySelector("#calcular").addEventListener("click", function(){
        let numero = document.querySelector("#input1").value;
        if (validar(numero)) {
            salida.textContent = "El redondeo de " + numero + " es " + Math.round(numero);
        }
    })
}
function raizC(){
    crearInputs(1);
    
    document.querySelector("#calcular").addEventListener("click", function(){
        let numero = document.querySelector("#input1").value;
        if (validar(numero)) {
            salida.textContent = "La raíz cuadrada de " + numero + " es " + Math.sqrt(numero).toFixed(3); //toFixed te saca sólo 3 decimales
        }
    })
}
function truncar(){
    crearInputs(1);
    
    document.querySelector("#calcular").addEventListener("click", function(){
        let numero = document.querySelector("#input1").value;
        if (validar(numero)) {
            salida.textContent = "El valor de " + numero + " truncado es " + Math.trunc(numero);
        }
    })
}

function validar(numero) {
    if(isNaN(numero)){ //Si no es un valor numérico
        salida.innerHTML = "La operación no se puede realizar";
        return false;
    } else return true;
}