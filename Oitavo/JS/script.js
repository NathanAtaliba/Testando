var numero = document.getElementById("numero")
function reset(){
 numero.innerHTML = '0'
  numero.style.color='black'
}
function diminuir(){ 
    numero.innerHTML = Number(Number(numero.innerHTML)-1)
if(Number(numero.innerHTML)<0){
    numero.style.color='red'
     }
     else if(Number(numero.innerHTML)==0){
        numero.style.color ='black'
     }
}
function aumentar(){
    numero.innerHTML = Number(Number(numero.innerHTML)+1)
    if(Number(numero.innerHTML)>0){
        numero.style.color='green'
         }
         else if(Number(numero.innerHTML)==0){ 
            numero.style.color='black'
         }
}