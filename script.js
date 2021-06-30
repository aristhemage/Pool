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
