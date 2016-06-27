$(function(){
    $('#startDateSelect').datepicker({ changeYear: true, changeMonth: true });
});

function myRequest() {
  var request = new XMLHttpRequest();
  var dateRequest = encodeURIComponent(document.getElementById("startDateSelect").value);
  var calDate = document.getElementById("startDateSelect").value;
  var daysRequest = encodeURIComponent(document.getElementById("daysSelect").value);
  var countryRequest = encodeURIComponent(document.getElementById("countrySelect").value);
  var dateSplit = calDate.split('/');
  var monthSplit = dateSplit[0];
  var daySplit = dateSplit[1];
  var yearSplit = dateSplit[2];
  var url = 'http://holidayapi.com/v1/holidays?country='+countryRequest+'&year='+yearSplit+'&month='+monthSplit;
  var weeks = daySplit/7+daysRequest/7;
  
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      console.log(
      'Request Text:' + request.responseText + '\n' +
      'Selected Date:' + calDate + '\n' +
      'Selected Month:' + monthSplit + '\n' +
      'Selected Year:' + yearSplit + '\n' +
      'Selected Day:' + daySplit + '\n' +
      'Days Requested:' + daysRequest + '\n' +
      'Days to Weeks:' + weeks);
    }
  };
  
  request.open("GET", url , true);
  request.send();
  
  $('#myCal').datepicker({
		inline: true,
		firstDay: 0,
		showOtherMonths: false,
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		numberOfMonths: [ weeks/5,1 ]
	});

  $('#myCal').datepicker('setDate', calDate);
  $('.ui-datepicker-inline .ui-datepicker-calendar tbody tr td.ui-datepicker-today a.ui-state-highlight').removeClass('ui-state-highlight');

}
