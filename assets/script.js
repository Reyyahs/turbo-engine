//created variable Declarations
const timeDisplayEl = $('#currentDay');
const scheduleHours = $('.time-block');
const buttons = $('[id^="button-"]');
const inputs = $('[id^="input-"]');
//created a function that displays the current time
const displayTime = () => {
  timeDisplayEl.text(dayjs().format('MMM DD, YYYY [at] HH:mm:ss a'));
};
// Interval to update current time
setInterval(displayTime, 1000);

// Initial display of current time
displayTime();
//created an Eventlistener
buttons.on('click', function(event) {
  event.preventDefault();
  const index = buttons.index(this);
  const apptInput = inputs.eq(index).val();
  localStorage.setItem(`${index + 9} am`, JSON.stringify(apptInput));
});
//created a funtion that renders the schedule
const renderSchedule = index => {
  const scheduleDisplay = JSON.parse(localStorage.getItem(`${index + 9} am`));
  if (scheduleDisplay !== null) {
    inputs.eq(index).text(scheduleDisplay);
  }
}