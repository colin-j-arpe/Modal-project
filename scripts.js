var trigger = document.getElementById("head-logo")
var popup = document.getElementById("modal-window");

trigger.addEventListener("click", revealWindow);

function revealWindow (event)	{
	popup.style.visibility = "visible";
}