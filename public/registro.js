import { postUsers } from "./services/llamadosUsers.js";

const user = document.getElementById("user");
const sede = document.getElementById("sede");
const codigo = document.getElementById("codigo");
const password = document.getElementById("password");
const registro = document.getElementById("registro");

function validar() {
    if (user.value === "" && sede.value === "" && codigo.value === "" && password.value === "") {
        return false;
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ingresa un usuario y contraseña para registrarse",
          });
    }else{
        return true;
    }
}

registro.addEventListener("click", function(){
    if (validar() === true) {
        postUsers(user.value,sede.value,codigo.value,password.value,"est");
        window.location = "index.html";
    }
})