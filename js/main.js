var target_date = new Date("april 21, 2020").getTime();
var dias, horas, minutos, segundos;

setInterval(function () {

    var current_date = new Date().getTime();
    var segundos_f = (target_date - current_date) / 1000;

dias = parseInt(segundos_f / 86400);
    segundos_f = segundos_f % 86400;

    horas = parseInt(segundos_f / 3600);
    segundos_f = segundos_f % 3600;

    minutos = parseInt(segundos_f / 60);
    segundos = parseInt(segundos_f % 60);

    document.getElementById('timer-days').innerHTML = dias;
document.getElementById('timer-hours').innerHTML = horas;
document.getElementById('timer-min').innerHTML = minutos;
document.getElementById('timer-sec').innerHTML = segundos;


}, 1000);
