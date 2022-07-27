var conteudo = document.getElementById("numero");
var saida = document.getElementById("saida");

function tabuada(){
    for(var i=1;i<=10;i++){
        saida = Number(conteudo.innerHTML)*i;
        conteudo.innerHTML = document.writeln(saida);
}
}
