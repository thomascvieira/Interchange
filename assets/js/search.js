document.getElementById('searchBar').focus();

var engineInput = document.getElementById("engine").value;;

function engineChange(){
	engineInput = document.getElementById("engine").value;
}

let engineArray = ['https://duckduckgo.com/?q=', 'https://www.google.com/search?q=', 'https://www.youtube.com/results?search_query=', 'https://stackoverflow.com/search?q='];

document.getElementById('searchBtn').addEventListener("click", runSearch);
document.getElementById('searchBar').addEventListener("keydown", function(e){
	if(e.code === "Enter"){
		runSearch(e);
	}
});

function runSearch(){
	let query = document.getElementById("searchBar").value;
	query.replace(/\s/g, '+')
	let url = engineArray[engineInput] + query;
	let win = window.open(url, "_self");
}