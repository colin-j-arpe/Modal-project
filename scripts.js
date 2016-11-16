var trigger = document.getElementById("head-logo")
var popup = document.getElementById("modal-window");
var close = document.getElementById("close-button");

trigger.addEventListener("click", revealWindow);

setTimeout (revealWindow, 2000);

close.addEventListener("click", removeWindow);

function revealWindow (event)	{
	popup.style.visibility = "visible";
}

function removeWindow (event)	{
	popup.style.visibility = "hidden";
}