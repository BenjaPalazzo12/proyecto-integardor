export default function validation(input){
    const error = {}
    const regexEmail = /\S+@\S+\.\S+/;
    // eslint-disable-next-line no-unused-vars
    const regexPassword = new RegExp("[0-9]")

    if(!regexEmail.test(input.email)){
        error.email = "Debe ingresar un email valido"
    }
    if(!input.email){
        error.email = "Debe ingresar un email"
    }
    if(input.email.length > 35) {
        error.email = "El email debe tener menos de 35 caracteres"
    }
    if(!regexPassword.test(input.password)){
        error.password = "Password debe tener al menos un numero"
    }
    if(input.password.length < 6 || input.password.length > 10){
        error.password = "Contraseña entre 6 y 10 caracteres"
    }
    return error;
}