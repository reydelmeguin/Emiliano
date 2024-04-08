document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var sueldob = parseFloat(document.getElementById('sueldob').value);
    var v1 = parseFloat(document.getElementById('v1').value);
    var v2 = parseFloat(document.getElementById('v2').value);
    var v3 = parseFloat(document.getElementById('v3').value);
    var comision = 0.1;
    var comisiontotal = (v1+v2+v3) * comision; 
    var total = sueldob + comisiontotal;
    document.getElementById('resultado').innerText = "El vendedor recibirá $" + total + " en total en el mes";
});
