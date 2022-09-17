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