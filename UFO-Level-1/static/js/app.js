// from data.js
var tableData = data;

// first, display data in the console log
console.log(data);

// select the table body
var tbody = d3.select("tbody");

// use forEach and anonymous function to initalize a table row and append cells with data
// before the table is filtered, we want to display all data
tableData.forEach(sighting => {
    var row = tbody.append("tr");
    row.append("td").text(sighting.datetime);
    row.append("td").text(sighting.city);
    row.append("td").text(sighting.state);
    row.append("td").text(sighting.country);
    row.append("td").text(sighting.shape);
    row.append("td").text(sighting.durationMinutes);
    row.append("td").text(sighting.comments);
  });

// filter table based on date entered ----------

// select the button
var button = d3.select("#filter-btn");

// select the form
var form = d3.select("#form");

// create event handlers 
button.on("click", filterTable);
form.on("submit", filterTable);

// create a function that will filter the table by date
function filterTable() {

  // prevent the page from reloading when we are entering data into the input field(s)
  d3.event.preventDefault();
  
  // the input element is the datetime informration
  var inputElement = d3.select("#datetime");

  // get the property value of the input element
  var inputValue = inputElement.property("value");

  // print the input element value to the console log
  console.log(inputValue);

  // filterr the data to include only the value the user enters
  var filteredData = tableData.filter(record => record.datetime === inputValue);

  // display the filtered data in the console log
  console.log(filteredData);

  // select the table body and clear the rows so only the filtered rows will be displayed
  var tbody = d3.select("tbody").html("");

  // append filtered data to the cells in the table body
  filteredData.forEach(sighting => {
    var row = tbody.append("tr");
    row.append("td").text(sighting.datetime);
    row.append("td").text(sighting.city);
    row.append("td").text(sighting.state);
    row.append("td").text(sighting.country);
    row.append("td").text(sighting.shape);
    row.append("td").text(sighting.durationMinutes);
    row.append("td").text(sighting.comments);

  });

};