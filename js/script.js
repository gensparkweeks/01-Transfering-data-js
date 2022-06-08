var first = document.getElementById('first');
var last = document.getElementById('last');
var email = document.getElementById('email');
var dob = document.getElementById('dob');


var errorf = document.getElementById('errorf');

var loadError = [];

function validateform() {

    localStorage.clear();

    if (first.value === null || first.value === "") {
        loadError.push("First name");
    }
    if (last.value === null || last.value === "") {
        loadError.push("Last name");
    }
    if (email.value === null || email.value === "") {
        loadError.push("Email");
    }
    if (dob.value === "" || dob.value === "") {
        loadError.push("DoB");
    }

    if (loadError.length == 0) {
        localStorage.setItem("first", first.value);
        localStorage.setItem("last", last.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("dob", dob.value);

        errorf.style.color = "rgb(206, 198, 198)";
        errorf.innerHTML = "Created"
    } else {
        errorf.style.color = "red";
        errorf.innerHTML = "Please, check " + loadError.join(", ");
    }

    return false;
}