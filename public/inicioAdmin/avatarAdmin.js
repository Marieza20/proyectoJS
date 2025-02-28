import { getUsers,postUsers,updateUsers,deleteUsers } from "../services/llamadosUsers.js";

const nameUser = document.getElementById("nameUser");
const nameSede = document.getElementById("nameSede");
const nameCodigo = document.getElementById("nameCodigo");
const namePassword = document.getElementById("namePassword");
const editInfo = document.getElementById("editInfo");
const eliminarUser = document.getElementById("eliminarUser");

mostrarUser();


async function mostrarUser() {
    const datos = await getUsers();
    for (let index = 0; index < datos.length; index++) {
        if (datos[index].user === localStorage.getItem("user")) {
            let pUser = document.createElement("p");
            let pSede = document.createElement("p");
            let pCod = document.createElement("p");
            let pPass = document.createElement("p");
    
            pUser.innerHTML = datos[index].user;
            pSede.innerHTML = datos[index].sede;
            pCod.innerHTML = datos[index].codigo;
            pPass.innerHTML = datos[index].password;
    
            nameUser.appendChild(pUser);
            nameSede.appendChild(pSede);
            nameCodigo.appendChild(pCod);
            namePassword.appendChild(pPass);
        }

        eliminarUser.addEventListener("click",function() {
            Swal.fire({
                title: "¿Seguro que quieres eliminar el usuario?",
                showCancelButton: true,
                confirmButtonText: "Sí",
            }).then((result) => {
                if (result.isConfirmed) {
                    deleteUsers(datos[index].id);
                    window.location="../index.html";
                }
            });
        })
    }
}


editInfo.addEventListener("click",function() {
    
})
