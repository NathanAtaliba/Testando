function tabuada(){
    var numero = window.document.getElementById("numero");
    var saida = window.document.getElementById("saida");
    if(numero.value <= 0 || numero.value>200 ){
        window.alert('Erro');
    }
    else{  
        saida.innerHTML='';     
    for(var i=1;i<=10;i++){
let item = document.createElement('option');
item.text = `${numero.value} X ${i} = ${(numero.value)*i}`;
saida.appendChild(item);
}
}     
}

