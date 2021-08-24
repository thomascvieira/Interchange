window.onload = function showDate(){
	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
  ];
  let date = new Date();
  let month = monthNames[date.getMonth()];
  let dateStr = month + ' ' + date.getDate() + ', ' + date.getFullYear();
  document.getElementById('date').innerHTML = dateStr;
  document.getElementById('clock').innerHTML = date.toLocaleTimeString();
  setInterval(function() { showDate();}, 1000);
}