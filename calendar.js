$(function(){
    $('#startDateSelect').datepicker({ changeYear: true, changeMonth: true });
});

function myRequest() {
  var request = new XMLHttpRequest();
  var dateRequest = encodeURIComponent(document.getElementById("startDateSelect").value)
  var daysRequest = encodeURIComponent(document.getElementById("daysSelect").value)
  var countryRequest = encodeURIComponent(document.getElementById("countrySelect").value)
  var url = "http://holidayapi.com/v1/holidays?country="+countryRequest+"&year=2016&month=06";
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      document.getElementById("cal").innerHTML = request.responseText;
    }
  };
  request.open("GET", url , true);
  request.send();
    
  $('#myCal').datepicker({
		inline: true,
		firstDay: 0,
		showOtherMonths: false,
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	});
}

