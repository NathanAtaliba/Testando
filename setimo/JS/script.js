const esc = ["0","1","2","3","4","5","6","7","8",'9',"A","B","C","D","E","F"]

function escolha(){
  var  cor = document.getElementById("corpo")
  const color = document.getElementById("color")
  let hex = '#'
  for(let i = 0; i < 6; i++){
   hex = hex +  esc[getNumber()]
   console.log(hex)
 
  }
function getNumber(){
  return Math.floor(Math.random()*esc.length)
}
cor.style.backgroundColor = hex
color.innerHTML = hex

}

