//Current date decloration
var today = moment();

//Number to strings

//Query selectors for the time rows
var divNine = document.querySelector("#nineInput");
var divTen = document.querySelector("#tenInput");
var divEleven = document.querySelector("#elevenInput");
var divNoon = document.querySelector("#noonInput");
var divOne = document.querySelector("#oneInput");
var divTwo = document.querySelector("#twoInput");
var divThree = document.querySelector("#threeInput");
var divFour = document.querySelector("#fourInput");
var divFive = document.querySelector("#fiveInput");

//Add current date to the HTML header
$("#currentDay").text(today.format("dddd, MMMM Do"));

//Determine what hour in the day it is
var todayHourString = today.format("hh")
var todayHour = parseInt(todayHourString);

console.log("Today Hour: ", (todayHour));

function formatTime(){
    formatNine();
    formatTen();
    formatEleven();
    formatNoon();
    formatOne();
    formatTwo();
    formatThree();
    formatFour();
    formatFive();
}


function formatNine(){
    if(todayHour > 9)
    {
        divNine.setAttribute("class", "past");
    }
    else if (todayHour == 9){
        divNine.setAttribute("class", "present");
    }
    else if(todayHour < 9)
    {
        divNine.setAttribute("class", "future");
    } 
}

function formatTen(){
    if(todayHour > 10)
    {
        divTen.setAttribute("class", "past");
    }
    else if (todayHour == 10){
        divTen.setAttribute("class", "present");
    }
    else if (todayHour < 10) {
        divTen.setAttribute("class", "future");
    } 
}

function formatEleven(){
   
    if(todayHour > 11)
    {
        console.log(11)
        divEleven.setAttribute("class", "past");
    }
    else if (todayHour == 11){
        console.log(12)
        divEleven.setAttribute("class", "present");
    }
    else if (todayHour < 11)
    {
        console.log(13)
        divEleven.setAttribute("class", "future");
    } 
}

function formatNoon(){
    if(todayHour > 12)
    {
        divNoon.setAttribute("class", "past");
    }
    else if (todayHour == 12){
        divNoon.setAttribute("class", "present");
    }
    else{
        divNoon.setAttribute("class", "future");
    } 
}

function formatOne(){
    if(todayHour > 13)
    {
        divOne.setAttribute("class", "past");
    }
    else if (todayHour == 13){
        divOne.setAttribute("class", "present");
    }
    else{
        divOne.setAttribute("class", "future");
    } 
}

function formatTwo(){
    if(todayHour > 14)
    {
        divTwo.setAttribute("class", "past");
    }
    else if (todayHour == 14){
        divTwo.setAttribute("class", "present");
    }
    else{
        divTwo.setAttribute("class", "future");
    } 
}

function formatThree(){
    if(todayHour > 15)
    {
        divThree.setAttribute("class", "past");
    }
    else if (todayHour == 15){
        divThree.setAttribute("class", "present");
    }
    else{
        divThree.setAttribute("class", "future");
    } 
}

function formatFour(){
    if(todayHour > 16)
    {
        divFour.setAttribute("class", "past");
    }
    else if (todayHour == 16){
        divFour.setAttribute("class", "present");
    }
    else{
        divFour.setAttribute("class", "future");
    } 
}

function formatFive(){
    if(todayHour > 17)
    {
        divFive.setAttribute("class", "past");
    }
    else if (todayHour == 17){
        divFive.setAttribute("class", "present");
    }
    else{
        divFive.setAttribute("class", "future");
    } 
}


formatTime();
