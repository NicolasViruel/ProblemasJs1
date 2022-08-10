/*1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla
 un alert que diga “un mensaje”.*/
//alert ("Un mensaje")

/*2.- Escribe un programa de una sola línea que escriba en la pantalla
 un texto que diga «Hello World» (document.write).*/

 //document.write("Hello world")

 /*3.- Escribe un programa de una sola línea que escriba
  en la pantalla el resultado de sumar 3 + 5.*/
 //document.write("la suma de 3+5 es = " , 3 + 5)

 /*4.- Escribe un programa de dos líneas que pida el nombre del usuario
  con un prompt y escriba un texto que diga «Hola nombreUsuario»*/

  /*let usuario= prompt("Ingrese su nombre")
  document.write("hola " + usuario)*/

  /*5.- Escribe un programa de tres líneas que pida un número, 
  pida otro número y escriba el resultado de sumar estos dos números.
  Nota: Tener en cuenta la siguiente función: parseInt
  https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt*/
   
/*let x = parseInt(prompt("ingrese su numero1")) 
let y = parseInt(prompt("ingrese su numero2")) 

document.write("La suma es " +(x + y) );*/

/*6.- Escribe un programa que pida dos números
 y escriba en la pantalla cual es el mayor.*/
/*
let x = parseInt(prompt("ingrese su numero1")) 
let y = parseInt(prompt("ingrese su numero2"))

if (x > y) {
    document.write("el primer es mayor")
}else (x < y)
    document.write("el segundo es mayor")
    */

  /* 7.- Escribe un programa que pida 3 números
   y escriba en la pantalla el mayor de los tres. */

  /* let x = parseInt(prompt("ingrese su numero 1"))   
   let y = parseInt(prompt("ingrese su numero 2")) 
   let z = parseInt(prompt("ingrese su numero 3")) 

   if (x > y && y > z) {
    console.log("el mayor es " + x)
   }else if (x < y && y > z){
    console.log("el mayor es " + y)
   }if (x < z && y < z) {
    console.log("el mayor es " + z)
   } */

/*8.- Escribe un programa que pida un número y diga si es divisible por 2*/
/*
 let num1 = parseInt(prompt("ingrese un numero")) 

 if (num1 % 2 === 0) {
    document.write("es divisible en 2");
 }else is{
    document.write("NO es divisible en 2");
 }
 */

/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
*/ 


let frase = parseInt=(prompt("Ingrese una frase"));
let i=0;
let largodefrase = frase.length;
let cantidadVocales=0;

while (i < largodefrase) {
    if (frase.substring(i, i + 1) == "a" || frase.substring(i, i + 1) == "e" ||
        frase.substring(i, i + 1) == "i" || frase.substring(i, i + 1) == "o" || 
        frase.substring(i, i + 1) == "u" ){
       cantidadVocales = cantidadVocales +1 ;
    }
    i= i+1  ;
}
document.write("La cantidad de vocales de su frase es " + cantidadVocales); 




/*
 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro) */

/* 
let numero = prompt("Ingrese un numero");
let divisor = parseInt(prompt("ingrese para dividir en 2,3,5 o 7"))

if (numero == 0) {
    document.write("El numero 0 No es Divisible")
}else{
    switch (divisor) {
    case 2: if (numero % 2 === 0) {
        document.write("Es divisor de 2 ");
    }else{
        document.write("No es divisible de 2 ");
    }
    break;
    case 3: if (numero % 3 === 0) {
        document.write("Es divisor de 3 ");
    }else{
        document.write("No es divisible de 3 ");
    }
    break;
    case 5: if (numero % 5 === 0) {
        document.write("Es divisor de 5 ");
    }else{
        document.write("No es divisible de 5 ");
    }
    break;
    case 7: if (numero % 7 === 0) {
        document.write("Es divisor de 7 ");
    }else{
        document.write("No es divisible de 7 ");
    }
     break;

    default: document.write("NO ingresaste un valor valido");
        break;
    }
}
*/



/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

*/
/*
let numero = prompt("Ingrese un numero");

if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {

    if (numero % 2 === 0) {
        document.write ('es divisible en 2 ') + numero  
    }
    if (numero % 3 === 0) {
        document.write  (' es divisible en 3 ') + numero 
    }
    if (numero % 5 === 0) {
        document.write  (' es divisible en 5 ') + numero 
    }
    if (numero % 7 === 0) {
        document.write (' es divisible en 7 ') + numero
    }
}  
else{
    document.write("No es divisible en ninguna de las opciones")
}

*/




