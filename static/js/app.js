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

// Keep track of all filters
let filters = {};

// Function for pulling key and values for filters 
function handleChange() {
    // Select the input bars that contain a filter input
    let inputedElement = d3.select(this);
    // Grab the value of the input and trim it so spaces don't affect the function
    let filterValue = inputedElement.property("value").trim();
    // Grab the id key of the input
    let filterId = inputedElement.attr("id");
    // Print in console to confirm if the correct values and keys are being pulled
    console.log(filterValue, filterId);
    // Add input values to filters or delete old values if no new inputs are avaliable
    if (filterValue) {
        filters[filterId] = filterValue
    }
    else {
        delete filters[filterId]
    };
    // Print filters to confirm if/else statment functioned correctly
    console.log(filters);
    // Run filterTable function
    filterTable();
};

// Function for applying filters 
function filterTable() {
    // Set the filteredData to the tableData
    let filteredData = tableData;
    // Loop through all of the filters and keep any data that matches the filter values
    // print values to ensure they were assigned from the filter variable correctly
    Object.entries(filters).forEach(([key, value]) => {
        console.log(value);
        filteredData = filteredData.filter(row => row[key] === value);
    });
    // Rebuild the table using the filtered Data
    buildTable(filteredData);
};

// Fuction for clearing the filters
function clearFilters() {
    // Select all input bars and set them to an empty string
    d3.selectAll("input").property("value", "");
    // Set filters variable to an empty object
    filters = {};
    // Build original table
    buildTable(tableData);
};

// Event listening for changes to each filter's input bar
d3.selectAll("input").on("change", handleChange);

// Event tied to clear filters button in HTML
d3.selectAll("#filter-btn").on("click", clearFilters);

// Build the table when the page loads
buildTable(tableData);