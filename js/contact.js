// // document.addEventListener("DOMContentLoaded", function(event) {
// //FUNCION


// var first = document.getElementById('first');
// var last = document.getElementById('last');
// var email = document.getElementById('email');
// var dob = document.getElementById('dob');

// console.log("entro a la func....");

// if (localStorage.getItem("first")) {
//     first.innerHTML = localStorage.getItem("first");
// }
// if (localStorage.getItem("last")) {
//     last.innerHTML = localStorage.getItem("last");
// }
// if (localStorage.getItem("email")) {
//     email.innerHTML = localStorage.getItem("email");
// }
// if (localStorage.getItem("dob")) {
//     dob.innerHTML = localStorage.getItem("dob");
// }

// console.log("doc first: " + first + " .. " + localStorage.getItem("first"));
// console.log("doc last: " + last + " .. " + localStorage.getItem("last"));
// console.log("doc email: " + email + " .. " + localStorage.getItem("email"));

// // });

// Ul contact
var ul = document.querySelector(".content");


var li1 = document.createElement("li");
li1.innerHTML = "Full name: " + localStorage.getItem("first") + " " + localStorage.getItem("last");
ul.appendChild(li1);

var li2 = document.createElement("li");
li2.innerHTML = "Email: " + localStorage.getItem("email");
ul.appendChild(li2);

var li3 = document.createElement("li");
li3.innerHTML = "Date of Birth: " + localStorage.getItem("dob");
ul.appendChild(li3);