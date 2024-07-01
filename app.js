let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();






/* 
Ejercicios Listas js

Crea una lista vacía llamada "listaGenerica"


let listaGenerica = [];
console.log(listaGenerica); // Debería mostrar []




// Crear una lista de lenguajes de programación
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguagesDeProgramacion); // Debería mostrar ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']

// Agregar elementos a la lista lenguagesDeProgramacion
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
console.log(lenguagesDeProgramacion); // Debería mostrar ['JavaScript', 'C', 'C++', 'Kotlin', 'Python', 'Java', 'Ruby', 'GoLang']


// Función para mostrar todos los elementos de lenguagesDeProgramacion
function mostrarLenguajes() {
    lenguagesDeProgramacion.forEach(lenguaje => {
        console.log(lenguaje);
    });
}

// Llamar a la función para probarla
mostrarLenguajes();

// Función para mostrar todos los elementos de lenguagesDeProgramacion en orden inverso
function mostrarLenguajesInverso() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguagesDeProgramacion[i]);
    }
}

// Llamar a la función para probarla
mostrarLenguajesInverso();

// Función para calcular el promedio de una lista de números
function calcularPromedio(lista) {
    let suma = 0;
    lista.forEach(num => {
        suma += num;
    });
    return suma / lista.length;
}

// Ejemplo de uso
let numeros = [10, 20, 30, 40, 50];
console.log(calcularPromedio(numeros)); // Debería mostrar 30

// Función para mostrar el número mayor y menor en una lista
function mostrarMayorYMenor(lista) {
    let mayor = Math.max(...lista);
    let menor = Math.min(...lista);
    console.log(`El número mayor es: ${mayor}`);
    console.log(`El número menor es: ${menor}`);
}

// Ejemplo de uso
mostrarMayorYMenor(numeros); // Debería mostrar 50 y 10


// Función para sumar todos los elementos en una lista
function sumarElementos(lista) {
    let suma = 0;
    lista.forEach(num => {
        suma += num;
    });
    return suma;
}

// Ejemplo de uso
console.log(sumarElementos(numeros)); // Debería mostrar 150

// Función para encontrar la posición de un elemento en una lista
function encontrarPosicion(lista, elemento) {
    return lista.indexOf(elemento);
}

// Ejemplo de uso
console.log(encontrarPosicion(lenguagesDeProgramacion, 'Python')); // Debería mostrar 4
console.log(encontrarPosicion(lenguagesDeProgramacion, 'Swift')); // Debería mostrar -1


// Función para sumar elementos de dos listas
function sumarListas(lista1, lista2) {
    let resultado = [];
    for (let i = 0; i < lista1.length; i++) {
        resultado.push(lista1[i] + lista2[i]);
    }
    return resultado;
}

// Ejemplo de uso
let lista1 = [1, 2, 3];
let lista2 = [4, 5, 6];
console.log(sumarListas(lista1, lista2)); // Debería mostrar [5, 7, 9]

// Función para calcular el cuadrado de cada número en una lista
function cuadrados(lista) {
    let resultado = lista.map(num => num * num);
    return resultado;
}
    

// Ejemplo de uso
console.log(cuadrados(numeros)); // Debería mostrar [100, 400, 900, 1600, 2500]





*/
/*Ejercicios Funciones !
//Función que muestra "¡Hola, mundo!" en la consola
function saludarMundo() {
    console.log("¡Hola, mundo!");
}

// Llamar a la función para probarla
saludarMundo();*/

/*//Función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola:
function saludarNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

// Llamar a la función para probarla
saludarNombre("David");*/

/*//Función que recibe un número como parámetro y devuelve el doble de ese número
function dobleNumero(numero) {
    return numero * 2;
}

// Llamar a la función para probarla
console.log(dobleNumero(5)); // Debería mostrar 10*/

/*//Función que recibe tres números como parámetros y devuelve su promedio:
function promedioTresNumeros(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

// Llamar a la función para probarla
console.log(promedioTresNumeros(3, 6, 9)); // Debería mostrar 6*/

/*//Función que recibe dos números como parámetros y devuelve el mayor de ellos:
function mayorDeDosNumeros(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// Llamar a la función para probarla
console.log(mayorDeDosNumeros(10, 20)); // Debería mostrar 20*/

/*//Función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo:
function cuadradoNumero(numero) {
    return numero * numero;
}

// Llamar a la función para probarla
console.log(cuadradoNumero(4)); // Debería mostrar 16*/



