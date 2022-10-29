function iniciar(){
var numero = document.getElementById("numero")


for(let i=0;i<100;i++)
numero.innerHTML = Number(numero.innerHTML)+ 1.000
console.log(numero.innerHTML)

}
function reset(){
    var numero = document.getElementById("numero")
    numero.innerHTML = 0.000
}
function parar(){
    parar = 1
    console.log(parar)
}