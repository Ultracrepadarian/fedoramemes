// Below function Executes on click of login button.
function validate(){
var password = document.getElementById("password").value;
if (password == "192839182839"){
alert ("Login successful");
window.location = "success.html"; // Redirecting to other page.
return false;
}
}
