// tracking script
var pageTitle = document.getElementsByTagName("title")[0].innerHTML;
var d = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var userData = pageTitle + " opened at " + d.toLocaleTimeString() + " " + days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate() + "<br><br>";
localStorage.setItem("music_data",userData + localStorage.getItem("music_data"));
console.log("Time and page recorded");
