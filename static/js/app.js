// Fires the event when the page loads
document.addEventListener('DOMContentLoaded', init);
const URL_API = 'http://localhost:3000/api/';

let customers = [];

// Initialization function
function init(){
    showLastCustomer();
    showTotalCustomers();
    showActiveCustomers();
    showInactiveCustomers();
    searchCustomers();
}

// Event to open modal
let btnAddCustomer = document.querySelector('#btn-add');
btnAddCustomer.addEventListener('click', add);

// Pressing the "Add Customer" button will reset the form fields
function add(){
    // Run form reset
    resetForm();
}