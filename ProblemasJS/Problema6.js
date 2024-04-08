document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var nacimiento = new Date(document.getElementById('nacimiento').value);
    var hoy = new Date();
    var edad = hoy.getFullYear() - nacimiento.getFullYear();
    var mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && today.getDate() < nacimiento.getDate())) {
        edad--;
    }
    document.getElementById('resultado').innerText = "La persona tiene " + edad + " años";
});
