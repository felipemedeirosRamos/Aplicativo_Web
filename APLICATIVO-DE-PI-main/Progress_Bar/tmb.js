function calculateTMB() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var age = parseFloat(document.getElementById('age').value);
    var gender = document.getElementById('gender').value;
    
    if (gender === 'male') {
        var result = 66 + (13.75 * weight) + (5 * height) - (6.75 * age);
    } else if (gender === 'female') {
        var result = 655 + (9.56 * weight) + (1.85 * height) - (4.68 * age);
    }

    document.getElementById('result').textContent = 'Sua TMB é: ' + result.toFixed(2) + ' calorias por dia.';
}