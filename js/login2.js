// Below function Executes on click of login button.
function validate(){
var password = document.getElementById("password").value;
if (password == "aggot"){
alert ("Login successful");
window.location = "success2.html"; // Redirecting to other page.
return false;
}
}
