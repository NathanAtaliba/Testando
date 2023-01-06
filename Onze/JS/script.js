function register(){
var nome = document.getElementById("nome");
var password = document.getElementById("password");
var email = document.getElementById("email");
//sex = document.getElementById("sex");
//hours = document.getElementById("hours");

if(!nome.value || !password.value || !email.value ){
window.alert("Preencha todos os campos!");
}
else{
    
    console.log(" nome: " + nome.value);
    console.log(" Senha: " + password.value);
    console.log(" Email: " + email.value);

}
}
function deleteData(){
    nome = document.getElementById("nome");
    password = document.getElementById("password");
    email =document.getElementById("email"); 
    nome.value = "";
    password.value = "";
    email.value = "";
    
}