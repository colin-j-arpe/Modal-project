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
	if (document.getElementsByName("password")[1].value.length === document.getElementsByName("password")[2].value.length)	{
		if (samePassword())
			check.innerHTML = "<img src='Images/check.png' width=15px height=15px>";
	}	else 	{
		check.innerHTML = "<img src='Images/x.png' width=15px height=15px>";
	}
}

function samePassword ()	{
	for (var i = 0; i < document.getElementsByName("password")[1].value.length; i++) {
		if (document.getElementsByName("password")[1].value[i] !== document.getElementsByName("password")[2].value[i])
			return false;
		else
			return true;
	}
}