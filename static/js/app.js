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
};

// Function for creating a couple of variables to hold the date data, both filtered and unfiltered.
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // Check to see if a date was entered and filter the and filter the data using that date.
    if (date) {
        // Apply `filter` to the table data, only keeping the rows where the `datetime` value matches the filter value.
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
    buildTable(filteredData);
};

// code tied to filter button in HTML
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);