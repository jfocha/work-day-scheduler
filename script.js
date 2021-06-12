var pageContentEl = document.querySelector(".container");

// Current date
var currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").append(currentDate);

// Add list items
const timeArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
const hourNum = [9, 10, 11, 12, 13, 14, 15, 16, 17];

function check(hour) {
    var now = moment();
    var hourToCheck = (now.day() !== 0)?hourNum[hour]:00;
    if (!hourToCheck) {return true;}
    var dateToCheck = now.hour(hourToCheck).minute(00);

    return moment().isAfter(dateToCheck);
  }

var makeRow = function(timeNow, isPast) {
    // Make a row container
    var row = $("<div id='" + timeNow + "'class='row time-block'></div>");
    $(".container").append(row);

    // Make an hour
    var hourNow = $("<div class='hour col-sm-1'></div>").text(timeNow);

    // Make descriptions
    var descriptionText = $("<div class='description'><label for='" + isPast + "'></label><textarea id='" + isPast + "' name='label' rows='3' cols='111' /></div>");
    // if -- check time, change class
    if(check(isPast)) {
        $(document).ready(function(){
            $("#" + timeNow).children("div.description").addClass("past");
        });
    } else {
        $(document).ready(function(){
            $("#" + timeNow).children("div.description").addClass("future");
        });
    }
    if(check(isPast) && !check(isPast + 1)) {
        $(document).ready(function(){
            $("#" + timeNow).children("div.description").removeClass("past");
            $("#" + timeNow).children("div.description").addClass("present");
        });
    }

    // Make button
    var submitButton = $("<div data-id='" + isPast + "'class='saveBtn col-sm-1'></div>");

    $("#" + timeNow).append(hourNow, descriptionText, submitButton);
}
    
var saveSchedule = function (id) {
    var temp = document.getElementById(id); 
    console.log(temp.value);
    var timeBlockText = temp.value;
    localStorage.setItem("schedule" + id, timeBlockText);
}

var buttonHandler = function (event) {
    // get target element from event
    var targetEl = event.target;
    console.log(targetEl);
    if (targetEl.matches(".saveBtn")) {
        var id = targetEl.getAttribute("data-id");
        console.log(id);
        saveSchedule(id);
    }
};

var displaySchedule = function () {
    for (let i = 0; i < timeArray.length; i++) {
        var isThere = localStorage.getItem("schedule" + i);
        if (isThere) {
            document.getElementById(i).value = isThere;
        } 
    }
}

pageContentEl.addEventListener("click", buttonHandler);

for (let index = 0; index < timeArray.length; index++) {
    makeRow(timeArray[index], index);
}

displaySchedule();