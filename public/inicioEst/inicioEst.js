import { getForms,postForms,updateForms,deleteForms } from "../services/llamadosForms.js";

// Inputs del form
const salida = document.getElementById("salida");
const entrega = document.getElementById("entrega");
// Checkbox
const acepto = document.getElementById("acepto");
// Botón enviar
const enviar = document.getElementById("enviar");
// Para imprimir datos
const mostrar = document.getElementById("mostrar");

// Invocar función para mostrar las solicitudes
mostrarForms();
// Validación de los inputs vacíos
function validar() {
    if (salida.value === "" && entrega.value === "" && acepto.value === "") {
        return false;
    }else{
        return true;
    }
}
// Validación del checkbox
function validarCheckbox(){
    let isChecked = document.getElementById('acepto').checked;
    if(isChecked){
        return true;
    }else{
        Swal.fire("Acepta los terminos y condiciones para continuar");
        return false;
    }
}

// Evento click del botón para crear solicitudes
enviar.addEventListener("click",function(){
    // Valida los inputs y el checkbox
    if (validar() === true && validarCheckbox() === true) {
        // Trae los datos del login
        let codigo = localStorage.getItem("codigo");
        let sede = localStorage.getItem("sede");
        let user = localStorage.getItem("user");
        // Inserta la solicitud en el d.json
        postForms(salida.value,entrega.value,acepto.value,"En espera",user,sede,codigo);
        // Recarga la página
        location.reload()
    }
})

// Función para mostrar las solicitudes
async function mostrarForms() {
    const datos = await getForms();
    for (let index = 0; index < datos.length; index++) {
        // Valida el usuario logueado con el db.json
        if (datos[index].user === localStorage.getItem("user")) {
            // Crea un tr para el body de la tabla
            let tr = document.createElement("tr");
            // Crea los td para el tr
            let p1 = document.createElement("td");
            let p2 = document.createElement("td");
            let p3 = document.createElement("td");
            let p4 = document.createElement("td");
            let p5 = document.createElement("td");
            // Crea los botones para eliminar
            let eliminar = document.createElement("i");
            // Inserta los datos en los td
            p1.innerText = datos[index].salida;
            p2.innerText = datos[index].entrega;
            p3.innerText = datos[index].codigo;
            p4.innerText = datos[index].estado;
            eliminar.setAttribute("class","bx bx-trash");
            // Insertar tr en el body de la tabla
            mostrar.appendChild(tr);
            // Insertar los datos en el tr
            tr.appendChild(p1);
            tr.appendChild(p2);
            tr.appendChild(p3);
            tr.appendChild(p4);
            p5.appendChild(eliminar);
            tr.appendChild(p5);
        
            // Evento click para eliminar solicitudes
            eliminar.addEventListener("click",function() {
                // SweetAlert para confirmar
                Swal.fire({
                    title: "¿Seguro que quieres eliminar la solicitud?",
                    showCancelButton: true,
                    confirmButtonText: "Sí",
                }).then((result) => {
                    if (result.isConfirmed) {
                        // Elimina la solicitud del db.json
                        deleteForms(datos[index].id);
                        // Recarga la página
                        location.reload();
                    }
                });
            })
        }
    }
}