function sair(){
    if(window.confirm("Deseja cancelar o cadastro e retornar a tela inicial?")==true){
        window.location.href="index.html"
    }
}
function logoff(){
    if(window.confirm("Deseja realizar logoff?")==true){
        window.location.href="index.html"
    }
}
//function confirma(){
//    if((senha.value)==123456){
//        window.location.href="login.confirmação.html"
//    }else{
//        alert("Senha incorreta, tente novamente")
//        window.location.href="login-dados.html"
//    }
//}