// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// link day.js API
dayjs().format();
var currentHour = dayjs().hour();
var currentDay = $("#currentDay")

$(document).ready(function() {
  var hourEl = $(".time-block");
  var saveButton = $("button");
  var userInput = $("textarea");

  // Add a listener for click events on the save button.
  saveButton.on("click", function(event) {
    event.preventDefault();
    // Save the user input to localStorage with the parent hour ID saved in the description.
    var timeID = $(this)
      .closest(hourEl)
      .attr('id');
    userInput = $("#" + timeID).find(userInput).val();
    localStorage.setItem(timeID, userInput);
  });
  
  // Change class of each time block by checking the ID against the current hour
  hourEl.each(function() {
    // set blockHour to an integer by parsing the string held in the html time-block ID
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    // clear the div's class
    $(this).removeClass("past present future");
    // set the class of the block by checking the blockHour against the current hour
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else if (blockHour > currentHour) {
      $(this).addClass("future");
    };

    var savedData = localStorage.getItem($(this).attr("id"));
    if (savedData) {
      $(this).find("textarea").val(savedData);
    };
  });

  currentDay.text(dayjs().format("MMMM D, YYYY"))
});
