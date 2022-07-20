/*Pseudo Code

Add current day to the top of the page
Add rows and columns to range from 8AM to 5PM
color Coordinate the time it currently
time behind should be colored grey
current time block should be red
future time block should be green
*/

/*Time Slots*/
var nine = $("#9am");
var ten = $("#10am");
var eleven = $("#11am");
var twelve = $("#12pm");
var one = $("#1pm");
var two = $("#2pm");
var three = $("#3pm");
var four = $("#4pm");
var five = $("#5pm");

/*Current Date*/
var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');

//jumbotron date
var Date = function() {
    $("#currentDay").html(currentDate);
}

