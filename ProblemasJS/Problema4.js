document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var parcial1 = parseFloat(document.getElementById('cal1').value);
    var parcial2 = parseFloat(document.getElementById('cal2').value);
    var parcial3 = parseFloat(document.getElementById('cal3').value);
    var examenFinal = parseFloat(document.getElementById('examen').value);
    var trabajoFinal = parseFloat(document.getElementById('trabajo').value);
    var promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
    var calificacionFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);

    document.getElementById('resultado').innerText = "La calificación final del alumno es " + calificacionFinal;
});