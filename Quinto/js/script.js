function calcular(){
var peso = window.document.getElementById("peso");
var altura = window.document.getElementById("altura");
var resultado = window.document.getElementById("resultado");
var classificacao = window.document.getElementById("classificacao");
var grau = window.document.getElementById("grau");
var IMC;
IMC = (peso.value)/Math.pow((altura.value),2);
resultado.innerHTML = `IMC = ${IMC}`;
if(IMC <18.5){
    classificacao.innerHTML = `Classificação: Magreza`;
    grau.innerHTML = `Grau de obesidade: 0`;
}
else if(IMC>=18.5 && IMC<=24.99){
    classificacao.innerHTML = `Classificação: Normal`;
    grau.innerHTML = `Grau de obesidade: 0`;
}
else if(IMC>=25 && IMC <=29.99){
    classificacao.innerHTML = `Classificação: Sobrepeso`;
    grau.innerHTML = `Grau de obesidade: 1`;
}
else if(IMC>30 && IMC<=39.99){
    classificacao.innerHTML = `Classificação: Obesidade`;
    grau.innerHTML = `Grau de obesidade: 2`;
}else{
    classificacao.innerHTML = `Classificação: Obesidade grave`
    grau.innerHTML = `Grau de obesidade: 3`;
}
}
