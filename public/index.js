import { getUsers } from "./services/llamadosUsers.js";

const user = document.getElementById("user");
const password = document.getElementById("password");
const acceso = document.getElementById("acceso");


ingresar()
async function ingresar() {
    const datos = await getUsers();
    for (let index = 0; index < datos.length; index++) {
        acceso.addEventListener("click",function(){            
            if (user.value === datos[index].user && password.value === datos[index].password){
                if (datos[index].typeUser === "admin") {
                    window.location="inicio.html";
                }else{
                    window.location="inicioEst.html"
                }
            }
        })
    }
}