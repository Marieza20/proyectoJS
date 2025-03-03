import { getForms,postForms,updateForms,deleteForms } from "../services/llamadosForms.js";

//Input del buscador
const buscarPalabra = document.getElementById("buscarPalabra");
// Botón para buscar
const buscar = document.getElementById("buscar");

// Invocar función para mostrar las solicitudes
mostrarForms();
// Función para mostrar las solicitudes
async function mostrarForms(){
    const datos = await getForms();
    for (let index = 0; index < datos.length; index++) {
        // Crea un tr para el body de la tabla
        let tr = document.createElement("tr");
        // Crea los td para el tr
        let p1 = document.createElement("td");
        let p2 = document.createElement("td");
        let p3 = document.createElement("td");
        let p4 = document.createElement("td");
        let p5 = document.createElement("td");
        let p6 = document.createElement("td");
        let p7 = document.createElement("td");
        let p8 = document.createElement("td");
        // Crea los botones para aprobar y rechazar
        let aprobar = document.createElement("i");
        let rechazar = document.createElement("i");
        // Inserta los datos en los td
        p1.innerText = datos[index].user;
        p2.innerText = datos[index].sede;
        p3.innerText = datos[index].salida;
        p4.innerText = datos[index].entrega;
        p5.innerText = datos[index].codigo;
        p6.innerHTML = datos[index].estado;
        aprobar.setAttribute("class","bx bx-check-circle")
        rechazar.setAttribute("class","bx bx-x-circle")
        // Insertar tr en el body de la tabla
        mostrar.appendChild(tr);
        // Insertar los datos en el tr
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

        // Evento click al botón de aprobar solicitudes
        aprobar.addEventListener("click",function(){
            // Inserta la palabra en el td de estado
            p6.textContent = "Aprobado";
            // Actualiza el db.json
            updateForms(p3.textContent,p4.textContent,"on",p6.textContent,p1.textContent,p2.textContent,p5.textContent,datos[index].id);
        })
        // Evento click al botón de rechazar solicitudes
        rechazar.addEventListener("click",function(){
            // Inserta la palabra en el td de estado
            p6.textContent = "Rechazado";
            // Actualiza el db.json
            updateForms(p3.textContent,p4.textContent,"on",p6.textContent,p1.textContent,p2.textContent,p5.textContent,datos[index].id);
        })
        
        // Evento click al botón de buscar
        buscar.addEventListener("click",function(){
            // Variable para el valor del input
            let buscando = buscarPalabra.value
            // Elimina todas las solicitudes de la tabla
            mostrar.removeChild(tr);
            // Filtra la busqueda
            datos.filter(function(){
                // Validación del usuario
                if (buscando.includes(datos[index].user)) {
                    // Si coincide muestra el dato
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
                // Validación de la sede
                }else if (buscando.includes(datos[index].sede)) {
                    // Si coincide muestra el dato
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
                // Validación de la fecha de salida
                }else if (buscando.includes(datos[index].salida)) {
                    // Si coincide muestra el dato
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
                // Validación de la fecha de entrega
                }else if (buscando.includes(datos[index].entrega)) {
                    // Si coincide muestra el dato
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
                // Validación del código de laptop
                }else if (buscando.includes(datos[index].codigo)) {
                    // Si coincide muestra el dato
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
                // Validación del estado de las solicitudes
                }else if (buscando.includes(datos[index].estado)) {
                    // Si coincide muestra el dato
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
                }
            })
        })
    }
}
