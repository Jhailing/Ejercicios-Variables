//**********Ejercicio 1***********
let nombre = prompt('¿Cuál es tu nombre?') ;
let apellido = prompt('¿Cuál es tu apellido?');

alert(`Hola ${nombre} ${apellido}, bienvenida a Ada`);

//**********Ejercicio 2***********
let gusto1 = prompt("¿Cuál es el primer gusto?");
let gusto2 = prompt("¿Cuál es el segundo gusto?");
let gusto3 = prompt("¿Cuál es el tercer gusto?");

alert(`Aquí tiene su helado de ${gusto1}, ${gusto2} y ${gusto3}`);

//*********Ejercicio 3*************
let nombre = prompt("¿Cuál es tu nombre?");
let apellido = prompt("¿Cuál es tu apellido?");
//let sdoapellido = prompt("¿Cuál es tu apellido?");
let edad = prompt("¿Cuál es tu edad?");
let nacionalidad = prompt("¿Cuál es tu nacionalidad?");
let documento = prompt("¿Cuál es tu número de documento?");

alert(`El nuevo perfil fue ingresado al sistema: nombre: ${nombre}, apellido: ${apellido}, edad: ${edad}, nacionalidad: ${nacionalidad}, número de documento: ${documento}`);

//**********Ejercicio 4************
let playlist = prompt("¿Cuál es el nombre de la playlist?");
let primer = prompt("¿Cuál es la primer canción?");
let segundo = prompt("¿Cuál es la segunda canción?");
let tercer = prompt("¿Cuál es la tercer canción?");

alert(`Se ha creado la playlist ${playlist} con las canciones ${primer}, ${segundo}, ${tercer}`);

//**********Ejercicio 5************
let calle = prompt("¿Cuál es la calle?");
let numero = prompt("¿Cuál es el número?");
let departamento = prompt("¿Cuál es el departamento?");
let codigo = prompt("¿Cuál es el código postal?");
let ciudad = prompt("¿Cúal es la ciudad?");
let pais = prompt("¿Cúal es el país?");

alert(`La dirección que ha ingresado es: ${calle} ${numero} ${departamento}, ${codigo}, ${ciudad}, ${pais}`);

//**********Ejercicio 6**************
let edad = prompt("Ingresá una edad por favor");
let result = edad*7;

alert(`El equivalente de ${edad} en años perros es: ${result}`);

//***********Ejercicio 7*************
let minutos = prompt('Ingresá una cantidad de minutos.');
let segundos = minutos * 60;

alert(`El resultado de la conversión de ${minutos} minutos a segundos es: ${segundos}`);

//***********Ejercicio 8*************
let dias = prompt("Ingresá una cantidad de días por favor");
let result = dias*24*60*60;

alert(`El resultado de la conversión de ${dias} días a segundos es: ${result}`);


//***********Ejercicio 9*************
let kilometros = prompt("Ingresá una cantidad de kilómetros");
let conversion = kilometros*0.621371;
alert(`El resultado de la conversión de ${kilometros} kilometros a millas es: ${conversion}`);

//***********Ejercicio 10*************
let baseTriangulo = prompt("Ingresá el valor de la base del triángulo");
let alturaTriangulo = prompt("Ingresá el valor de la altura del triángulo");
let result = baseTriangulo*alturaTriangulo/2;
alert(`El resultado del área del triángulo con base ${baseTriangulo} y altura ${alturaTriangulo} es: ${result}`);

//***********Ejercicio 11*************
let base = Number(window.prompt("Ingresá el valor de la base del rectángulo"))
let altura = Number(window.prompt("Ingresá el valor de la altura del rectángulo"))
let resultado = 2*(base + altura)
alert(`El resultado del perímetro del rectángulo con base ${base} y altura ${altura} es: ${resultado}`)

//***********Ejercicio 12*************
let numero= prompt("Ingresá un número por favor")
let porcentaje = prompt("Ingresá un porcentaje")
let resultado = (numero*porcentaje)/100
alert(`El porcentaje ${porcentaje} del número ${numero} es: ${resultado}`)

//***********Ejercicio 13*************
let distancia = prompt("Ingresá la distancia del recorrido")
let resultadoEnBicicleta = distancia/10
let resultadoAPie = distancia/5
let resultadoEnAuto = distancia/50

alert(`Para la distancia ${distancia} km en bicicleta el tiempo de viaje es ${resultadoEnBicicleta} hora/s, a pie ${resultadoAPie} hora/s y en auto ${resultadoEnAuto} hora/s`)

//***********Ejercicio 14*************
let escalaUno = prompt("¿Cúal es la primer escala?")
const duracionEscalaUno = Number(window.prompt ("¿Cúal es la duración de la primer escala?"))
let escalaDos = prompt("¿Cúal es la segunda escala?")
const duracionEscalaDos = Number(window.prompt ("¿Cúal es la duración de la segunda escala?"))
let escalaTres = prompt("¿Cúal es la tercer escala?")
const duracionEscalaTres = Number(window.prompt("¿Cúal es la duración de la tercer escala?"))
let resultado = duracionEscalaUno+duracionEscalaDos+duracionEscalaTres
alert(`La duración total del vuelo con escala en ${escalaUno} de duración ${duracionEscalaUno} hs, ${escalaDos} de duración ${duracionEscalaDos} hs y ${escalaTres} de duración ${duracionEscalaTres} hs es: ${resultado} hs`)

//***********Ejercicio 15*************
var numero = Number(window.prompt("Ingresá un número"))
let cantidad = prompt("Ingresá una cantidad")
let resultado = cantidad + ++numero
alert(`Incremento ${cantidad}:${numero}`)

//***********Ejercicio 16*************
let cantidadGrados = prompt("Ingresá una cantidad de grados Celsius")
let resultado = (cantidadGrados*1.8)+32
alert(`La conversión de ${cantidadGrados} grados Celsius a Fahrenheit es: ${resultado}`)

//***********Ejercicio 17*************
let primerNumero = Number (window.prompt("Ingresá el primer número"))
let segundoNumero = Number (window.prompt("Ingresá el segundo número"))
let resultado = primerNumero % segundoNumero == 0;

function isMultiple(resultado) {   
   if(resultado == 0) {
       return true;
   } else {
       return false;
   }
}
alert(`El número ${primerNumero} es múltiplo de ${segundoNumero}: ${resultado}`);

//***********Ejercicio 18*************
let cantidad = prompt("Ingresá una cantidad de segundos")
var horas = Math.floor( cantidad / 3600 );  
var minutos = Math.floor( (cantidad % 3600) / 60 );
var segundos = cantidad % 60;
alert(`${cantidad} segundos son = ${horas} horas, ${minutos} minutos y ${segundos} segundos`);

//***********Ejercicio 19*************
let dosPersonas = prompt("Ingresá cuantas habitaciones para dos personas tiene el hotel")
let tresPersonas = prompt("Ingresá cuantas habitaciones para tres personas tiene el hotel")
let cuatroPersonas = prompt("Ingresá cuantas habitaciones para cuatro personas tiene el hotel")
var dosHabitaciones = dosPersonas*2
var tresHabitaciones = tresPersonas*3
var cuatroHabitaciones = cuatroPersonas*4
let resultado = dosHabitaciones + tresHabitaciones + cuatroHabitaciones
alert(`El hotel tiene una capacidad de ${resultado} personas`)

//***********Ejercicio 20*************
let disponible = Number (window.prompt("¿Cuál es tu monto disponible?"))
let nombrePriServ = prompt("¿Cuál es el nombre primer servicio?")
let montoPriServ = Number (window.prompt("¿Cuál es el monto del primer servicio?"))
let nombreSegServ = prompt("¿Cuál es el nombre segundo servicio?")
let montoSegServ = Number (window.prompt("¿Cuál es el monto del segundo servicio?"))
let nombreTerServ = prompt("¿Cuál es el nombre tercer servicio?")
let montoTerServ = Number (window.prompt("¿Cuál es el monto del tercer servicio?"))
let totalrestante = disponible-(montoPriServ+montoSegServ+montoTerServ)

alert(`Los servicios a pagar son ${nombrePriServ} de $ ${montoPriServ}, ${nombreSegServ} de $ ${montoSegServ}, ${nombreTerServ} de $ ${montoTerServ}, queda disponible un saldo de $ ${totalrestante}`)

//***********Ejercicio 21*************
let mouse = Number (window.prompt("Ingresá la cantidad de mouse que deseas comprar"))
let teclado = Number (window.prompt("Ingresá la cantidad de teclados que deseas comprar"))
let auriculares = Number (window.prompt("Ingresá la cantidad de auriculares que deseas comprar"))
let cuotas = Number (window.prompt("Ingresá la cantidad de cuotas"))
let precioTotalMouse = mouse*400
let precioTotalTeclado= teclado*800
let precioTotalAuriculares= auriculares*1500
let total = precioTotalMouse+precioTotalTeclado+precioTotalAuriculares
let precioPorCuota = total/cuotas
alert(`El detalle de la compra es: mouse ${mouse} x $ 400 =$ ${precioTotalMouse}, teclado ${teclado} x $ 800 =$ ${precioTotalTeclado}, auriculares ${auriculares} x $ 1500 =$ ${precioTotalAuriculares}. El total es $ ${total} en ${cuotas} cuotas de $ ${precioPorCuota}`)