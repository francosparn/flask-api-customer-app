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
    let state;

    // Validate customer status
    if(customer.state === 'Active'){
        state = '<span class="badge bg-success">Active</span>';
    } else{
        state = '<span class="badge bg-danger">Inactive</span>';
    }

    let modalProfile = `
        <div class="row">
            <div class="col-md-5 text-center">
                <img src="../static/img/profile.png" class"img-fluid" alt="User" />
                <h4 class="mt-3">${customer.firstname} ${customer.lastname}</h4>
                <button onClick="editCustomer(${customer.id})" class="btn-edit-profile mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit Profile</button>
            </div>
            <div class="col-md-7 customer-info">
                <label>First Name</label>
                    <p>${customer.firstname}</p>
                <label>Last Name</label>
                    <p>${customer.lastname}</p>
                <label>Email</label>
                    <p>${customer.email}</p>
                <label>Phone</label>
                    <p>${customer.phone}</p>
                    <label>Passport</label>
                    <p>${customer.passport}</p>
                <label>Address</label>
                    <p>${customer.address}</p>
                <label>Gender</label>
                    <p>${customer.gender}</p>
                <label>State</label>
                    <p>${state}</p>
            </div>
        </div>
    `;

    html = html + modalProfile;

    document.querySelector('#modal-profile').innerHTML = html;
}