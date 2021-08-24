let styleSettings = new CSSStyleSheet();
(function applySettings(styleSettings){
	setAccentColor();
	setLinkSize();
})()

// ~~~~~~ page structure ~~~~~~
function addColumn(){
	var div = document.createElement('div');
	div.classList.add('column');
	document.getElementById("bottom").appendChild(div);
}
function removeColumn(){
	$(".column:last-child").remove();
}

function setAccentColor(){
	let newAccentColor = 'red';
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