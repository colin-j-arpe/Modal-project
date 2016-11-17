var trigger = document.getElementById("head-logo");
var logIn = document.getElementById("login-window");
var newAccount = document.getElementById("account-button");
var close = document.getElementById("close-button");
var account = document.getElementById("account-window");
var cancel = document.getElementById("cancel-button");

trigger.addEventListener("click", revealLogIn);

setTimeout (revealLogIn, 500);

newAccount.addEventListener("click", revealAccount);
close.addEventListener("click", removeLogIn);
cancel.addEventListener("click", removeAccount);

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
	account.style.visibility = "hidden";
	revealLogIn();
}