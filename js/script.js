const sliderElement = document.querySelector("#slider")
const buttonElement = document.querySelector("#button")

const sizePassword = document.querySelector("#valor")
const password = document.querySelector("#password")

const containerPassword = document.querySelector("#container-password")

const alfabeto = "abcdefghijklmnopqrstuvwxyz1234567890"

const novaSenha = ""

sizePassword.innerHTML = sliderElement.value

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value
}

function generatePassword(){
    
    let pass = ""
    for(let i =0, n=alfabeto.length; i<sliderElement.value;i++){
        pass+= alfabeto.charAt(Math.floor(Math.random() * n))
    }
    containerPassword.classList.remove("hide")
    password.innerHTML = pass
    return pass
}

function copyPassword(){
    alert("Senha copiada")
    navigator.clipboard.writeText(generatePassword())
}