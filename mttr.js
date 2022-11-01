
function getVals (diff) {
  var days = Math.floor(diff / (24 * 60 * 60));
  var hours = Math.floor(diff / (60 * 60)) % 24;
  var minutes = Math.floor(diff / 60) % 60;
 var secs = diff % 60;
 var totalMinutes = ((days * 1440) + (hours * 60) + minutes);
  return {
      days, hours, minutes, secs, totalMinutes,
  };
}
function st() {
  var endtime = document.getElementById("edt").valueAsNumber;
  var starttime = document.getElementById("sdt").valueAsNumber;
  var numbercorrectivo = document.getElementById("numbercorrectivo").valueAsNumber;
  var distance = (endtime - starttime)/1000;
  console.log ("diferencia = " + distance);
  var time = getVals(distance);
  var tiempoTotal = time.totalMinutes;
  var time2 =  calcularHorasMinutos(tiempoTotal);
  var mttr = ( time.totalMinutes / numbercorrectivo);
  console.log(Math.round(mttr) + "mttr");
  var time3 =  calcularHorasMinutos(Math.round(mttr));
  

    //mostrar el resultado
    document.getElementById("demo").innerHTML = time.days + "d " + time.hours + "h "+ time.minutes + "m " + time.secs + "s ";
    document.getElementById("dias").innerHTML = time.days + "d ";
    document.getElementById("horas").innerHTML = time.hours + "h ";
    document.getElementById("minutos").innerHTML = time.minutes + "m ";
    document.getElementById("minutosTotales").innerHTML =  time.totalMinutes;
    document.getElementById("hsMtto").innerHTML = time2.horas + ":" + time2.minutos;
    document.getElementById("mttrm").innerHTML =  mttr ;
    document.getElementById("mttrhh").innerHTML =  time3.horas + ":" + time3.minutos;
   
}


function calcularHorasMinutos(minutos) {
if (typeof minutos != 'number' || !Number.isInteger(minutos)) {
    throw TypeError('El argumento debe ser un número.');
}
let horas = Math.floor(minutos / 60);
let minutosRestantes = minutos % 60;

return {
    horas, minutos: minutosRestantes
};
}
