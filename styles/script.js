let todaysDay = document.getElementById("currentDay")
todaysDay.innerText = moment().format("MMM Do YY");
let currentHour = moment().hour();
(".row time-block").each(function(){
    if (listHour < currentHour){
        $(this).find(".description").addClass("past");
    }else if(listHour == currentHour){
        $(this).find(".description").addClass("present");
    }else{
        $(this).find(".description").addClass("future");
     }
});