<h1>Jacob's pool clock </h1>
<h3>See how many rotations you have left before your day is over and other things too!</h3>
<br><br><br><br><br>
<h4> Please enter when you got here: </h4>
<script>
var totalMonthsShown = 12;

var today = new Date();
var todayMonthIndex = today.getMonth();
var todayYear = today.getFullYear();

var monthSlider = document.getElementById('month-slider');

var months = [
	'2:00', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

var daysInMonths = [31,28,31,30,31,30,31,31,30,31,30,31];

var monthLabels = [];
var monthYearLabels = [];
var monthData = [];
var lastDaysData = [];

// Start iterator variables with today's year and month.
var thisYear = todayYear;
var thisMonth = todayMonthIndex;

// Iterate backwards through all the months to display setting
// the values of items on the scale
for (i = (totalMonthsShown - 1); i >= 0; i--) {

  monthYearLabels[i] = months[thisMonth] + ' ' + thisYear;
  monthLabels[i] = months[thisMonth];
  monthData[i] = thisYear + '-' + (thisMonth + 1);

  // February then ensure leap days are considered.
  if (thisMonth == 1 && leapYear(thisYear)) {
    lastDaysData[i] = 29;
  }
  else {
    lastDaysData[i] = daysInMonths[thisMonth];
  }
  
  // When month reaches January then decrement the year
  // and set the month to December for the next iteration.
  // For all other months then the only the month is decremented.
  if (thisMonth == 0) {
    thisMonth = 11;
    thisYear--;
  }
  else {
    thisMonth--;
  }

}

var range = {
  'min': 0,
  'max': totalMonthsShown -1
}

noUiSlider.create(monthSlider, {
	start: [totalMonthsShown -1, totalMonthsShown -1],
	step: 1,
	range: range,
  tooltips: true,
  connect: true,
  animate: true,
	animationDuration: 600,
  pips: {
		mode: 'steps',
		density: totalMonthsShown -1,
    // Force major pips for value.
    filter: function() {
      return 1;
    }
	}
});

// Remove the shortcut active class when manually setting a range.
monthSlider.noUiSlider.on('start', function() {
  $('.shortcuts li').removeClass('active');
});

monthSlider.noUiSlider.on('update', function(values, handle) {
  
  var monthIndex = parseInt(values[handle]);
  
  var prefixes = ['From', 'To'];
  
  if (handle == 0) {
    var day = 1;    
  }
  else if (handle == 1) {
    var day = lastDaysData[monthIndex];
  }
  
  // Set the tooltip values.
  $('.noUi-handle[data-handle="' + handle + '"]').find('.noUi-tooltip').html(prefixes[handle] + '<br /><strong>' + day + ' ' + monthYearLabels[monthIndex] + '</strong>');
  
  // Update the pips values.
  
  $('.noUi-pips .noUi-value').each(function() {
    var index = $(this).html();
    $(this).html(monthLabels[index]);
  });
  
  // Update the input elements.
  var minValueIndex = parseInt(values[0]);
  var maxValueIndex = parseInt(values[1]);
  $('input[name="month-range-min"]').val(monthData[minValueIndex]);
  $('input[name="month-range-max"]').val(monthData[maxValueIndex]);

});

$('.month-slider-wrapper .shortcuts li').mousedown(function() {
  var monthPeriod = $(this).attr('data-min-range');
  
  var newValues = [
    (totalMonthsShown - monthPeriod),
    (totalMonthsShown -1)
	];
  
  monthSlider.noUiSlider.set(newValues);
  
  $('.shortcuts li').removeClass('active');
  $(this).addClass('active');
  
});
</script>
