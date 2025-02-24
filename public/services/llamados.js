async function getProducts() {
    try {
        const response = await fetch('http://localhost:3001/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching products');
        }

        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export { getProducts };

//////////LLAMADO POST//////////

async function postProducts(nombre,precio,stock) {
    try {
        const productData = { 
            nombre,
            precio,
            stock
        };

        const response = await fetch("http://localhost:3001/products", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting product:', error);
        throw error;
    }
}

export{postProducts}


//////////////LLAMADO UPDATE/////////////
async function updateProducts(nombre,precio,stock,id) 
{
    try {
        const productData = { 
            nombre, 
            precio,
            stock
        };

        const response = await fetch("http://localhost:3001/products/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });

        return await response.json();
    } catch (error) {
        console.error('Error update product:', error);
        throw error;
    }
}

export{updateProducts}


//////////////LLAMADO DELETE/////////////
async function deleteProducts(id) {
    try {
        const response = await fetch(`http://localhost:3001/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting product with id ${id}`);
        }

        return { message: `Product with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
}

export { deleteProducts };