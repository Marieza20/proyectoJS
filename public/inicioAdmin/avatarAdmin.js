import { getUsers,postUsers,updateUsers,deleteUsers } from "../services/llamadosUsers.js";
//Lista para mostrar datos del usuario
const nameUser = document.getElementById("nameUser");
const nameSede = document.getElementById("nameSede");
const nameCodigo = document.getElementById("nameCodigo");
const namePassword = document.getElementById("namePassword");
const editInfo = document.getElementById("editInfo");
const eliminarUser = document.getElementById("eliminarUser");
// Inputs para editar el usuario
const user = document.getElementById("user");
const sede = document.getElementById("sede");
const codigo = document.getElementById("codigo");
const password = document.getElementById("password");
// Botón para mostrar contraseña
const viewPassword = document.getElementById("viewPassword");
// Botón para actualizar
const actualizar = document.getElementById("actualizar");

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
                user.value = datos[index].user;
                sede.value = datos[index].sede;
                codigo.value = datos[index].codigo;
                password.value = datos[index].password;
    
                // Evento click para actualizar usuario
                actualizar.addEventListener("click",function(){
                    // Actualiza datos del usuarios en el db.json
                    updateUsers(user.value,sede.value,codigo.value,password.value,datos[index].typeUser,datos[index].id);
                    // Recargar la página
                    location.reload();
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
                    // Redirige a iniciar sesión
                    window.location="../index.html";
                }
            });
        })
    }
}