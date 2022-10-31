var mm = 0
var ss = 0
var contadore = 0
function iniciar(){
var texto = document.getElementById("texto")
    contadore = setInterval(contador,100)
    texto.innerHTML = 'Contando'

}
function reset(){
    mm = document.getElementById("mm")
    ss = document.getElementById("ss")
    mm.innerHTML = '00'
    ss.innerHTML = '00'

}
function parar(){
    var texto = document.getElementById("texto")
    clearInterval(contadore)
    texto.innerHTML = 'Parado'
}
function contador(){
    mm = document.getElementById("mm")
    ss = document.getElementById("ss")
if(Number(ss.innerHTML)>59){
 mm.innerHTML = Number(mm.innerHTML) +1
 ss.innerHTML = 0
 console.log(mm.innerHTML)
}
else{
ss.innerHTML = Number(ss.innerHTML)+1

}}