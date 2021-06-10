// Current date
var currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").append(currentDate);

// Add list items
const timeArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4pm", "5PM"];

var makeRow = function(timeNow) {
    // Make a row container
    var row = $("<div class='row'></div>");
    $(".container").append(row);

    // Make an hour
    var hourNow = $("<div class='hour col-sm-1'></div>").text(timeNow);

    // Make description
    var descriptionText = $("<div class='description col-sm-10'></div>");
    // if -- check time, change class

    // Make button
    var submitButton = $("<div class='saveBtn col-sm-1'></div>");

    $(".row").append(hourNow, descriptionText, submitButton);
}

// for (let index = timeArray.length - 1; index >= 0; index--) {
// for (let i = 0; i < 2; i++) {
//     var rows = timeArray[i];
//     makeRow(rows);
// }
    makeRow(timeArray[1]);
    // makeRow(timeArray[2]);
    // makeRow(timeArray[3]);


/* var table = $("<table></table>");
$(".container").append(table);
var tableRow = $("<tr></tr>");
$("table").append(tableRow);
for (let index = timeArray.length - 1; index >= 0; index--) {
    var list = $("<td class='time-block hour'></td>").text(timeArray[index]);
    $("tr").append(list);
    
}
 */

/* // Add list items
const timeArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4pm", "5PM"];

//make one div class row
$(".container").append("<div class='row'></div>");

// make for loop of 2 to make columns
//make two div class columns. First is 1 width. Second is 11 width
var column1 = $("<div class='col-sm-3 hour'></div>");
$(".row").append(column1);
var timeContainer = $("<ul class='list-group list-group-flush'></ul>");
$(".hour").append(timeContainer);
for (let index = timeArray.length - 1; index >= 0; index--) {
    var list = $("<li class='list-group-item'></li>").text(timeArray[index]);
    $(".list-group-flush").append(list);
    
}

var column2 = $("<div class='col-sm-9 text'></div>");
$(".row").append(column2);
var listContainer = $("<ul id='list-text' class='list-group'></ul>");
$(".text").append(listContainer);
// List Items. Include buttons?
for (let index = timeArray.length - 1; index >= 0; index--) {
    var list = $("<li class='list-group-item list-group-item-success'></li>").text("success");
    $("#list-text").append(list);
    
}

 */