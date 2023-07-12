function calculateIMC() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    
    var resulta = weight / (height * height);

    document.getElementById('resulta').textContent = 'Seu IMC é: ' + resulta.toFixed(2);
}