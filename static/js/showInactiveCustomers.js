// Show inactive customers
async function showInactiveCustomers(){
    let url = URL_API + 'customers/inactive';

    let response = await fetch(url, {
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    });

    customer = await response.json();

    let html = '';

    let inactiveCustomers = `<p class="inactive-customers animate__animated animate__slideInDown">${customer.total}</p>`;

    html = html + inactiveCustomers;

    document.querySelector('#inactive-customers').outerHTML = html;
}