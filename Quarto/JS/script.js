function verificar(){
var nasc = window.document.getElementById("ano");
var idade = 2022 - Number(nasc.value);
var cor = window.document.getElementById("cor");
var msg = window.document.getElementById("msg");
var sexo = window.document.getElementsByName("nome");
var genero ='';
if(idade<=0 || idade>100){
    window.alert('Erro');
}
else {
    if(sexo[0].checked){
        genero ='masculino';
        if(idade>=1 && idade<=12){
            cor.style.background = 'gray';
            msg.innerHTML= `A idade é ${idade},${genero}`;
        }
        else if(idade>12 && idade<=21){
            cor.style.background =  'green';
            msg.innerHTML= `A idade é ${idade}, sexo ${genero}`;
        }
        else if(idade>21 && idade<=59){
            cor.style.background = 'blue';
            msg.innerHTML= `A idade é ${idade},${genero}`;
        }
        else if(idade>59){
            cor.style.background = 'red';
            msg.innerHTML= `A idade é ${idade},${genero}`;
        }
    }
    else if(sexo[1].checked){
        genero ='feminino';
    if(idade>=1 && idade<=12){
        cor.style.background = 'gray';
        msg.innerHTML= `A idade é ${idade},${genero}`;
    }
    else if(idade>12 && idade<=21){
        cor.style.background =  'green';
        msg.innerHTML= `A idade é ${idade},${genero}`;
    }
    else if(idade>21 && idade<=59){
        cor.style.background = 'blue';
        msg.innerHTML= `A idade é ${idade},${genero}`;
    }
    else if(idade>59){
        cor.style.background = 'red';
        msg.innerHTML= `A idade é ${idade},${genero}`;
    }}
}
}