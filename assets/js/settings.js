let styleSettings = new CSSStyleSheet();
(function applySettings(styleSettings){
	setAccentColor();
	setLinkSize();
})()

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
