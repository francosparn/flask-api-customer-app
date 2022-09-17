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