let styleSettings = new CSSStyleSheet();

(function applySettings(styleSettings){
	setBackgroundColor();
	setElementColor();
	setAccentColor();
	setLinkSize();
	populateStorage();
})()

function toggleSettings(){
	var settings = document.getElementById('settings');
	var wrapper = document.getElementById('wrapper-main')
	if(settings.style.display === "block"){
		settings.style.display = "none";
		wrapper.style.display = "grid"
	}
	else{
		settings.style.display = "block";
		wrapper.style.display = "none";
	}
}

populateStorage();

function populateStorage() {
	localStorage.setItem('background-color', document.getElementById('background-color').value);
	localStorage.setItem('element-color', document.getElementById('element-color').value);
	setStyles();
}
function setStyles() {
	var backgroundColor = localStorage.getItem('background-color');
	document.getElementById('background-color').value = backgroundColor;
	setBackgroundColor(backgroundColor);

	var elementColor = localStorage.getItem('element-color');
	document.getElementById('element-color').value = elementColor;
	setElementColor(elementColor);
}

function clearSavedValues(){
	localStorage.clear();
}

// ~~~~~~ page structure ~~~~~~
function addColumn(){
	var div = document.createElement('div');
	div.classList.add('column');
	document.getElementById("bottom").appendChild(div);
}
function removeColumn(){
	$(".column:last-child").remove();
}

// ~~~~~~ colors ~~~~~~
function setBackgroundColor(currentBackgroundColor){
	styleSettings.insertRule('body, #searchBar, select, #settings, input, button{ background-color: ' + currentBackgroundColor + ';}');
	saveChange(styleSettings);
}
function setElementColor(elementColor){
	styleSettings.insertRule('p, a:visited, li, svg, input, select, #searchBar:focus, .column-head, h2, h3, label, button{ color: ' + elementColor + ';}');
	styleSettings.insertRule('#searchBar:focus, input:focus{box-shadow: 0px 0px 10px 0  ' + elementColor + ';}');
	styleSettings.insertRule('.column, #searchBar, select, input, button{border: 3px solid ' + elementColor + ';}');
	saveChange(styleSettings);
}
function setAccentColor(){
	let newAccentColor = document.getElementById('accent-color').value;
	styleSettings.insertRule('a:hover{ color: ' + newAccentColor + ';}');
	saveChange(styleSettings);
}

function setLinkSize(){
	let newLinkSize = '24px';
	styleSettings.insertRule('li{ font-size: ' + newLinkSize + ';}');
	saveChange(styleSettings);
}

function saveChange(styleSettings){
	document.adoptedStyleSheets = [styleSettings];
}