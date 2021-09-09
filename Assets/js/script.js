//Current date decloration
var today = moment();

//local schedule
var localSchedule = [];

//Save buttons
var nineSaveButtonClick = document.querySelector("#nineSave");
var tenSaveButtonClick = document.querySelector("#tenSave");
var eleveneSaveButtonClick = document.querySelector("#elevenSave");
var noonSaveButtonClick = document.querySelector("#noonSave");
var oneSaveButtonClick = document.querySelector("#oneSave");
var twoSaveButtonClick = document.querySelector("#twoSave");
var threeSaveButtonClick = document.querySelector("#threeSave");
var fourSaveButtonClick = document.querySelector("#fourSave");
var fiveSaveButtonClick = document.querySelector("#fiveSave");

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

//Text input fields updated with what's in storage
var textNine = document.getElementById("nineInput");
var textTen = document.getElementById("tenInput");
var textEleven = document.getElementById("elevenInput");
var textNoon = document.getElementById("noonInput");
var textOne = document.getElementById("oneInput");
var textTwo = document.getElementById("twoInput");
var textThree = document.getElementById("threeInput");
var textFour = document.getElementById("fourInput");
var textFive = document.getElementById("fiveInput");

//Add current date to the HTML header
$("#currentDay").text(today.format("dddd, MMMM Do"));

//Determine what hour in the day it is
var todayHourString = today.format("HH")
var todayHour = parseInt(todayHourString);

//Runs all of the row format functions
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

//Row format functions for past, present, future
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
        divEleven.setAttribute("class", "past");
    }
    else if (todayHour == 11){
        divEleven.setAttribute("class", "present");
    }
    else if (todayHour < 11)
    {
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

//Save button functiont that will update the global array with what has been added then push that global array to local storage
nineSaveButtonClick.addEventListener("click", function(){

    console.log("Test9 save buttons");
    let niner = document.getElementById("nineInput").value;

    localSchedule[0] = niner

    save(localSchedule);
    load();
});

tenSaveButtonClick.addEventListener("click", function(){

    console.log("Test10 save buttons");
    let tenner = document.getElementById("tenInput").value;
    
    localSchedule[1] = tenner

    save(localSchedule);
    load();
});

eleveneSaveButtonClick.addEventListener("click", function(){

    console.log("Test11 save buttons");
    let dub = document.getElementById("elevenInput").value;
    
    localSchedule[2] = dub

    save(localSchedule);
    load();
});

noonSaveButtonClick.addEventListener("click", function(){

    console.log("Test12 save buttons");
    let nooner = document.getElementById("noonInput").value;
    
    localSchedule[3] = nooner

    save(localSchedule);
    load();

});

oneSaveButtonClick.addEventListener("click", function(){

    console.log("Test1 save buttons");
    let uno = document.getElementById("oneInput").value;
    
    localSchedule[4] = uno

    save(localSchedule);
    load();

});

twoSaveButtonClick.addEventListener("click", function(){

    console.log("Test2 save buttons");
    let dos = document.getElementById("twoInput").value;
    
    localSchedule[5] = dos

    save(localSchedule);
    load();
});

threeSaveButtonClick.addEventListener("click", function(){

    console.log("Test3 save buttons");
    let tres = document.getElementById("threeInput").value;
    
    localSchedule[6] = tres

    save(localSchedule);
    load();

});

fourSaveButtonClick.addEventListener("click", function(){

    console.log("Test4 save buttons");
    let quatro = document.getElementById("fourInput").value;
    
    localSchedule[7] = quatro

    save(localSchedule);
    load();

});

fiveSaveButtonClick.addEventListener("click", function(){

    console.log("Test5 save buttons");
    let fiver = document.getElementById("fiveInput").value;
    
    localSchedule[8] = fiver

    save(localSchedule);
    load();

});

//Save the new version of the local schedule
function save(data){
    var array = JSON.parse(localStorage.getItem("calendar")) || [];
    array = data;
  
    localStorage.setItem("calendar", JSON.stringify(array));
}

//Load the stored appointements
function load(){

    var theSchedule = JSON.parse(localStorage.getItem("calendar")) || [];


    for(let i=0; i<9; i++){

    localSchedule[i] = theSchedule[i];
    }

    if ( localSchedule[0] ){
        textNine.value = localSchedule[0];
    } 
    if( localSchedule[1] ) {
        textTen.value = localSchedule[1];
    }
    if( localSchedule[2] ) {
        textEleven.value = localSchedule[2];
    }
    if( localSchedule[3] ) {
        textNoon.value = localSchedule[3];
    }
    if( localSchedule[4] ) {
        textOne.value = localSchedule[4];
    }
    if( localSchedule[5] ) {
        textTwo.value = localSchedule[5];
    }
    if( localSchedule[6] ) {
        textThree.value = localSchedule[6];
    }
    if( localSchedule[7] ) {
        textFour.value = localSchedule[7];
    }
    if( localSchedule[8] ) {
        textFive.value = localSchedule[8];
    }
}

//Format time on start
formatTime();

//Load schedule from local storage
load();