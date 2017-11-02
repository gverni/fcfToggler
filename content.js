var viewListToggled = false 
const strUserDefinedPrefix = "_"

function fcfToggleViews() {
	
	// Filter the options list
	var colOptions = elFcf.children
		for (let i=0; i < colOptions.length; i++) {
		if (colOptions[i].classList.contains("userdefined")) {
			colOptions[i].innerHTML = viewListToggled ? strUserDefinedPrefix + colOptions[i].innerHTML : colOptions[i].innerHTML.replace(strUserDefinedPrefix, "") 
		} else {
			colOptions[i].setAttribute("style", "display: " + (viewListToggled ? "initial" : "none"))
		} 
	}
	
	viewListToggled = !viewListToggled

}

if 	(document.getElementsByName("fcf").length !== 0) {

	// Mark user defined otions (needed later for toggling)
	var colOptions = document.getElementsByName("fcf")[0].children
	for (let i=0; i < colOptions.length; i++) {
		if (colOptions[i].innerHTML.startsWith(strUserDefinedPrefix)) {
			colOptions[i].classList.add("userdefined")
		} 
	}
	

}










