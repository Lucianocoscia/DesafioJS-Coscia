
// CONTAR DESDE NUMERO 5

/* for( let numero = 5; numero <=10; numero++){
    console.log(numero);
} */

// MULTIPLICAR

/* let numero = parseInt(prompt("Ingrese un numero"));

for(i = 0; i <= 10; i++){
    let resultado = numero * i;
    let mensaje = `${numero} * ${i} = ${resultado}`;
    alert(mensaje);
} */

// uso del WHILE  

/* let entrada = prompt("Ingrese enfermo o sano dependiendo su condición").toLowerCase();

while (entrada != "sano"){
    let consulta = prompt("Que enfermedad posee?");
    let enfermedad = "Usted posee  " + `${consulta}`;

    alert(enfermedad);
    entrada = prompt("Ingrese enfermo o sano dependiendo su condición").toLowerCase();
}

let saludable = "Usted se encuentra sano";
alert(saludable);
 */


//SWITCH
/* let edad = 18;

switch(edad){  // Si quiero especificar q sea mayor a tal numero como hago?
    case 18: 
    console.log("es mayor de edad ");
    break;

    case 15:
        console.log("es menor de edad");
        break;

    case 65:
        console.log("Nos reservamos el derecho de admisión");
        break;

    default:
        console.log("Ingrese una edad");
        break;

} */


//Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.

/* let nombre = prompt("Escriba su nombre").toLowerCase()

while(nombre != "esc"){
    let resultado = "Hola " + `${nombre}`;
    alert(resultado);
} */

//Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado.

/* let numero = parseInt(prompt("Ingrese un numero"));

for (i = 0; i<10; i++ ){
    let resultado = numero + i;
    let mensaje = `${numero} + ${i} = ${resultado}`;
    alert(mensaje);
} */

// EJEMPLO de ingresar numero y repetir palabra cuantas veces sea el numero.  Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.


/* let numero = parseInt(prompt("Ingrese un numero"));
let iteracion = 1;


while(iteracion <= numero){

    alert("hola");
    iteracion++;
} */


