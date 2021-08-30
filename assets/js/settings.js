let styleSettings = new CSSStyleSheet();
(function applySettings(styleSettings){
	setAccentColor();
	setLinkSize();
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
	let newAccentColor = 'yellow';
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