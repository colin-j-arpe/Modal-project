var trigger = document.getElementById("head-logo");
var menuButton = document.getElementById("menu-button");
var menuPulldown = document.getElementById("menu-pulldown");
var logIn = document.getElementById("login-window");
var newAccount = document.getElementById("account-button");
var close = document.getElementById("close-button");
var account = document.getElementById("account-window");
var passwordArea = document.getElementsByName("password");
	var	check = document.getElementById("checkOrX");
var cancel = document.getElementById("cancel-button");

// trigger.addEventListener("click", openMenu);

menuButton.addEventListener("mouseover", openMenu);
menuPulldown.addEventListener("mouseleave", closeMenuDelay);

function openMenu ()	{
	menuPulldown.style.visibility = "visible";
}

function closeMenuDelay ()	{
	var backOnMenu = window.setTimeout (closeMenu, 300)
	menuPulldown.addEventListener("mouseover", keepMenu);
	function closeMenu ()	{
		menuPulldown.style.visibility = "hidden";
	}
	function keepMenu ()	{
		window.clearTimeout(backOnMenu);
	}
}

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