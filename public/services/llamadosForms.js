async function getForms() {
    try {
        const response = await fetch('http://localhost:3001/forms', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching forms');
        }

        const forms = await response.json();
        return forms;
    } catch (error) {
        console.error('Error fetching forms:', error);
        throw error;
    }
}

export { getForms };


//////////LLAMADO POST//////////
async function postForms(salida,entrega,acepto,estado,user,sede,codigo) {
    try {
        const formData = {
            salida,
            entrega,
            acepto,
            estado,
            user,
            sede,
            codigo
        };

        const response = await fetch("http://localhost:3001/forms", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        return await response.json();
    } catch (error) {
        console.error('Error posting form:', error);
        throw error;
    }
}

export{ postForms }


//////////////LLAMADO UPDATE/////////////
async function updateForms(salida,entrega,acepto,estado,user,sede,codigo,id) 
{
    try {
        const formData = { 
            salida,
            entrega,
            acepto,
            estado,
            user,
            sede,
            codigo
        };

        const response = await fetch("http://localhost:3001/forms/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        return await response.json();
    } catch (error) {
        console.error('Error update form:', error);
        throw error;
    }
}

export{ updateForms }


//////////////LLAMADO DELETE/////////////
async function deleteForms(id) {
    try {
        const response = await fetch(`http://localhost:3001/forms/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting form with id ${id}`);
        }

        return { message: `Form with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting form:', error);
        throw error;
    }
}

export { deleteForms };