document.getElementById("form").addEventListener('submit', function(event) {
    event.preventDefault();
    var precion = parseFloat(document.getElementById('inp').value);
    var descuento = 0.15;
    var total = precion - (precion * descuento);
    document.getElementById('resultado').innerText = "El precio con el descuento es de $" + total;
});