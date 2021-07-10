var error = " An error occured. Please refresh the page and try again.";
var form = document.getElementsByTagName("form");
var minimumAge = 13;
var userAge = prompt("Please put in your age (be serious please): ");

if (userAge < minimumAge) {
    document.getElementById("what").innerHTML = "You are below the minimum age. Please come back when you are at least 13.";
}
else if (userAge >= 18) {
    document.getElementById("what").innerHTML = "You are over the minimum age. Please fill in this form to continue.";
    form[0].style.display = "block";
}
else if (userAge > minimumAge) {
    document.getElementById("what").innerHTML = "You are over the minimum age. Welcome! Please ask your legal parent or guardian to fill in this form.";
    form[0].style.display = "block";
}
else if (userAge == minimumAge) {
    document.getElementById("what").innerHTML = "You are at the minimum age. Welcome! Please ask you legal parent or guardian to fill in this form.";
    form[0].style.display = "block";
}
else {
    document.getElementById("what").innerHTML = error;
}
function displayOther() {
    if (document.getElementById("othertrigger").checked) {
        document.getElementById("othergender").style.display = "block";
    }
    else {
        document.getElementById("othergender").style.display = "none";
    }
}