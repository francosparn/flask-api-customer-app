// Reset form
function resetForm(){
    let titleForm = document.querySelector('#modal-title-form');
    titleForm.innerHTML = 'Add Customer';
    
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