// Edit customer
function editCustomer(id){
    let titleForm = document.querySelector('#modal-title-form');
    titleForm.innerHTML = 'Edit Customer';

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