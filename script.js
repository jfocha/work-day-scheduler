// Current date
var currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").append(currentDate);

// Add list items
const timeArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
const hourNum = [9, 10, 11, 12, 13, 14, 15, 16, 17];

var makeRow = function(timeNow, isPast) {
    // Make a row container
    var row = $("<div id='" + timeNow + "'class='row'></div>");
    $(".container").append(row);

    // Make an hour
    var hourNow = $("<div class='hour col-sm-1'></div>").text(timeNow);

    // Make description
    var descriptionText = $("<div class='description col-sm-10'></div>");
    // if -- check time, change class
    if(check(isPast)) {
        $("#" + timeNow).addClass("past");
    } else {
        $("#" + timeNow).addClass("future");
    }
    if(check(isPast) && !check(isPast + 1)) {
        $("#" + timeNow).removeClass("past");
        $("#" + timeNow).addClass("present");
    }

    // Make button
    var submitButton = $("<div class='saveBtn col-sm-1'></div>");

    $("#" + timeNow).append(hourNow, descriptionText, submitButton);
}

for (let index = 0; index < timeArray.length; index++) {
    makeRow(timeArray[index], index);
}

function check(hour) {
    var now = moment();
    var hourToCheck = (now.day() !== 0)?hourNum[hour]:00;
    var dateToCheck = now.hour(hourToCheck).minute(30);
    
    return moment().isAfter(dateToCheck);
  }