// Event to export customer table to Excel
const btnExport = document.querySelector('#btn-export-excel');
btnExport.addEventListener('click', downloadFile);

// Function to download table to Excel
function downloadFile(){
    TableToExcel.convert(document.querySelector("#customers"), {
        // Name of the file to export
        name: "customers.xlsx"
    });     
}