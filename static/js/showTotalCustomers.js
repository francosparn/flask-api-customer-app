// Show amount customers
async function showTotalCustomers(){
    let url = URL_API + 'customers/total';

    let response = await fetch(url, {
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    });

    customer = await response.json();

    let html = '';
    let totalCustomers = `<p class="total-customers animate__animated animate__slideInDown">${customer.total}</p>`;

    html = html + totalCustomers;

    document.querySelector('#total-customers').outerHTML = html;
}