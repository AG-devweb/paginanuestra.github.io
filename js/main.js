// Se agrega el año actual al elemento "year"
var yearElement = document.getElementById("year");
var currentYear = new Date().getFullYear();

yearElement.innerHTML = currentYear;
