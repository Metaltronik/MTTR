// Ejercicio 1086: Calcular la cantidad de minutos que hay entre dos fechas dentro de una función.

function calculo (){

let diferenciaMinutos = 0; 
function calcularDiferenciaMinutos(fecha1, fecha2) {
    if (!(fecha1 instanceof Date) || !(fecha2 instanceof Date)) {
        throw TypeError('Ambos argumentos deben ser objetos de tipo fecha (Date).');
    }

    let diferencia = (fecha2.getTime() - fecha1.getTime()) / 1000;
    diferencia /= 60;

    return Math.abs(Math.round(diferencia));
    
}

console.log("this is new Date()" );
console.log(new Date());

//                                                         año, mes, día
try {
    diferenciaMinutos = (calcularDiferenciaMinutos(new Date(2023, 11, 1), new Date(2023, 11, 30))); // 1440
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log ("diferencia en minutos " + diferenciaMinutos);

// Ejercicio 1274: Calcular la cantidad de horas y minutos que hay en un número de minutos dados.

let minutosMttr = diferenciaMinutos / 16; 

function calcularHorasMinutos(minutos) {
    if (typeof minutos != 'number' || !Number.isInteger(minutos)) {
        throw TypeError('El argumento debe ser un número.');
    }

    let horas = Math.floor(minutos / 60);
    let minutosRestantes = minutos % 60;
    console.log (horas + ":" + minutosRestantes);

    return {
        horas, minutos: minutosRestantes
    };
}

console.log(calcularHorasMinutos(minutosMttr)); // {horas: 2, minutos: 3}

}

var btnEnviar = document.getElementById('btnEnviar');
btnEnviar === null || btnEnviar === void 0 ? void 0 : btnEnviar.addEventListener("click", enviarDatos);
var fechainicio;
function enviarDatos() {

  var fechainicioid = document.getElementById('fechainicioid').value;
  fechainicio = document.getElementById('fechainicioid').value;
  var fechafinid = document.getElementById('fechafinid').value;
  fechainicio = document.getElementById('fechafinid').value;
  
  console.log("fecha inicio id " + fechainicioid);
  console.log(fechafinid);
  console.log("año " + fechainicio);
  //calculo();
}