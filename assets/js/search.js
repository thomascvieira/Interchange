var engineInput = document.getElementById("engine").value;;

function setEngine(){
	engineInput = document.getElementById("engine").value;
}

let engineArray = ['https://duckduckgo.com/?q=', 'https://www.google.com/search?q=', 'https://www.youtube.com/results?search_query=string', 'https://stackoverflow.com/search?q='];

document.getElementById("searchBtn").addEventListener("click", runSearch);

function runSearch(){
	let query = document.getElementById("searchBar").value;
	query.replace(/\s/g, '+')
	let url = engineArray[engineInput] + query;
	let win = window.open(url);
}