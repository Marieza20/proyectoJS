import { getUsers,postUsers,updateUsers,deleteUsers } from "../services/llamadosUsers.js";
import { getForms,postForms,updateForms,deleteForms } from "../services/llamadosForms.js";
//Lista para mostrar datos del usuario
const nameUser = document.getElementById("nameUser");
const nameSede = document.getElementById("nameSede");
const nameCodigo = document.getElementById("nameCodigo");
const namePassword = document.getElementById("namePassword");
const editInfo = document.getElementById("editInfo");
const eliminarUser = document.getElementById("eliminarUser");
// Inputs para editar el usuario
const sede = document.getElementById("sede");
const codigo = document.getElementById("codigo");
const password = document.getElementById("password");
// Botón para mostrar contraseña
const viewPassword = document.getElementById("viewPassword");
// Botón para actualizar
const actualizar = document.getElementById("actualizar");
// Para mostrar nombre de usuario en el nav
const avatar = document.getElementById("avatar");

// Muestra el nombre de usuario en el nav
avatar.innerHTML = localStorage.getItem("user");

// Invocar función para mostrar el usuario
mostrarUser();

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

function recargar() {
    location.reload();
}

// Función para mostrar el usuario
async function mostrarUser() {
    const datos = await getUsers();
    for (let index = 0; index < datos.length; index++) {
        // Valida el usuario logueado con el db.json
        if (datos[index].user === localStorage.getItem("user")) {
            // Crea los párrafos
            let pUser = document.createElement("p");
            let pSede = document.createElement("p");
            let pCod = document.createElement("p");
            let pPass = document.createElement("p");
            // Inserta los datos en los párrafos
            pUser.innerHTML = datos[index].user;
            pSede.innerHTML = datos[index].sede;
            pCod.innerHTML = datos[index].codigo;
            pPass.innerHTML = datos[index].password;
            // Insertar los datos en el html
            nameUser.appendChild(pUser);
            nameSede.appendChild(pSede);
            nameCodigo.appendChild(pCod);
            namePassword.appendChild(pPass);
            
            // Evento click para editar información del usuario
            editInfo.addEventListener("click",function() {
                // Muestra los datos existentes en los inputs
                sede.value = datos[index].sede;
                codigo.value = datos[index].codigo;
                password.value = datos[index].password;
    
                // Evento click para actualizar usuario
                actualizar.addEventListener("click",function(){
                    // Actualiza datos del usuarios en el db.json
                    updateUsers(datos[index].user,sede.value,codigo.value,password.value,datos[index].typeUser,datos[index].id);
                    // Actualiza datos en el localstorage
                    localStorage.setItem("codigo",codigo.value);
                    localStorage.setItem("sede",sede.value);
                    // Invocar función para actualizar datos de las solicitudes del usuario en el db.json
                    actualizarForm();
                    Swal.fire({
                        title: "Actualizado con exito!",
                        icon: "success"
                      });
                    setTimeout(recargar, 1000);
                })
            })
        }


        // Evento click para eliminar el usuario
        eliminarUser.addEventListener("click",function() {
            // SweetAlert para confirmar
            Swal.fire({
                title: "¿Seguro que quieres eliminar el usuario?",
                showCancelButton: true,
                confirmButtonText: "Sí",
            }).then((result) => {
                if (result.isConfirmed) {
                    // Elimina el usuario en el db.json
                    deleteUsers(datos[index].id);
                    // Invocar función para eliminar las solicitudes del usuario en el db.json
                    eliminarForm();
                    // Redirige a iniciar sesión
                    window.location="../index.html";
                }
            });
        })
    }
}

// Función para actualizar las solicitudes del usuario
async function actualizarForm() {
    const datos = await getForms();
    for (let index = 0; index < datos.length; index++){
        // Valida el usuario logueado con el db.json
        if (datos[index].user === localStorage.getItem("user")) {
            // Actualiza las solicitudes en el db.json
            updateForms(datos[index].salida,datos[index].entrega,datos[index].acepto,datos[index].estado,datos[index].user,sede.value,codigo.value,datos[index].id);        
        }
    }
}

// Función para eliminar las solicitudes del usuario
async function eliminarForm() {
    const datos = await getForms();
    for (let index = 0; index < datos.length; index++){
        // Valida el usuario logueado con el db.json
        if (datos[index].user === localStorage.getItem("user")) {
            // Elimina las solicitudes en el db.json
            deleteForms(datos[index].id);
        }
    }
}