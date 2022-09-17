// Filter inactive customers
async function filterInactiveCustomers(){
    let url = URL_API + 'customers/search/inactive';

    let response = await fetch(url, {
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    });

    customers = await response.json();

    notResultMessage();
}