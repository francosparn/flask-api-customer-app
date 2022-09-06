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

    let totalCustomers = `
        <p class="total-customers animate__animated animate__slideInDown">${customer.total}</p>
    `;

    html = html + totalCustomers;

    document.querySelector('#total-customers').outerHTML = html;
}

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

    let lastCustomer = `
        <p class="last-customer animate__animated animate__slideInDown">${customer.firstname} ${customer.lastname}</p>
    `;

    html = html + lastCustomer;

    document.querySelector('#last-customer').outerHTML = html;
}

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

    let activeCustomers = `
        <p class="active-customers animate__animated animate__slideInDown">${customer.total}</p>
    `;

    html = html + activeCustomers;

    document.querySelector('#active-customers').outerHTML = html;
}

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

    let inactiveCustomers = `
        <p class="inactive-customers animate__animated animate__slideInDown">${customer.total}</p>
    `;

    html = html + inactiveCustomers;

    document.querySelector('#inactive-customers').outerHTML = html;
}

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

    let html = '';

    for(customer of customers){
        let row = `
            <tr class="animate__animated animate__fadeInUp">
                <th scope="row"><img src="../static/img/profile.png" class="profile-min" alt="User" /></th>
                <td>${customer.firstname}</td>
                <td>${customer.lastname}</td>
                <td>${customer.email}</td>
                <td>${customer.phone}</td>
                <td>${customer.passport}</td>
                <td>${customer.address}</td>
                <td>${customer.gender}</td>
                <td><span class="state" id="estado">${customer.state}</span></td>
                <td>
                    <button onClick="viewCustomer(${customer.id})" class="btn-view" data-bs-toggle="modal" data-bs-target="#modalUser">
                        <img src="../static/img/view.png" alt="View" />
                    </button>
                    <button onClick="editCustomer(${customer.id})" class="btn-edit" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img src="../static/img/edit.png" alt="Edit" />
                    </button>
                    <button onClick="questionDeleteCustomer(${customer.id})" class="btn-delete">
                        <img src="../static/img/delete.png" alt="Delete" />
                    </button>
                </td>
            </tr>
        `;
        
        html = html + row
    }
    document.querySelector('#customers > tbody').outerHTML = html;
}

// View customer profile
async function viewCustomer(id){
    let url = URL_API + 'customers/' + id;

    let response = await fetch(url, {
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    });

    customer = await response.json();

    let html = '';

    let modalProfile = `
        <div class="row">
            <div class="col-md-5 text-center">
                <img src="../static/img/profile.png" class"img-fluid" alt="User" />
                <h4 class="mt-3">${customer.firstname} ${customer.lastname}</h4>
                <button onClick="editCustomer(${customer.id})" class="btn-edit-profile mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit Profile</button>
            </div>
            <div class="col-md-7">
                <label>FIRST NAME</label>
                    <p>${customer.firstname}</p>
                <label>LAST NAME</label>
                    <p>${customer.lastname}</p>
                <label>EMAIL</label>
                    <p>${customer.email}</p>
                <label>PHONE</label>
                    <p>${customer.phone}</p>
                    <label>PASSPORT</label>
                    <p>${customer.passport}</p>
                <label>ADDRESS</label>
                    <p>${customer.address}</p>
                <label>GENDER</label>
                    <p>${customer.gender}</p>
                <label>STATE</label>
                    <p><span class="state">${customer.state}</span></p>
            </div>
        </div>
    `;

    html = html + modalProfile;

    document.querySelector('#modal-profile').innerHTML = html;
}

// Edit customer
function editCustomer(id){
    // Find the values of the selected customer
    let customer = customers.find(x => x.id == id);

    // Insert values in form
    document.querySelector('#id').value = customer.id;
    document.querySelector('#firstname').value = customer.firstname;
    document.querySelector('#lastname').value = customer.lastname;
    document.querySelector('#email').value = customer.email;
    document.querySelector('#phone').value = customer.phone;
    document.querySelector('#passport').value = customer.passport;
    document.querySelector('#address').value = customer.address;
    document.querySelector('#gender').value = customer.gender;
    document.querySelector('#state').value = customer.state;
}

// Ask if you want to remove the customer
async function questionDeleteCustomer(id){
    // Alert message
    Swal.fire({
        title: 'Are you sure?',
        text: "If you press 'OK' the client will be removed",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#198754',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Removed!',
            'The client has been successfully deleted',
            'success'
            )
            // Run function
            deleteCustomer(id);
        }
    })
}

// Delete customer
async function deleteCustomer(id){
    let url = URL_API + 'customers/' + id

    await fetch(url, {
        "method": 'DELETE',
        "headers": {
            "Content-Type": 'application/json'
        }
    })
    
    // Run refresh
    refreshPage();
}

// Reset form
function resetForm(){
    document.querySelector('#id').value = '';
    document.querySelector('#firstname').value = '';
    document.querySelector('#lastname').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#phone').value = '';
    document.querySelector('#passport').value = '';
    document.querySelector('#address').value = '';
    document.querySelector('#gender').value = 'Select gender';
    document.querySelector('#state').value = 'Select state';
}

// Error alert message
function errorAlert(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'All fields on this form are required'
    });

    refreshPage();
}

// Event to save customer
let btnSaveCustomer = document.querySelector('#save-customer');
btnSaveCustomer.addEventListener('click', saveCustomer);

// Save customer
async function saveCustomer(){
    // Get form values
    let firstname = document.querySelector('#firstname').value;
    let lastname = document.querySelector('#lastname').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let passport = document.querySelector('#passport').value;
    let address = document.querySelector('#address').value;

    // Form validation
    if (firstname.trim() === "" || lastname.trim() === "" || email.trim() === "" || phone.trim() === "" || passport.trim() === "" || address.trim() === ""){
        return errorAlert();
    }

    let data = {
        "firstname": document.querySelector('#firstname').value,
        "lastname": document.querySelector('#lastname').value,
        "email": document.querySelector('#email').value,
        "phone": document.querySelector('#phone').value,
        "passport": document.querySelector('#passport').value,
        "address": document.querySelector('#address').value,
        "gender": document.querySelector('#gender').value,
        "state": document.querySelector('#state').value
    }

    let id = document.querySelector('#id').value;

    if(id != ""){
        data.id = id;
    }

    let url = URL_API + 'customers'

    await fetch(url, {
        "method": 'POST',
        // Convert to text
        "body": JSON.stringify(data),
        "headers": {
            "Content-Type": 'application/json'
        }
    });

    // Alert message
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'The client has been successfully added',
        showConfirmButton: false,
        timer: 1500
    });

    // Run refresh
    refreshPage();
}

// Refresh page
function refreshPage(){
    setTimeout(function() {
        window.location.reload();
    }, 1500);
}