const loginButton = document.getElementById("login-button")
const signupButton = document.getElementById("singup-button")

const login = document.getElementById("login")
const signup = document.getElementById("signup")

const loginButtonLarge = document.getElementById("login-button-large")
const signupButtonLarge = document.getElementById("signup-button-large")

const cima = document.getElementById("cima")

console.log(signup)

//telas pequenas
function trocaSignup(){
    loginButton.style.borderBottom = "2px solid transparent"
    signupButton.style.borderBottom = "2px solid var(--verde)"
    signup.style.display = "block"
    login.style.display = "none"
}

function trocaLogin(){
    signupButton.style.borderBottom = "2px solid transparent"
    loginButton.style.borderBottom = "2px solid var(--verde)"
    signup.style.display = "none"
    login.style.display = "block"
}

//telas grandes
function loginGrande(){
    cima.style.cssFloat = "left"
    login.style.display = "none"
    signupButtonLarge.style.display = "none"
    loginButtonLarge.style.display = "block"
    signup.style.display = "block"
}

function signupGrande(){
    cima.style.cssFloat = "right"
    login.style.display = "block"
    signupButtonLarge.style.display = "block"
    loginButtonLarge.style.display = "none"
    signup.style.display = "none"
}

signupButton.addEventListener("click", trocaSignup)
loginButton.addEventListener("click", trocaLogin)
signupButtonLarge.addEventListener("click", loginGrande)
loginButtonLarge.addEventListener("click", signupGrande)