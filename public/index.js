import { getUsers } from "./services/llamadosUsers.js";

const user = document.getElementById("user");
const password = document.getElementById("password");
const acceso = document.getElementById("acceso");

ingresar()
function validar() {
    if (user.value === "" && password.value === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ingresa tu usuario y contraseña para acceder",
          });
        return false;
    }else{
        return true;
    }
}
async function ingresar() {
    const datos = await getUsers();
    for (let index = 0; index < datos.length; index++) {
        acceso.addEventListener("click",function(){ 
            if (validar() === true) {
                if (user.value === datos[index].user && password.value === datos[index].password){
                    localStorage.setItem("user",user.value);
                    localStorage.setItem("sede",datos[index].sede);
                    localStorage.setItem("codigo",datos[index].codigo);
                    Swal.fire({
                        title: "Bienvenido",
                        text: "x",
                        icon: "success"
                      });
                    if (datos[index].typeUser === "admin") {
                        window.location="inicioAdmin/inicio.html";
                    }else{
                        window.location="inicioEst/inicioEst.html";
                    }
                }else{}
            }
        })
    }
}