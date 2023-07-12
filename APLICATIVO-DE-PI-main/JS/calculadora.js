let peso = Number(prompt("Digite seu peso"));
let altura = Number(prompt("Digite sua altura"));
let imc = peso/(altura*altura);
if(imc< 18.5){
    document.write("Abaixo do peso");
}
else if(imc <25){
    document.write("Peso Normal");

}
else if(imc < 35){
    document.write("Sobre peso");

}
else if(imc < 35){
    document.write("Obesidade grau I")
}else if(imc < 40){
    document.write("Obesidade grau II") 
}else {
    document.write("Obesidade grau III") 
}