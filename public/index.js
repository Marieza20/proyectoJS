import { getUsers } from "./services/llamadosUsers.js";

//Inputs del formulario
const user = document.getElementById("user");
const password = document.getElementById("password");
//Botón para inciar sesión
const acceso = document.getElementById("acceso");

ingresar()
async function ingresar() {
    const datos = await getUsers();
    for (let index = 0; index < datos.length; index++){
        acceso.addEventListener("click",function(){ 
            if (user.value === "" && password.value === ""){
                  Swal.fire({
                    title: "Ingresa usuario y contraseña para acceder",
                    icon: "error",
                    draggable: true
                  });
            }else{
                if (user.value === datos[index].user && password.value === datos[index].password){
                    if (datos[index].typeUser === "est") {
                        localStorage.setItem("codigo",datos[index].codigo);
                        localStorage.setItem("sede",datos[index].sede);
                        localStorage.setItem("user",user.value);
                        window.location="inicioEst/inicioEst.html";
                    }else{
                        window.location="inicioAdmin/inicio.html";
                    }
                }else{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Usuario o contraseña incorrectos",
                      });
                }
            }
        })
    }
}