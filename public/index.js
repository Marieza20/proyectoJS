import { getUsers } from "./services/llamadosUsers.js";

//Inputs del formulario
const user = document.getElementById("user");
const password = document.getElementById("password");
// Botón para mostrar contraseña
const viewPassword = document.getElementById("viewPassword");
//Botón para inciar sesión
const acceso = document.getElementById("acceso");

// Invocar función para loguearse
ingresar()
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

// Función para loguearse
async function ingresar() {
    const datos = await getUsers();
    for (let index = 0; index < datos.length; index++){
        // Evento click para iniciar sesión
        acceso.addEventListener("click",function(){ 
            // Valida los inputs vacíos
            if (user.value === "" && password.value === ""){
                // Alerta de error  
                Swal.fire({
                    title: "Ingresa usuario y contraseña para acceder",
                    icon: "error",
                    draggable: true
                  });
            }else{
                // Valida los datos ingresados en el db.json
                if (user.value === datos[index].user && password.value === datos[index].password){
                    // Inserta los valores en el localstorage
                    localStorage.setItem("codigo",datos[index].codigo);
                    localStorage.setItem("sede",datos[index].sede);
                    localStorage.setItem("user",user.value);
                    // Valida si el tipo de usuario es estudiante
                    if (datos[index].typeUser === "est") {
                        // Redirige a la página de estudiantes
                        window.location="inicioEst/inicioEst.html";
                    }else{
                        // Redirige a la página de administradores
                        window.location="inicioAdmin/inicioAdmin.html";
                    }
                }else{
                    // Alerta de error
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