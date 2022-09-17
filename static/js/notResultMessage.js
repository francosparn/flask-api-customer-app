function notResultMessage(){
    let message = '<p class="not_result_message animate__animated animate__slideInDown">No results available</p>';
    
    if(customers.length > 0){
        structureHTML();
        // If there are customers, the message is hidden
        document.querySelector('#not-result').innerHTML = "";
    }else{
        // If there are no customers, a message is displayed
        document.querySelector('#not-result').innerHTML = message;
        document.querySelector('#customers > tbody').style.display = "none";
    }
}