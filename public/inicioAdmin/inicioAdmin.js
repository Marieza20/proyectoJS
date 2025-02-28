import { getForms,postForms,updateForms,deleteForms } from "../services/llamadosForms.js";

const buscarPalabra = document.getElementById("buscarPalabra");
const buscar = document.getElementById("buscar");

mostrarForms();
async function mostrarForms(){
    const datos = await getForms();
    for (let index = 0; index < datos.length; index++) {
        let tr = document.createElement("tr");
        let p1 = document.createElement("td");
        let p2 = document.createElement("td");
        let p3 = document.createElement("td");
        let p4 = document.createElement("td");
        let p5 = document.createElement("td");
        let p6 = document.createElement("td");
        let p7 = document.createElement("td");
        let p8 = document.createElement("td");
        let aprobar = document.createElement("i");
        let rechazar = document.createElement("i");

        p1.innerText = datos[index].user;
        p2.innerText = datos[index].sede;
        p3.innerText = datos[index].salida;
        p4.innerText = datos[index].entrega;
        p5.innerText = datos[index].codigo;
        p6.innerHTML = datos[index].estado;
        aprobar.setAttribute("class","bx bx-check-circle")
        rechazar.setAttribute("class","bx bx-x-circle")

        mostrar.appendChild(tr);
        tr.appendChild(p1);
        tr.appendChild(p2);
        tr.appendChild(p3);
        tr.appendChild(p4);
        tr.appendChild(p5);
        tr.appendChild(p6);
        tr.appendChild(p7);
        tr.appendChild(p8);
        p7.appendChild(aprobar);
        p8.appendChild(rechazar);

        aprobar.addEventListener("click",function(){
            p6.textContent = "Aprobado";
            updateForms(p3.textContent,p4.textContent,"on",p6.textContent,p1.textContent,p2.textContent,p5.textContent,datos[index].id);
        })
        rechazar.addEventListener("click",function(){
            p6.textContent = "Rechazado";
            updateForms(p3.textContent,p4.textContent,"on",p6.textContent,p1.textContent,p2.textContent,p5.textContent,datos[index].id);
        })
    }

    buscar.addEventListener("click",function(){
        datos.filter(function(){
            if (datos[index].user === buscarPalabra.value) {
                console.log("hola");
                
                let p = document.createElement("p");
                p.innerHTML = datos[index].user
            }
        })
    })
}
