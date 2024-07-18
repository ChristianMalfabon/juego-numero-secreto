/*function imc (peso, estatura) {
    
    let = resultado = Math.floor( (peso) / (estatura * estatura));
    return resultado
 
}

imc (72,1.73)
console.log(resultado);


let grasa = document.getElementById('valorUsuario');

grasa.innerHTML = imc;*/ 

/*function Factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1
    }
    else {
        return numero * Factorial(numero-1);
    }
}

let numero = 5;
let resultado = Factorial(numero);
console.log(`el factorial es ${resultado}`);*/

/*function calcularFactorial (numero) { 
    let final = 1; 
    for (let i=1; i<= numero; i++) {
        final = final *i; 
    }
    return final
}
const numero = 6
const factorial = calcularFactorial(numero);
console.log( `el factorial es ${factorial}` )*/

/*function dolarAReales (cantidad) {
    let calculo = cantidad * 4.8 
    return calculo
}

let resultado = dolarAReales (3);
console.log(`los dolares que ingrsaste son ${resultado}`)*/

/*function areaPerimetro (altura, ancho){
    let area = altura * ancho
    let perimetro = (altura *2) + (ancho*2)

    console.log(`el area es de ${area}`)
    console.log(`el perimetro es del ${perimetro}`)
}

areaPerimetro(80,10);*/


// funcion que saca el promedio de los elementos de un arreglo
/*
let numeros = [8,9,10,];

function promedio () {
    let suma = 0 

    for (let i = 0; i< numeros.length; i++) {
        suma += numeros[i];
        
    }
    return suma / numeros.length
}

let resultado = promedio();
console.log(resultado);*/ 

// arreglo al que se le agregan elementos y luego lo mostramos inverso 

/*
let lenguajes =['JavaScript', 'C', 'C++', 'Kotlin','Python'];
lenguajes.push('Java', 'Ruby','GoLang');
let reverso = lenguajes.reverse();
console.log(reverso);*/ 

// muestra el numero mas grande y el más  pequeño 
/*
let numeros =[2,5,10,80,100,500,1,];

function minMax (){ 
    let max = Math.max(...numeros);
    let min = Math.min(...numeros);
    return {min, max}
}

let resultado = minMax();
console.log(resultado);*/

/*let numeros =[2,500,1,];

function sumar () {
    let suma = 0
    for (let i = 0; i<numeros.length; i++){
       suma += numeros[i];
    }
    return suma
}

let resultado = sumar();
console.log(resultado);*/

// funcion que devuelta la posición de un elemento por parametro o -1 si no está

/*
let numeros =[2,500,1,];

    function posicion (numeros, elemento) {
        for (let i=0; i <numeros.length; i++) {
            if (numeros[i]===elemento){
                return i;
            }
            
        }
        return -1;
    }

let resultado = posicion(numeros,2);
console.log(resultado);*/

// funcion que reciba dos listas y sume los elementos 
/*
let arreglo1 = [2,5,10,80,100,500,1,];
let arreglo2 =[1,1,1,1,1,1,1,];

function sumandoArreglos (){
    let suma = 0
    for (i=0; i<arreglo1.length && i<arreglo2.length; i++) {
        suma+= arreglo1[i] + arreglo2[i];
    } return suma
    

}

let resultado = sumandoArreglos();
console.log(resultado); */

let lista = [1,2,3,4,5];

function cuadrados () {
    let cuadrado = [];
    for (let i = 0; i<lista.length; i++) {
        cuadrado.push(lista[i] * lista[i]);
    } return cuadrado
}

let resultado = cuadrados();
console.log(resultado);