document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var estudiantes = parseFloat(document.getElementById('estudiantes').value);
    var hombres = parseFloat(document.getElementById('hom').value);
    var mujeres = parseFloat(document.getElementById('muj').value);
    var porcentajeHombres = (hombres/estudiantes)*100;
    var porcentajeMujeres = (mujeres/estudiantes)*100;

    document.getElementById('resultado').innerText = "El porcentaje de hombres es de " + porcentajeHombres.toFixed(2) + "% y de mujeres es de " + porcentajeMujeres.toFixed(2) + "%";
});