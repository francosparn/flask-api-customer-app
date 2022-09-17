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