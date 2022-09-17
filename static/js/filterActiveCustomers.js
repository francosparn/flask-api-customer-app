// Filter active customers
async function filterActiveCustomers(){
    let url = URL_API + 'customers/search/active';

    let response = await fetch(url, {
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    });

    customers = await response.json();

    notResultMessage();
}