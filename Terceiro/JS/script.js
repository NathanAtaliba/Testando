function reload(){
    var horas = 19;
    var texto = window.document.getElementById("texto");
    var imagem = window.document.getElementById("imagem");
    var body = window.document.getElementById("body");
    texto.innerHTML =`Agora são ${horas} horas`;
    if(horas<=12 && horas>=6){
        imagem.innerHTML='<img src ="BomDia.jpg">';
        body.style.background ='verde';
    }  
    else if(horas>12 && horas <18) {
        imagem.innerHTML='<img src ="BoaTarde.jpg">';
         body.style.background ='blue';
    }else{
        imagem.innerHTML='<img src ="BoaNoite.jpg">';
        body.style.background ='black';
    }  
}