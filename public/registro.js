import { postUsers } from "./services/llamadosUsers.js";

const user = document.getElementById("user");
const password = document.getElementById("password");
const registro = document.getElementById("registro");

function validar() {
    if (user.value === "" && password.value === "") {
        return false;
    }else{
        return true;
    }
}

registro.addEventListener("click", function(){
    if (validar() === true) {
        postUsers(user.value,password.value);
        location.reload();
        window.location = "index.html";
    }
})