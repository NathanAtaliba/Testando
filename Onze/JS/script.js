function register(){
nome = document.getElementById("nome");
password = document.getElementById("password");
email = document.getElementById("email");
//sex = document.getElementById("sex");
//hours = document.getElementById("hours");

if(!nome.value || !password.value || !email.value ){
window.alert("Preencha todos os campos!");
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