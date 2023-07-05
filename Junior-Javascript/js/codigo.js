/* Ejemplos
recipiente = "Papel";

alert(recipiente)

string = "cadena de texto";
number = 19;
booleano = false;
*/

/*  Tipos de vatiables:
var(Alcanze Global), let(Menos alcanze), const(Constante, no se les 
  puede cambiara el valor)*/

/* Ejemplos de variable 
const PI = "3.1416";

alert(PI)
*/

/* Ejemplos de variable de tipo let 
let numero;

numero = "14";

alert(numero)
*/

/*
let lista1 = "15 ";

let lista2 = "12";

resultado (lista1 + lista2);

alert(resultado)
*/


/* Ejemplos de Multiples Variables 
let number, numero2, numero3;

number = "14";
numero2 = "15";
numero3 = "16";

alert(number);
alert(numero2);
alert(numero3);
*/

/* Ejemplos de Multiples Variables segunda forma 

let number = 14;
let numero2 = 15;
let numero3 = 16;

alert(number);
alert(numero2);
alert(numero3);
*/

/* Ejemplos de NULL 

let number = null;

alert(number);
*/

/* Ejemplos de NaN 

let number = 12;
let numero2 = "Juan"

alert(number * numero2);
*/

/* PRUEBAS CON PROMP, devuelve un valor

let nombre = prompt("Dime tu Usuario");

alert("Hola " + nombre)
*/

/* PRUEBAS CON Operadores de asignacion 

let numero = 10;

numero **= 2

alert(numero)
*/

/* PRUEBAS CON Operadores Aritmeticos 

let numero1 = 10;

let numero2 = 15;

resultado = numero1 + numero2;

alert(resultado)
*/


/* PRUEBAS CON Operadores Aritmeticos decremento
alert(resultado)

number = 14;

number--

resultado = number;

alert(number)
*/

/* Primera forma de concatenar
palabras1 = "!Hola como estas ";

palabra2 = "Bien y tu, como estas?";

frases = palabras1 + palabra2;

prompt(frases)
*/

/* forma de concatenar adecuada
Hello = "Emanuel";

wordl = `Hola soy ${Hello} y soy Junior Front-End Web Developer`;

Developer = wordl;

alert(Developer)
*/

/* Segunda forma de concatenar numeros
valor1 = 5;

valor2 = 8;

variables = "" + valor1 + valor2;

alert(variables)
*/

/* Tercera forma de concatenar numeros
valor1 = 5;

valor2 = 8;

variable = valor1.concat(valor2);

alert(variable)
*/

/* Operadores logicos (Intermedio)

Operadores logicos: 
Su resultado es boleano
let valor = true;
let valor2 = true;

let resultado = valor && valor2; //AND: si las 2 condiciones se cumplen es true

let resultado2 = valor || valor2; //OR: si hay 1 verdadera se convierte en true 

let resultado3 = !valor; //NOT:  es lo contrario del resultado

document.write(resultado)

Otro ejemplo: 
let num1 = 12;
let num2 = 24;

afirm1 = num1 < num2;
afirm2 = num1 != num2;

document.write(afirm1 && afirm2)

Ejemplo en una operacion de javascript: 
num = 14
num2 = 25
num3 = 23
num4 = 90
num5 = 91

op = (num < num2 || num2 < num3) &&  (!num && num5 != num3)
      (true y true)                  (false y true)
document.write(op)


Operadores de comparacion: 
let number1 = 9;

let number2 = 9;

document.write(number1 == number2)

2.
let number1 = 9;

let number2 = 9;

document.write(number1 != number2)

3.
let number1 = 9;

let number2 = 9;

document.write(number1 === number2)

Operadores Booleanos: 
True y False
*/

/* Camel Case 
es una regla la cual se inicia con minuscula y la segunda palabra con mayuscula
ejemplo:
holaMundoEstaBien;

Condicionales de JS

es una senticia que nos permite ejecutar un blucle entre un bloque 
ejemplo: 
if (10 < 5) {
  alert("hola")
}

let nombre = 'Ema'

if (nombre == "Emanuel") {
  alert("Tu nombre es " + nombre);
}

else if (nombre == "Hernandez") {
  alert("Tu nombre es " + nombre);
}

else {
  alert("Tu nombre es otro");
}

*/

/* Ejemplos practico */

let dinero = prompt ("cuanto dinero tienes?");
let dineroFer = prompt ("cuanto dinero tienes Fernando?");
let dineroAlan = prompt ("cuanto dinero tienes Alan?");

dinero = parseInt(dinero); // esto es una funcion de JS

if (dinero >= 0.7 && dinero < 1) {
  alert("Compra el helado de chocolate");
  alert("y te sobra " + (dinero - 0.6));
}

else if (dinero >= 1 && dinero < 1.6) {
  alert("Compra el helado de Fresa");
  alert("y te sobra 3" + (dinero - 1));
}

else if (dinero >= 1.6 && dinero < 1.7) {
  alert("Compra el helado de Limon");
  alert("y te sobra " + (dinero - 1.6));
}

else if (dinero >= 1.7 && dinero < 1.8) {
  alert("Compra el helado de Tuna");
  alert("y te sobra " + (dinero - 1.7));
}

else if (dinero >= 1.8 && dinero < 2.9) {
  alert("Compra el helado de Melon");
  alert("y te sobra " + (dinero - 1.8));
}

else if (dinero >= 2.9) {
  alert("Helado doble o otro xd")
  alert("y te sobra " + (dinero - 2.9));
} else {
      alert("Lo siento pero no te alcanza");
}

// fernando 
if (dineroFer >= 0.7 && dineroFer < 1) {
  alert("Compra el helado de chocolate");
}

else if (dineroFer >= 1 && dineroFer < 1.6) {
  alert("Fernado; Compra el helado de Fresa");
}

else if (dineroFer >= 1.6 && dineroFer < 1.7) {
  alert(" Fernado; Compra el helado de Limon");
}

else if (dineroFer >= 1.7 && dineroFer < 1.8) {
  alert("Fernado; Compra el helado de Tuna");
}

else if (dineroFer >= 1.8 && dineroFer < 2.9) {
  alert("Fernado; Compra el helado de Melon");
}

else if (dineroFer >= 2.9) {
  alert("Fernado, Helado doble o otro xd");
} else {
      alert("Fernado, Lo siento pero no te alcanza");
}

//ALAN

if (dineroAlan >= 0.7 && dineroAlan < 1) {
  alert("Alan; Compra el helado de chocolate");
}

else if (dineroAlan >= 1 && dineroAlan < 1.6) {
  alert("Alan; Compra el helado de Fresa");
}

else if (dineroAlan >= 1.6 && dineroAlan < 1.7) {
  alert("Alan; Compra el helado de Limon");
}

else if (dineroAlan >= 1.7 && dineroAlan < 1.8) {
  alert("Alan; Compra el helado de Tuna");
}

else if (dineroAlan >= 1.8 && dineroAlan < 2.9) {
  alert("Alan; Compra el helado de Melon");
}

else if (dineroAlan >= 2.9) {
  alert("Alan, Helado doble o otro xd");
} else {
      alert("Alan, Lo siento pero no te alcanza");
}

/* CAPITULO 2 DE JS DESDE CERO A JUNIOR EN JS */

/* Los arrays
Son los objetos de JS, y sirve para guardar multiples datos.
Ejemplos de crear arrays: 

se abre con []

let frutas = ["pera","manzan","naranja"];

Ejemplos: 

let frutas = ["pera","manzan","naranja"];

alert = (frutas[2]);

*/

/* Los arrays asociativos de js 

let pc1 = {
  nombre: "Enderpc"
  procesador: "Intel core I5"
  ram: "16GB"
  espacio: "250GB"
};

let nombre = pc1 ["nombre"];
let procesador = pc1 ["procesador"];
let ram = pc1 ["ram"];
let espacio = pc1 ["espacio"];

frase = 'El nombre de mi PC es: <b>${nombre}</b> <br>
        'Mi procesador es: <b>${procesador}</b> <br>
        'La RAM de mi pc es: <b>${ram}</b> <br>
        'El espacio de mi PC es: <b>${espacio}</b> <br>

document.write(frase);

*/

/*  Bucles e iteracion

Ejemplo de como utilizarlo 

let numero = 0;

while (numero < 6) { // while es un blucle de js 
  numero++;
  document.write(numero)
}

sentencia de do while
Primero se ejecuta y despues pregunta

let numero = 0;

do {

  document.write(numero)
  numero++;
}

while (numero > 6)

sentencia break
Ejemplo: 
let numero = 0;

while (numero < 100){
    numero++;
    document.write(numero);
    if (numero == 10) {
      break;
    }
}

Sentencia for de JS:
Es un bucle determinado de JS 
Se componen de tres partes:
Declaramos 
Inicializamos
Iteramos
Ejemplo:

for (let i = 0; i < 6; i++ ){
  document.wirte(i + "<br>")
}

Otra forma: 
for (let i = 0; i < 20; i++ ){
if (i == 12){
  break;
}
  document.wirte(i + "<br>")
}

Otra forma para saltar el blucle es: 

for (let i = 0; i < 20; i++ ){
  if (i == 12){
      continue;
}
    document.wirte(i + "<br>")
}

Como funciona el for in

let animales = ["Perro","Jirafa","Pollo","Camello"]

for (animal in animales) {
    document.write(animal + "<br>")
}// Nos muestra la posicion en la que esta el elemento de JS

P// Sentencia de of de JS 

for (animal of animales) {
    document.write(animal + "<br>")
}// Nos Muestra el valor de los elementos o objetos de JS 

Sentencia de Label de JS: 
Nos sirve para asociar los bucles a un nombre 
Ejemplo:

array1 = ["Marta","Fernando","Alan"];\
array2 = ["Pedor","Julian",array1, "Jose"];

forLabel: 
for (let array in array1) {
  if (array == 2){

    for (let  array of array1){

      for (let array of array1){
        if(array == "Marta"){
          continue forLabel;
        }
        document.write (array + "<br>")
      }
    } else {
      document.write(array2 [array] + "<br>")
    }
  }
}

Funciones de JS y como nos sirve en el codigo de Back-end y Full stack:

-Definiciones y usos en Js

Sirve para reutilizar tu codigo, para ahorra recursos de la programacion

Ejemplo:
function saludar (){
let hola = prompt("Hola como fue tu dia?")
if (hola == "Bien"){
  alert("Me alegro")
} else{
  alert("Que mal")
}
}

saludar() 

Que es el return?
finaliza la ejecución de la función y 
especifica un valor para ser devuelto a quien llama a la función.

function saludar (){
  return "Todo bien en JS "
  alert("Hola JS ")
}
let saludo = saludar ();

document.write(saludo)// sirve para mostrarse en la pagina principal de Html

-----Parametros de las funciones
son variables que se crean y declaran en una funcion.

ejemplos de las funciones de JS:
function saludar(nombre) {
  let frase = `Hola ${nombre} Como esta?`;
  document.write(frase)
}

saludar("Emanuel")

document.write(frase)

segunda forma de crear una funcion:
const saludar = function(nombre){
  let frase =  `Hola ${nombre} Como esta?`;
  document.write(frase)
}

Funciones Flechas: 
const saludar = nombre =>{
  let frase =  `Hola ${nombre} Como esta?`;
  document.write(frase)
}


*/

/*  Programacion orientada a objetos de JS  

crear un cronstructor:
class animal {
  constructor(especie,edad,color){
    this.especie = especie;
    this.edad = edad;
    this.color = color;
  }
  verInfo = ()=>{
    document.write(this.info)
  }
}

let perro = new animal("perro",5,"Cafe");
let gato = new animal("gato",2,"Negro")
let pajaro = new animal("Pajaro",2,"Verde")

perro.verInfo();
gato.verInfo();
pajaro.verInfo(); 

'los metodos se crean dentor de la clase de los objetos de js'

Caracteristicas de la POO 

--Abstraccion
Reducir el objeto de js, para crear algo simple pero importante

--Modularidad
Estructurar un problema para que haga de mejor forma y separarlo para solucionarlo

--Encapsulamiento
Contener los datos para los usuarios de la paginas web

--polimorfismo
como los objetos se comportan de diferentes formas dentro del mismmo objeto al que 
pertenecen

---Herencia.
Crear una clases para agregar cosas nuevas para otras clases de js

---Metodos estaticos.

---Metodos Accesores.
Son para obtener un valor (getter) y los setters son para modificarlo o definirlo.


*/

class animal {
  constructor(especie,edad,color){
    this.especie = especie;
    this.edad = edad;
    this.color = color;
  }
  verInfo = ()=>{
    document.write(this.info)
  }
}

class Perro extends Animal {
  constructor(especie,edad,color,raza){
    super(especie,edad,color);
    this.raza = null;
  }
  set modifict(newName){
    this.raza = newName;
  }
}


const perro = new animal("perro",5,"Cafe");
const gato = new animal("gato",2,"Negro")
const pajaro = new animal("Pajaro",2,"Verde")

perro.verInfo();
gato.verInfo();
pajaro.verInfo();