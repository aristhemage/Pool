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
<br><br>
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

<script>
function script(){
var radios = document.getElementsByName('time');

for (var i = 0, length = radios.length; i < length; i++) {
  if (radios[i].checked) {
    // do whatever you want with the checked radio
    if (radios[i].value == 11){
  document.write("Hello World!");
    }

    // only one radio can be logically checked, don't check the rest
    break;
  }
}
}
  </script>
