// Below function Executes on click of login button.
function validate(){
var password = document.getElementById("password").value;
if (password == "rbrb"){
alert ("Login successful");
window.location = "success.html"; // Redirecting to other page.
return false;
} else {alert("Nope);
}
}
