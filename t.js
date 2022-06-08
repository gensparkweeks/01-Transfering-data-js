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






/*
var newUl = `
<ul>
    <li>"Full name: " ${localStorage.getItem("first")}+" "+${localStorage.getItem("last")}</li>
    <li>"Email: "+${localStorage.getItem("email")}</li>
    <li>"Date of birth: "+${localStorage.getItem("dob")}</li>
</ul>
`;
*/



// var capa = document.querySelector(".content");

// var li = document.createElement("li");
// li.innerHTML = "Full name: " + localStorage.getItem("first") + " " + localStorage.getItem("last");

// capa.appendChild(li);