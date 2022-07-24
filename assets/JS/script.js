/*Pseudo Code

Add current day to the top of the page
Add rows and columns to range from 8AM to 5PM
color Coordinate the time it currently
time behind should be colored grey
current time block should be red
future time block should be green
*/

/*Time Slots*/
var today = new Date();
var event = $("#textarea");

//Create an array that includes all times so they can be added to local storage {key,value}

let times = [
  { time: "9am", event: "" },
  { time: "10am", event: "" },
  { time: "11am", event: "" },
  { time: "12pm", event: "" },
  { time: "1pm", event: "" },
  { time: "2pm", event: "" },
  { time: "3pm", event: "" },
  { time: "4pm", event: "" },
  { time: "5pm", event: "" },
];

let momentTime = moment().format("LT");
/*Current Date*/
var myDate = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").html(myDate);

//Adding background colors based on the current time

function currentTime() {
  $("event").each(function () {
    var currentHour = parseInt(moment().format("H"));
    $(this).remove("past present future");
    if (times == currentHour) {
      $(this).addClass("present");
    } else if (times < currentHour) {
      $(this).addClass("past");
    } else {
      $(this).addClass("future");
    }
  });
}

// adding a button with the save function to local storage
$(".saveBtn").on("click", function () {
  var hour = $(this).siblings(".hour").text();
  var userContent = $(this).siblings("textarea").val();

  localStorage.setItem(hour, userContent);
});
// function currentTime() {
//   if (times == momentTime) className = "present";
//   else if (times < momentTime) className = "past";
//   else className = "future";
// }

// times.forEach((time) => {
//   var newTime = time.replace(/[^0-9]/g, "");

//   momentTime = momentTime.split(":")[0];
//   let className = "";
//   if (time == momentTime) className = "present";
//   else if (time < momentTime) className = "past";
//   else className = "future";
//   console.log(momentTime, newTime);

//   let form = document.createElement("form");
//   form.setAttribute("id", time);
//   form.classList.add("row", className);
//   form.innerHTML = `<span class="col-2">${time}</span><textarea class="col-9"></textarea><button type="submit" class="col-1"><img src="https://img.icons8.com/ios/50/000000/save--v1.png"/></button>`;
//   document.querySelector(".container").appendChild(form);
// });

// let store = JSON.stringify(localStorage.getItem("time"));
// let timeData = [];
// console.log(store);
// if (store === null) store = localStorage.setItem("time", JSON.stringify([]));
// else timeData = store;

// // console.log();

// function Save(event) {
//   var textinput = $(this).parent().attr("id");

//   localStorage.setItem(moment().format("MMMM Do YYYY") + times);
// }
