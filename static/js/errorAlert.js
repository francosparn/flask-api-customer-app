// Error alert message
function errorAlert(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'All fields on this form are required'
    });

    refreshPage();
}