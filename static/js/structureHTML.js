// HTML structure of the table body
function structureHTML(){
    let html = '';
    let state;

    for(customer of customers){ 
        // Validate customer status
        if(customer.state === 'Active'){
            state = '<span class="badge bg-success">Active</span>';
        }else{
            state = '<span class="badge bg-danger">Inactive</span>';
        }

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
                <td>${state}</td>
                <td>
                    <button onClick="viewCustomer(${customer.id})" class="btn-view" data-bs-toggle="modal" data-bs-target="#modalUser" data-toggle="tooltip" data-placement="right" title="View Customer">
                        <img src="../static/img/view.png" alt="View" />
                    </button>
                    <button onClick="editCustomer(${customer.id})" class="btn-edit" data-bs-toggle="modal" data-bs-target="#exampleModal" data-toggle="tooltip" data-placement="right" title="Edit Customer">
                        <img src="../static/img/edit.png" alt="Edit" />
                    </button>
                    <button onClick="questionDeleteCustomer(${customer.id})" class="btn-delete" data-toggle="tooltip" data-placement="right" title="Delete Customer">
                        <img src="../static/img/delete.png" alt="Delete" />
                    </button>
                </td>
            </tr>
        `;
        html = html + row;
    }
    document.querySelector('#customers > tbody').outerHTML = html;
}

