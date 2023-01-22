let dataset = [
    { vak: "Nederlands", cijfer: "G"},
    { vak: "Burgerschap", cijfer: "V"},
    { vak: "Engels", cijfer: 7.6},
    { vak: "Rekenen", cijfer: "G"},
    { vak: "Realiseren", cijfer: "G"},
    { vak: "Praktijk", cijfer: "G"}
];
  
// Generate table head.
function generateTableHead(table, data) {
    // Inserts a new row into the table.
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        // Create the th element.
        let th = document.createElement("th");
        // Creates a text node with the given key.
        let text = document.createTextNode(key);
        // Appends a text and a row to the row.
        th.appendChild(text);
        row.appendChild(th);
    }
}
  
// Generates a table.
function generateTable(table, data) {
    // Insert all elements in the table into the table.
    for (let element of data) {
        let row = table.insertRow();
        // Inserts multiple cells at once.
        for (key in element) {
            // Creates a text node and appends it to the row
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}
  
// Query the table selector.
let table = document.querySelector("table");
// Returns the keys of the first dataset.
let data = Object.keys(dataset[0]);
generateTableHead(table, data);
generateTable(table, dataset);