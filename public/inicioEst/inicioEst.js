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

mostrarForms();
function validar() {
    if (salida.value === "" && entrega.value === "" && acepto.value === "") {
        return false;
    }else{
        return true;
    }
}

function validarCheckbox(){
    let isChecked = document.getElementById('acepto').checked;
    if(isChecked){
        return true;
    }else{
        Swal.fire("Acepta los terminos y condiciones para continuar");
        return false;
    }
}

enviar.addEventListener("click",function(){
    if (validar() === true && validarCheckbox() === true) {
        let codigo = localStorage.getItem("codigo");
        let sede = localStorage.getItem("sede");
        let user = localStorage.getItem("user");
        postForms(salida.value,entrega.value,acepto.value,"En espera",user,sede,codigo);
        location.reload()
    }
})

async function mostrarForms() {
    const datos = await getForms();
    for (let index = 0; index < datos.length; index++) {
        if (datos[index].user === localStorage.getItem("user")) {
            let tr = document.createElement("tr");
            let p1 = document.createElement("td");
            let p2 = document.createElement("td");
            let p3 = document.createElement("td");
            let p4 = document.createElement("td");
            let p5 = document.createElement("td");
            let eliminar = document.createElement("i");

            p1.innerText = datos[index].salida;
            p2.innerText = datos[index].entrega;
            p3.innerText = datos[index].codigo;
            p4.innerText = datos[index].estado;
            eliminar.setAttribute("class","bx bx-trash");

            mostrar.appendChild(tr);
            tr.appendChild(p1);
            tr.appendChild(p2);
            tr.appendChild(p3);
            tr.appendChild(p4);
            p5.appendChild(eliminar);
            tr.appendChild(p5);
        
            eliminar.addEventListener("click",function() {
                Swal.fire({
                    title: "¿Seguro que quieres eliminar la solicitud?",
                    showCancelButton: true,
                    confirmButtonText: "Sí",
                }).then((result) => {
                    if (result.isConfirmed) {
                        deleteForms(datos[index].id);
                        location.reload();
                    }
                });
            })
        }
    }
}