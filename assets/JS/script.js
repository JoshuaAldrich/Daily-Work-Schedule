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
var today = new Date();
let times = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"]
times.forEach(time => {
    var newTime = time.replace(/[^0-9]/g,'');
    let momentTime = moment().format('LT'); 
    momentTime = momentTime.split(":")[0];
    let className = "";
    if(time == momentTime) className="present";
    else if (time < momentTime) className="past";
    else className="future";
    console.log(momentTime,newTime);
    
    
     
    let form = document.createElement("form");
    form.setAttribute("id", time );
    form.classList.add("row", className);
    form.innerHTML = `<span class="col-2">${time}</span><textarea class="col-9"></textarea><button type="submit" class="col-1"><img src="https://img.icons8.com/ios/50/000000/save--v1.png"/></button>`;
    document.querySelector(".container").appendChild(form);
});

let store = JSON.parse(localStorage.getItem("time"));
let timeData = [];
console.log(store);
if (store === null)store = localStorage.setItem("time", JSON.stringify([]));
else timeData = store;

console.log();

/*Current Date*/
var myDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").html(myDate);



console.log(myDate);

