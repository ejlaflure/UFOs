// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Function for creating the table in HTML
function buildTable(data) {
    // Clear out any existing data
    tbody.html("");
    // Loop through all objects in the array and adding thme to the table.
    data.forEach((dataRow) => {
        // Append a row to the HTML table
        let row = tbody.append("tr");
        // Loop through each field in the dataRow
        Object.values(dataRow).forEach((val) => {
            // Add each value as a table cell (td)
            let cell = row.append("td");
            // Add each value to a cell
            cell.text(val);
        });
    });
}