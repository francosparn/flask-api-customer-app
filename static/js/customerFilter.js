// Event to filter customers
const stateFilter = document.querySelector('#stateFilter');
stateFilter.addEventListener('change', customerFilter);

// Filter function
function customerFilter(){
    // Save the value of the select in a variable
    let result = stateFilter.value;

    if(result === 'Active'){
        return filterActiveCustomers();
    }else if(result === 'Inactive'){
        return filterInactiveCustomers();
    }else{
        document.querySelector('#not-result').innerHTML = "";
        return searchCustomers();
    }
}