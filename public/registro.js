import { postUsers } from "./services/llamadosUsers.js";

//Inputs del formulario
const user = document.getElementById("user");
const sede = document.getElementById("sede");
const codigo = document.getElementById("codigo");
const password = document.getElementById("password");
// Botón para mostrar contraseña
const viewPassword = document.getElementById("viewPassword");
//Botón para enviar formulario
const registro = document.getElementById("registro");

// Evento click para mostrar la contraseña
let click = false;
viewPassword.addEventListener("click",function(){
    if(!click){
        password.type = 'text'
        click = true
    }else if(click){
        password.type = 'password'
        click = false
    }
})

//Evento click para registrar el usuario
registro.addEventListener("click", function(){
    // Validar inputs vacío
    if (user.value === "" && sede.value === "" && codigo.value === "" && password.value === ""){
        // Alerta de error
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Rellena el formulario para registrarte",
          });
    }else{
        // Inserta los datos en el db.json
        postUsers(user.value,sede.value,codigo.value,password.value,"est");
        // Redirige al inicio de sesión
        window.location = "index.html";
    }
})