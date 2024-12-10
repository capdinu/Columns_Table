// Select sliders and table container
const columnRange = document.getElementById("columnRange");
const rowRange = document.getElementById("rowRange");
const tableContainer = document.getElementById("tableContainer");

// Function to create table dynamically
function createTable(columns, rows)  
{
    let tableHTML = "<table border='1' style='border-collapse: collapse;'>";

    let cellNumber = 1; // Cell values start from 1

    // Inner Loop - Create Commands (Columns)
    for (let i = 0; i < rows; i++) {
        tableHTML += "<tr>"; // Create a new row
        for (let j = 0; j < columns; j++) {
            tableHTML += `<td style="padding: 20px; text-align: center;">${cellNumber}</td>`; // Add cells with numbers
            cellNumber++;
        }
        tableHTML += "</tr>"; // End the row
    }

    tableHTML += "</table>";

    // Render the table to the container
    tableContainer.innerHTML = tableHTML;
}

// Initial table state
const initialColumns = parseInt(columnRange.value);
const initialRows = parseInt(rowRange.value);
createTable(initialColumns, initialRows);


// Used to listen for events on a DOM element
columnRange.addEventListener("input", () => {
    createTable(parseInt(columnRange.value), parseInt(rowRange.value));
});

rowRange.addEventListener("input", () => {
    createTable(parseInt(columnRange.value), parseInt(rowRange.value));
});
