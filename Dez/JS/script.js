function colocarBomba(){
    var n1 = document.getElementById("n1")
    var n2 = document.getElementById("n2")
    var n3 = document.getElementById("n3")
    var n4 = document.getElementById("n4")
    var n5 = document.getElementById("n5")
    var n6 = document.getElementById("n6")
    var n7 = document.getElementById("n7")
    var n8 = document.getElementById("n8")
    var n9 = document.getElementById("n9")
    var n10 = document.getElementById("n10")
    var n11 = document.getElementById("n11")
    var n12 = document.getElementById("n12")
    var n13 = document.getElementById("n13")
    var n14 = document.getElementById("n14")
    var n15 = document.getElementById("n15")
    var n16 = document.getElementById("n16")
    var n17 = document.getElementById("n17")
    var n18 = document.getElementById("n18")
    var n19 = document.getElementById("n19")
    var n20 = document.getElementById("n20")
    var n21 = document.getElementById("n21")
    var n22 = document.getElementById("n22")
    var n23 = document.getElementById("n23")
    var n24 = document.getElementById("n24")
    var n25 = document.getElementById("n25")
   
let vetor = [24];
for(var i=0;i<=24;i++){
   vetor[i] = Math.random();
   if((vetor[i])<=0.8){
   vetor[i] = 0;
   }else{
    vetor[i] = 1;
   } 
    }
n1.value = vetor[0];
n2.value = vetor[1];
n3.value = vetor[2];
n4.value = vetor[3];
n5.value = vetor[4];
n6.value = vetor[5];
n7.value = vetor[6];
n8.value = vetor[7];
n9.value = vetor[8];
n10.value = vetor[9];
n11.value = vetor[10];
n12.value = vetor[11]; 
n13.value = vetor[12]; 
n14.value = vetor[13]; 
n15.value = vetor[14];    
n16.value = vetor[15];
n17.value = vetor[16]; 
n18.value = vetor[17]; 
n19.value = vetor[18];
n20.value = vetor[19];
n21.value = vetor[20];
n22.value = vetor[21];
n23.value = vetor[22];
n24.value = vetor[23];   
n25.value = vetor[24];

}
function conferir(numero){
    var contagem = document.getElementById("pontuacao");
    switch (numero){
    case '1':
        console.log(n1.value);
        if(n1.value==1){
            contagem.innerHTML = 0;
            window.alert("VOCE PERDEUUUUU!!!");
            reset();
        }else if(n1.value==0){
            contagem.innerHTML = Number(contagem.innerHTML)+1 ;
            window.alert("CONTINUE!!");
            n1.style.backgroundColor = 'BLACK';  
        }else{
            window.alert("DE START NO JOGO!!"); 
        }
        break;
    case '2':
        console.log(n2.value);
        if(n2.value==1){
            contagem.innerHTML = 0;
            window.alert("VOCE PERDEUUUUU!!!");
            reset();
        }else if(n2.value==0){
            contagem.innerHTML = Number(contagem.innerHTML)+1 ;
            window.alert("CONTINUE!!");
            n2.style.backgroundColor = 'BLACK';  
        }else{
            window.alert("DE START NO JOGO!!"); 
        }
        break;
    case '3': 
    console.log(n3.value);
    if(n3.value==1){
        contagem.innerHTML = 0;
        window.alert("VOCE PERDEUUUUU!!!");
        reset();
    }else if(n3.value==0){
        contagem.innerHTML = Number(contagem.innerHTML)+1 ;
        window.alert("CONTINUE!!");
        n3.style.backgroundColor = 'BLACK'; 
    }else{
        window.alert("DE START NO JOGO!!"); 
    }
        break;
    case '4': 
    console.log(n4.value);
    if(n4.value==1){
        contagem.innerHTML = 0;
        window.alert("VOCE PERDEUUUUU!!!");
        reset();
    }else if(n4.value==0){
        contagem.innerHTML = Number(contagem.innerHTML)+1 ;
        window.alert("CONTINUE!!"); 
        n4.style.backgroundColor = 'BLACK';
    }else{
        window.alert("DE START NO JOGO!!"); 
    }
        break;
    case '5': 
    console.log(n5.value);
    if(n5.value==1){
        contagem.innerHTML = 0;
        window.alert("VOCE PERDEUUUUU!!!");
        reset();
    }else if(n5.value==0){
        contagem.innerHTML = Number(contagem.innerHTML)+1 ;
        window.alert("CONTINUE!!"); 
        n5.style.backgroundColor = 'BLACK';
    }else{
        window.alert("DE START NO JOGO!!"); 
    }
        break;
    case '6':
        console.log(n6.value);
        if(n6.value==1){
            contagem.innerHTML = 0;
            window.alert("VOCE PERDEUUUUU!!!");
            reset(); 
        }else if(n6.value==0){
            contagem.innerHTML = Number(contagem.innerHTML)+1 ;
            window.alert("CONTINUE!!"); 
            n6.style.backgroundColor = 'BLACK';
        }else{
            window.alert("DE START NO JOGO!!"); 
        }
        break;
    case '7':
        console.log(n7.value);
        if(n7.value==1){
            contagem.innerHTML = 0;
            window.alert("VOCE PERDEUUUUU!!!");
            reset();
        }else if(n7.value==0){
            contagem.innerHTML = Number(contagem.innerHTML)+1 ;
            window.alert("CONTINUE!!"); 
            n7.style.backgroundColor = 'BLACK';
        }else{
            window.alert("DE START NO JOGO!!"); 
        }
        break;
    case '8': 
    console.log(n8.value);
    if(n8.value==1){
        contagem.innerHTML = 0;
        window.alert("VOCE PERDEUUUUU!!!");
        reset(); 
    }else if(n8.value==0){
        contagem.innerHTML = Number(contagem.innerHTML)+1 ;
        window.alert("CONTINUE!!"); 
        n8.style.backgroundColor = 'BLACK';
    }else{
        window.alert("DE START NO JOGO!!"); 
    }
        break;
    case '9': 
    console.log(n9.value);
    if(n9.value==1){
        contagem.innerHTML = 0;
        window.alert("VOCE PERDEUUUUU!!!");
        reset();
    }else if(n9.value==0){
        contagem.innerHTML = Number(contagem.innerHTML)+1 ;
        window.alert("CONTINUE!!"); 
        n9.style.backgroundColor = 'BLACK';
    }else{
        window.alert("DE START NO JOGO!!"); 
    }
        break;
    case '10': 
    console.log(n10.value);
    if(n10.value==1){
        contagem.innerHTML = 0;
        window.alert("VOCE PERDEUUUUU!!!");
        reset();
    }else if(n10.value==0){
        contagem.innerHTML = Number(contagem.innerHTML)+1 ;
        window.alert("CONTINUE!!"); 
        n10.style.backgroundColor = 'BLACK';
    }else{
        window.alert("DE START NO JOGO!!"); 
    }
        break;  
    case '11':
        console.log(n11.value);
        if(n11.value==1){
            contagem.innerHTML = 0;
            window.alert("VOCE PERDEUUUUU!!!");
            reset();
        }else if(n11.value==0){
            contagem.innerHTML = Number(contagem.innerHTML)+1 ;
            window.alert("CONTINUE!!"); 
            n11.style.backgroundColor = 'BLACK';
        }else{
            window.alert("DE START NO JOGO!!"); 
        }
        break;
    case '12':
        console.log(n12.value);
        if(n12.value==1){
            contagem.innerHTML = 0;
            window.alert("VOCE PERDEUUUUU!!!");
            reset(); 
        }else if(n12.value==0){
            contagem.innerHTML = Number(contagem.innerHTML)+1 ;
            window.alert("CONTINUE!!"); 
            n12.style.backgroundColor = 'BLACK';
        }else{
            window.alert("DE START NO JOGO!!"); 
        }
        break;
    case '13': 
    console.log(n13.value);
    if(n13.value==1){
        contagem.innerHTML = 0;
        window.alert("VOCE PERDEUUUUU!!!");
        reset();
    }else if(n13.value==0){
        contagem.innerHTML = Number(contagem.innerHTML)+1 ;
        window.alert("CONTINUE!!");
        n13.style.backgroundColor = 'BLACK'; 
    }else{
        window.alert("DE START NO JOGO!!"); 
    }
        break;
    case '14': 
    console.log(n14.value);
    if(n14.value==1){
        contagem.innerHTML = 0;
        window.alert("VOCE PERDEUUUUU!!!");
        reset(); 
    }else if(n14.value==0){
        contagem.innerHTML = Number(contagem.innerHTML)+1 ;
        window.alert("CONTINUE!!"); 
        n13.style.backgroundColor = 'BLACK'; 
    }else{
        window.alert("DE START NO JOGO!!"); 
    }
        break;
    case '15': 
    console.log(n15.value);
    if(n15.value==1){
        contagem.innerHTML = 0;
        window.alert("VOCE PERDEUUUUU!!!");
        reset();
    }else if(n15.value==0){
        contagem.innerHTML = Number(contagem.innerHTML)+1 ;
        window.alert("CONTINUE!!"); 
        n15.style.backgroundColor = 'BLACK';
    }else{
        window.alert("DE START NO JOGO!!"); 
    }
        break;  
    case '16':
        console.log(n16.value);
        if(n16.value==1){
            contagem.innerHTML = 0;
            window.alert("VOCE PERDEUUUUU!!!");
            reset();
        }else if(n16.value==0){
            contagem.innerHTML = Number(contagem.innerHTML)+1 ;
            window.alert("CONTINUE!!"); 
            n16.style.backgroundColor = 'BLACK';
        }else{
            window.alert("DE START NO JOGO!!"); 
        }
        break;
    case '17':
        console.log(n17.value);
        if(n17.value==1){
            contagem.innerHTML = 0;
            window.alert("VOCE PERDEUUUUU!!!");
            reset();
        }else if(n17.value==0){
            contagem.innerHTML = Number(contagem.innerHTML)+1 ;
            window.alert("CONTINUE!!"); 
            n17.style.backgroundColor = 'BLACK';
        }else{
            window.alert("DE START NO JOGO!!"); 
        }
        break;
    case '18': 
    console.log(n18.value);
    if(n18.value==1){
        contagem.innerHTML = 0;
        window.alert("VOCE PERDEUUUUU!!!");
        reset(); 
    }else if(n18.value==0){
        contagem.innerHTML = Number(contagem.innerHTML)+1 ;
        window.alert("CONTINUE!!"); 
        n18.style.backgroundColor = 'BLACK';
    }else{
        window.alert("DE START NO JOGO!!"); 
    }
        break;
        case '19': 
    console.log(n19.value);
    if(n19.value==1){
        contagem.innerHTML = 0;
        window.alert("VOCE PERDEUUUUU!!!");
        reset();
    }else if(n19.value==0){
        contagem.innerHTML = Number(contagem.innerHTML)+1 ;
        window.alert("CONTINUE!!"); 
        n19.style.backgroundColor = 'BLACK';
    }else{
        window.alert("DE START NO JOGO!!"); 
    }
        break;
        case '20': 
    console.log(n20.value);
    if(n20.value==1){
        contagem.innerHTML = 0;
        window.alert("VOCE PERDEUUUUU!!!");
        reset();
    }else if(n20.value==0){
        contagem.innerHTML = Number(contagem.innerHTML)+1 ;
        window.alert("CONTINUE!!");
        n20.style.backgroundColor = 'BLACK'; 
    }else{
        window.alert("DE START NO JOGO!!"); 
    }
        break; 
        case '21': 
    console.log(n21.value);
    if(n21.value==1){
        contagem.innerHTML = 0;
        window.alert("VOCE PERDEUUUUU!!!");
        reset(); 
    }else if(n21.value==0){
        contagem.innerHTML = Number(contagem.innerHTML)+1 ;
        window.alert("CONTINUE!!"); 
        n21.style.backgroundColor = 'BLACK';
    }else{
        window.alert("DE START NO JOGO!!"); 
    }
        break;
        case '22': 
    console.log(n22.value);
    if(n22.value==1){
        contagem.innerHTML = 0;
        window.alert("VOCE PERDEUUUUU!!!");
        reset();
    }else if(n22.value==0){
        contagem.innerHTML = Number(contagem.innerHTML)+1 ;
        window.alert("CONTINUE!!"); 
        n22.style.backgroundColor = 'BLACK';
    }else{
        window.alert("DE START NO JOGO!!"); 
    }
        break;
        case '23': 
    console.log(n23.value);
    if(n23.value==1){
        contagem.innerHTML = 0;
        window.alert("VOCE PERDEUUUUU!!!");
        reset();
    }else if(n23.value==0){
        contagem.innerHTML = Number(contagem.innerHTML)+1 ;
        window.alert("CONTINUE!!");
        n23.style.backgroundColor = 'BLACK'; 
    }else{
        window.alert("DE START NO JOGO!!"); 
    }
        break;
        case '24': 
    console.log(n24.value);
    if(n24.value==1){
        contagem.innerHTML = 0;
        window.alert("VOCE PERDEUUUUU!!!");
        reset(); 
    }else if(n24.value==0){
        contagem.innerHTML = Number(contagem.innerHTML)+1 ;
        window.alert("CONTINUE!!"); 
        n24.style.backgroundColor = 'BLACK';
    }else{
        window.alert("DE START NO JOGO!!"); 
    }
        break;  
        case '25': 
    console.log(n25.value);
    if(n25.value==1){
        contagem.innerHTML = 0;
        window.alert("VOCE PERDEUUUUU!!!");
        reset();
    }else if(n25.value==0){
        contagem.innerHTML = Number(contagem.innerHTML)+1 ;
        window.alert("CONTINUE!!"); 
        n25.style.backgroundColor = 'BLACK';
    }else{
        window.alert("DE START NO JOGO!!"); 
    }
        break;           
    } 
}
function reset(){
    var n1 = document.getElementById("n1")
    var n2 = document.getElementById("n2")
    var n3 = document.getElementById("n3")
    var n4 = document.getElementById("n4")
    var n5 = document.getElementById("n5")
    var n6 = document.getElementById("n6")
    var n7 = document.getElementById("n7")
    var n8 = document.getElementById("n8")
    var n9 = document.getElementById("n9")
    var n10 = document.getElementById("n10")
    var n11 = document.getElementById("n11")
    var n12 = document.getElementById("n12")
    var n13 = document.getElementById("n13")
    var n14 = document.getElementById("n14")
    var n15 = document.getElementById("n15")
    var n16 = document.getElementById("n16")
    var n17 = document.getElementById("n17")
    var n18 = document.getElementById("n18")
    var n19 = document.getElementById("n19")
    var n20 = document.getElementById("n20")
    var n21 = document.getElementById("n21")
    var n22 = document.getElementById("n22")
    var n23 = document.getElementById("n23")
    var n24 = document.getElementById("n24")
    var n25 = document.getElementById("n25")
   
   n1.style.backgroundColor = 'RED';
   n2.style.backgroundColor = 'RED';
   n3.style.backgroundColor = 'RED';
   n4.style.backgroundColor = 'RED';
   n5.style.backgroundColor = 'RED';
   n6.style.backgroundColor = 'RED';
   n7.style.backgroundColor = 'RED';
   n8.style.backgroundColor = 'RED';
   n9.style.backgroundColor = 'RED';
   n10.style.backgroundColor = 'RED';
   n11.style.backgroundColor = 'RED';
   n12.style.backgroundColor = 'RED';
   n13.style.backgroundColor = 'RED';
   n14.style.backgroundColor = 'RED';
   n15.style.backgroundColor = 'RED';
   n16.style.backgroundColor = 'RED';
   n17.style.backgroundColor = 'RED';
   n18.style.backgroundColor = 'RED';
   n19.style.backgroundColor = 'RED';
   n20.style.backgroundColor = 'RED';
   n21.style.backgroundColor = 'RED';
   n22.style.backgroundColor = 'RED';
   n23.style.backgroundColor = 'RED';
   n24.style.backgroundColor = 'RED';
   n25.style.backgroundColor = 'RED';
   n1.value = 3;
   n2.value = 3;
   n3.value = 3;
   n4.value = 3;
   n5.value = 3;
   n6.value = 3;
   n7.value = 3;
   n8.value = 3;
   n9.value = 3;
   n10.value = 3;
   n11.value = 3;
   n12.value = 3;
   n13.value = 3;
   n14.value = 3;
   n15.value = 3;
   n16.value = 3;
   n17.value = 3;
   n18.value = 3;
   n19.value = 3;
   n20.value = 3;
   n21.value = 3;
   n22.value = 3;
   n23.value = 3;
   n24.value = 3;
   n25.value = 3;
   var contagem = document.getElementById("pontuacao");
   contagem.innerHTML = 0;

   
}