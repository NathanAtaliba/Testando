/////////////////////////////////////////////
function MouseAntesEntrada1(){
    var corbotao = document.getElementById("botao1");    
  corbotao.style.background = 'green';
}
function MouseAntesSaida1(){
  var conteudo = document.getElementById("botao1");
  conteudo.style.background ='white'
}
function MouseAntesClick1(){
  var conteudo = document.getElementById("Mes");
  
  switch (conteudo.innerHTML){
    case 'Janeiro':
    conteudo.innerHTML = 'Dezembro';
    break;
      case 'Dezembro':
      conteudo.innerHTML = 'Novembro'; 
      break; 
        case 'Novembro':
        conteudo.innerHTML = 'Outubro';
        break;  
          case 'Outubro':
          conteudo.innerHTML = 'Setembro';
          break;
             case 'Setembro':
             conteudo.innerHTML = 'Agosto';
             break; 
                case 'Agosto':
                conteudo.innerHTML = 'Julho';
                break;
                  case 'Julho':
                  conteudo.innerHTML = 'Junho';
                  break; 
                    case 'Junho':
                    conteudo.innerHTML = 'Maio';
                    break; 
                      case 'Maio':
                      conteudo.innerHTML = 'Abril';
                      break;
                        case 'Abril':
                        conteudo.innerHTML = 'Março';
                        break; 
                          case 'Março':
                          conteudo.innerHTML = 'Fevereiro';
                          break; 
                          case 'Fevereiro':
                            conteudo.innerHTML = 'Janeiro';
                            break;  
  }
}
/////////////////////////////////////////////
function MouseAntesEntrada2(){
    var corbotao = document.getElementById("botao3");    
  corbotao.style.background = 'green';
}
function MouseAntesSaida2(){
  var corbotao = document.getElementById("botao3");    
  corbotao.style.background = 'white';
}
function MouseAntesClick2(){
  var conteudo = document.getElementById("Ano");
  conteudo.innerHTML = Number(conteudo.innerHTML)-1;
}
/////////////////////////////////////////////
function MouseDepoisSaida1(){
  var conteudo = document.getElementById("botao2");
  conteudo.style.background= 'white';
} 
function MouseDepoisEntrada1(){
    var corbotao = document.getElementById("botao2");    
  corbotao.style.background = 'green';
}
function MouseDepoisClick1(){
  var conteudo = document.getElementById("Mes");
  
  switch (conteudo.innerHTML){
    case 'Janeiro':
    conteudo.innerHTML = 'Fevereiro';
    break;
      case 'Fevereiro':
      conteudo.innerHTML = 'Março'; 
      break; 
        case 'Março':
        conteudo.innerHTML = 'Abril';
        break;  
          case 'Abril':
          conteudo.innerHTML = 'Maio';
          break;
             case 'Maio':
             conteudo.innerHTML = 'Junho';
             break; 
                case 'Junho':
                conteudo.innerHTML = 'Julho';
                break;
                  case 'Julho':
                  conteudo.innerHTML = 'Agosto';
                  break; 
                    case 'Agosto':
                    conteudo.innerHTML = 'Setembro';
                    break; 
                      case 'Setembro':
                      conteudo.innerHTML = 'Outubro';
                      break;
                        case 'Outubro':
                        conteudo.innerHTML = 'Novembro';
                        break; 
                          case 'Novembro':
                          conteudo.innerHTML = 'Dezembro';
                          break; 
                          case 'Dezembro':
                            conteudo.innerHTML = 'Janeiro';
                            break;  
  }
}
/////////////////////////////////////////////
function MouseDepoisEntrada2(){
    var corbotao = document.getElementById("botao4");    
  corbotao.style.background = 'green';
}
function MouseDepoisSaida2(){
  var conteudo = document.getElementById("botao4");
  conteudo.style.background = 'white';
}
function MouseDepoisClick2(){
  var conteudo = document.getElementById("Ano");
  conteudo.innerHTML = Number(conteudo.innerHTML)+1; 
}
/////////////////////////////////////////////