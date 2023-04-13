
// Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.  //

/*
function ParImpar(numero){
    if  (numero % 2 === 0) {
    console.log(numero + " es par");
} else {
    console.log(numero + " es impar")
}
}

ParImpar(234)
*/

//Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales. //

/*
function Mayor(num1, num2){
    if(num1 > num2) {
    console.log(num1 + " es mayor a " + num2)

}  else if(num2 > num1) {
    console.log(num2 + " es mayor a " + num1);

} else {
    console.log(num1 + " y " + num2 + " son iguales");
}
}


Mayor(2, 5)
Mayor(2, 2)
Mayor(5, 2)
*/


//Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número//


/*
function Numeros(numeros) {
for (let i = 0; i <= numeros; i++ ){
    console.log(i);
}
}
Numeros(10)
*/


//Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.//

/*
function Palabra(palabra,cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(palabra);
    }
}
Palabra("hola", 5)
*/


//Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

/*
function Array(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }

  const miArray = [1, 2, 3, 4, 5];
Array(miArray);
*/

//Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".//

/*
function saltearNumero(array) {
    for (let i = 0; i < array.length; i++) {
        if(i !== 5) {
            console.log(array[i]);
        }

    }
}

const miArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
saltearNumero(miArray);
*/

//Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

/*
function multiplicar(array, numero) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * numero;
        console.log(array[i] * numero)
    }
   
}

const miArray = [0, 1, 2, 3];
const elNumero = 2;

multiplicar(miArray, elNumero)
*/