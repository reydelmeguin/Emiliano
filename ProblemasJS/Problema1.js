document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var capital = parseFloat(document.getElementById('capital').value);
    var interes = 0.02;
    var total = capital * interes;
    document.getElementById('result').innerText = "A razón de 2% mensual usted ganará $" + total;
});