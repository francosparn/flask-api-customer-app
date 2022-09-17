// Find all customers
async function searchCustomers(){
    let url = URL_API + 'customers';

    let response = await fetch(url, {
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    });

    customers = await response.json();

    structureHTML();
}