var mm = 0
var ss = 0
var ip = 0
var ii = 0
var contadore = 0
function iniciar(){
var texto = document.getElementById("texto")
    contadore = setInterval(contador,100)
    texto.innerHTML = 'Contando'
    ii = 1
}
function reset(){
    mm = document.getElementById("mm")
    ss = document.getElementById("ss")
    mm.innerHTML = '00'
    ss.innerHTML = '00'
    if(ip != 0 && ii != 1 ){
    texto.innerHTML = 'Zerado'
    ip = 0
    
}
}
function parar(){
    var texto = document.getElementById("texto")
    clearInterval(contadore) 
    texto.innerHTML = 'Parado'  
    ip = 1
    ii = 0
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