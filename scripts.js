var trigger = document.getElementById("head-logo");
var logIn = document.getElementById("login-window");
var newAccount = document.getElementById("account-button");
var close = document.getElementById("close-button");
var account = document.getElementById("account-window");
var passwordArea = document.getElementsByName("password");
	var	check = document.getElementById("checkOrX");
var cancel = document.getElementById("cancel-button");

trigger.addEventListener("click", revealLogIn);

setTimeout (revealLogIn, 500);

newAccount.addEventListener("click", revealAccount);
close.addEventListener("click", removeLogIn);
cancel.addEventListener("click", removeAccount);

passwordArea[2].addEventListener("keyup", comparePasswords);

function revealLogIn (event)	{
	logIn.style.visibility = "visible";
}

function removeLogIn (event)	{
	logIn.style.visibility = "hidden";
}

function revealAccount (event)	{
	removeLogIn();
	account.style.visibility = "visible";
}

function removeAccount (event)	{
	check.style.visibility = "hidden";
	account.style.visibility = "hidden";
	revealLogIn();
}

function comparePasswords (event)	{
	check.style.visibility = "visible";
	if (sameLength())	{
		// console.log("checking pwd");
		if (samePassword())	{
			check.innerHTML = "<img src='Images/check.png' width=15px height=15px>";
		}
	}	else 	{
		check.innerHTML = "<img src='Images/x.png' width=15px height=15px>";
	}
}

function sameLength ()	{
	if (document.getElementsByName("password")[1].value.length === document.getElementsByName("password")[2].value.length)
		return true;
	else
		return false;
}

function samePassword ()	{
	for (var i = 0; i < document.getElementsByName("password")[1].value.length; i++) {
		// console.log(document.getElementsByName("password")[1].value[i] + " " + document.getElementsByName("password")[2].value[i])
		if (document.getElementsByName("password")[1].value[i] !== document.getElementsByName("password")[2].value[i])
			return false;
	}
	return true;
}