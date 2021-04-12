//********Ejercicio 1***********
  function sumar(valor1, valor2) {
      console.log(valor1 + valor2)
  }
  sumar(2, 3);
  sumar(1.2, 3.4);
  sumar(3, -5);

//********Ejercicio 2***********
  function restar(valor1, valor2) {
    console.log(valor1 - valor2);
  }
  restar(3, 2);
  restar(10, 5.5);
  restar(3, 5);

//********Ejercicio 3***********
  function multiplicar(valor1, valor2) {
    console.log(valor1*valor2);
  }
  multiplicar(2, 3);
  multiplicar(4, 0.5);

//********Ejercicio 4***********
  function dividir(valor1, valor2) {
      console.log(valor1/valor2);
  }
  dividir(2, 3);
  dividir(1.2, 3.4);
  dividir(3, -5);

//********Ejercicio 5***********
  function calcularAreaTriangulo(area1, area2) {
      console.log((area1*area2)/2);
  }
  calcularAreaTriangulo(3, 4);
  calcularAreaTriangulo(5, 6);

//********Ejercicio 6***********
  function gritar(argumento) {
      console.log(`¡${argumento}!`);
  }
  gritar("hola");
  gritar("aaaaaa");

//********Ejercicio 7***********
  function obtenerNombreCompleto(argumento1, argumento2) {
    console.log(`${argumento1} ${argumento2}`);
  }
obtenerNombreCompleto('Jhailing','Ramos');
obtenerNombreCompleto('Ana','Larez');

//********Ejercicio 8***********
function saludar(nombre) {
    console.log(`Hola ${nombre}, un gusto conocerte`);
}
saludar("Jhailing");

//********Ejercicio 9***********
function saludarGritando(nombre, apellido) {
    console.log(`¡Hola ${nombre} ${apellido}, un gusto conocerte!`);
}
saludarGritando("Jhailing", "Ramos");

//********Ejercicio 10***********
function obtenerDatosDeCiudad(nombre, poblacion, pais) {
    console.log(`La ciudad de ${nombre} tiene una población de ${poblacion} millones de habitantes y está ubicada en ${pais}`);
}
obtenerDatosDeCiudad("Caracas", 30, "Venezuela");

//********Ejercicio 11***********
function convertirHorasEnSegundos(horas) {
    console.log(horas*3600);
}
convertirHorasEnSegundos(1);
convertirHorasEnSegundos(3);
convertirHorasEnSegundos(4.5);

//********Ejercicio 12***********
function calcularPerimetroRectangulo(ancho, alto) {
    console.log(2*(ancho+alto));
}
calcularPerimetroRectangulo(3.2, 5);
calcularPerimetroRectangulo(10, 20);

//********Ejercicio 13***********
function calcularPorcentaje(numero, porcentaje) {
    console.log((numero*porcentaje)/100);
}
calcularPorcentaje(100, 15);
calcularPorcentaje(10, 50);
calcularPorcentaje(200, 10);

//********Ejercicio 14***********
function sumarPorcentaje(numero, porcentaje) {
    console.log((numero*porcentaje)/100);
}
function calcularPorcentaje(numero, porcentaje) {
    console.log(porcentaje+numero);
}

sumarPorcentaje(100, 15); //15%
sumarPorcentaje(10, 50);  //5%
sumarPorcentaje(200, 10);  //20%

calcularPorcentaje(100, 15);
calcularPorcentaje(10, 5);
calcularPorcentaje(200, 20);

//********Ejercicio 15***********
function restarPorcentaje(numero, porcentaje) {
    console.log((numero*porcentaje)/100);
}
function calcularPorcentaje(numero, porcentaje) {
    console.log(numero-porcentaje);
}
restarPorcentaje(100, 15); //15%
restarPorcentaje(10, 40);  //4%
restarPorcentaje(200, 10);  //20%

calcularPorcentaje(100, 15);
calcularPorcentaje(10, 4);
calcularPorcentaje(200, 20);

//********Ejercicio 16***********
function calcularFPS(cuadros, minutos) {
    console.log((cuadros*60)*minutos);
}
calcularFPS(1,1);
calcularFPS(10,2);
calcularFPS(2,3);

//********Ejercicio 17***********
function obtenerCompetencia(param1, param2) {
    console.log(`${param1} vs. ${param2}`);
}
obtenerCompetencia('JavaScript', 'Python');
obtenerCompetencia('Coca', 'Pepsi');
obtenerCompetencia('Perros', 'Gatos');

//********Ejercicio 18***********
function generarEmail(usuario, dominio) {
    console.log(`${usuario}@${dominio}.com`);
}
generarEmail("Jhailing14", "gmail");

//********Ejercicio 19***********
function calcularPuntaje(nivel1, nivel2, nivel3) {
    console.log((nivel1*3) + (nivel2*5) + (nivel3*10));
}
calcularPuntaje(3,0,0);
calcularPuntaje(0,2,1);
calcularPuntaje(5,1,2);

