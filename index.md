<h1>Jacob's pool clock </h1>
<h3>See how many rotations you have left before your day is over and other things too!</h3>
<h4> Please enter when you got here: </h4>
<input type="radio" id="time" name="time" value="11">
<label for="time1">11:00</label><br>
<input type="radio" id="time" name="time" value="1">
<label for="time1">1:00</label><br>
<input type="radio" id="time" name="time" value="2">
<label for="time1">2:00</label><br>
<input type="radio" id="time" name="time" value="4">
<label for="time1">4:00</label><br>
<br>
<h4> Please enter when your shift ends: </h4>
<input type="radio" id="time" name="time2" value="4">
<label for="time1">4:00</label><br>
<input type="radio" id="time" name="time2" value="7">
<label for="time1">7:00</label><br>
<input type="radio" id="time" name="time2" value="8.5">
<label for="time1">8:30</label><br>
<input type="radio" id="time" name="time2" value="9.5">
<label for="time1">9:30</label><br>

<button onclick="script()">Submit</button>

<p id='hidden' style='display: none'>This is a test</p>    

<script>
function script(){
var radios = document.getElementsByName('time');
var radios2 = document.getElementsByName('time2'); 
var timeIN = 0;
var timeOut = 0;
for (var i = 0, length = radios.length; i < length; i++) {
  if (radios[i].checked) {
    timeIN = radios[i].checked;
    break;
  }
}
  
  for (var i = 0, length = radios.length; i < length; i++) {
  if (radios[i].checked) {
    timeOUT = radios[i].checked;
    break;
  }
}
  toggleText();
}
  
  function toggleText() {
  var text = document.getElementById("hidden");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
  
  </script>
  
  
