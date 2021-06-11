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
    if (!hourToCheck) {return false;}
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
    var submitButton = $("<div class='saveBtn col-sm-1'></div>");

    $("#" + timeNow).append(hourNow, descriptionText, submitButton);
}
    
var buttonHandler = function (event) {
    // get target element from event
    var targetEl = event.target;
    console.log(targetEl);
    if (targetEl.matches(".description")) {
        
     /*    console.log("clicked");
        // get current text of p element
        var sel = $(this).parent();
        console.log(sel);
        var bar = sel.find('div').attr('id');
        console.log(bar);
        var text = $(sel).children("div.description").text();
          console.log(text);
      
        // replace p element with a new textarea
        var textInput = $("<p>").val(text);
        $(this).replaceWith(textInput); */

        // $(".description").on("click", "p", function() {
        //     console.log("clicked");
        //     // get current text of p element
        //     var text = $(this)
        //       .text()
        //       .trim();
          
        //     // replace p element with a new textarea
        //     var textInput = $("<p>").val(text);
        //     $(this).replaceWith(textInput);
          
        //     // auto focus new element
        //     // textInput.trigger("focus");
        //   });

    }
    // } else if (targetEl.matches("#correct")) {
    //     questionIndex++;
    //     getQuestion();
    // } else if (targetEl.matches("#wrong")) {
    //     sec = sec - 10;
    //     questionIndex++;
    //     getQuestion();
    // }
};

// $(".description").on("click", function() {
//     console.log("clicked");
//     // get current text of p element
//     var text = $(this)
//       .text()
//       .trim();
  
//     // replace p element with a new textarea
//     var textInput = $("<p>").val(text);
//     $(this).replaceWith(textInput);
  
//     // auto focus new element
//     // textInput.trigger("focus");
//   });

pageContentEl.addEventListener("click", buttonHandler);


// $(document).ready(function () {
    
//     $("#emp").click(function () {

//             // $(".description_p").text();
//                 // get current text of p element
//     var text = $(this).val();
//     //   .text()
//     //   .trim();
  
//     // replace p element with a new textarea
//     var textInput = $("#emp").val(text);
//     $(this).replaceWith(textInput);
  
//     // auto focus new element
//     // textInput.trigger("focus");

//     })
// });

// task text was clicked
// $(".description").on("click", "p", function() {
//     // get current text of p element
//     var text = $(this)
//       .text()
//       .trim();
  
//     // replace p element with a new textarea
//     var textInput = $("p").val(text);
//     $(this).replaceWith(textInput);
  
//     // auto focus new element
//     textInput.trigger("focus");
//   });

for (let index = 0; index < timeArray.length; index++) {
    makeRow(timeArray[index], index);
}






    // var descriptionP = $("<p>")
    // // .addClass("m-1")
    // .text();
    // $("#" + timeNow).children("div.description").append(descriptionP);