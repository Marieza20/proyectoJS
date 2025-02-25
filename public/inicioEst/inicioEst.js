import { getForms,postForms } from "../services/llamadosForms.js";
import { getUsers } from "../services/llamadosUsers.js";

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

enviar.addEventListener("click",function(){

    if (validar() === true) {
        let user = localStorage.getItem("user");
        let sede = localStorage.getItem("sede");
        let codigo = localStorage.getItem("codigo");
        postForms(salida.value,entrega.value,acepto.value,"En espera",user,sede,codigo);
        location.reload();
    }
})

async function mostrarForms() {
    const datos = await getForms();
    for (let index = 0; index < datos.length; index++) {
        let tr = document.createElement("tr");
        let p1 = document.createElement("td");
        let p2 = document.createElement("td");
        let p3 = document.createElement("td");
        let p4 = document.createElement("td");
        let p5 = document.createElement("td");
        let p6 = document.createElement("td");

        p1.innerText = datos[index].user;
        p2.innerText = datos[index].sede;
        p3.innerText = datos[index].salida;
        p4.innerText = datos[index].entrega;
        p5.innerText = datos[index].codigo;
        p6.innerHTML = datos[index].estado;

        mostrar.appendChild(tr);
        tr.appendChild(p1);
        tr.appendChild(p2);
        tr.appendChild(p3);
        tr.appendChild(p4);
        tr.appendChild(p5);
        tr.appendChild(p6);
    }
}