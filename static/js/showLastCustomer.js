// Show last customer
async function showLastCustomer(){
    let url = URL_API + 'customers/last-customer';

    let response = await fetch(url, {
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    });

    customer = await response.json();

    let html = '';
    let lastCustomer = `<p class="last-customer animate__animated animate__slideInDown">${customer.firstname} ${customer.lastname}</p>`;
    let empty = '<p class="last-customer animate__animated animate__slideInDown">-</p>';

    // Validate that the firstname is defined
    if(customer.firstname){
        // If the name is defined, it prints it on the screen
        html = html + lastCustomer;
        document.querySelector('#last-customer').outerHTML = html;
    }else{
        // If the name is not defined, it will print "-" on the screen
        html = html + empty;
        document.querySelector('#last-customer').outerHTML = html;
    }
}