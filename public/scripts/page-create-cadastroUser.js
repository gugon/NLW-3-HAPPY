
function validaCadastro(event){
    const span =  event.currentTarget
    const user =  document.querySelector('.input-user')
    const pass =  document.querySelector('.input-senha')
    if (user == "gustavo"){
        alert("Existe")
    }else{
        alert("Não existe")
    }
}