const loginButton = document.getElementById("login-button")
const signupButton = document.getElementById("singup-button")
const login = document.getElementById("login")
const signup = document.getElementById("signup")
console.log(signup)

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

signupButton.addEventListener("click", trocaSignup)
loginButton.addEventListener("click", trocaLogin)