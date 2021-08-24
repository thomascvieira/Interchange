let stylesheet = new CSSStyleSheet();
function setAccentColor(){
	newAccentColor = 'blue';
	// stylesheet.deleteRule(79);
	stylesheet.insertRule('a:hover{ color: ' + newAccentColor + ';', 0);
}
setAccentColor();