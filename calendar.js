function myRequest() {
  var request = new XMLHttpRequest();
  var uri = "http://holidayapi.com/v1/holidays?country=US&year=2016&month=06";
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      document.getElementById("cal").innerHTML = request.responseText;
    }
  };
  request.open("GET", uri , true);
  request.send();
}

$(function(){
    $('#startDate').datepicker({ changeYear: true, changeMonth: true });
});