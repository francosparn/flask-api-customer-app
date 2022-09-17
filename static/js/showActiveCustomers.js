// Show active customers
async function showActiveCustomers(){
    let url = URL_API + 'customers/active';

    let response = await fetch(url, {
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    });

    customer = await response.json();

    let html = '';

    let activeCustomers = `<p class="active-customers animate__animated animate__slideInDown">${customer.total}</p>`;

    html = html + activeCustomers;

    document.querySelector('#active-customers').outerHTML = html;
}