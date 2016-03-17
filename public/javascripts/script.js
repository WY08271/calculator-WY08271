$(document).ready(function () {
  $('#screenNumber').val('0');

  $('.number-button').on('click', function () {
    var screenNumber = $('#screenNumber').val();
    var inputNumber = this.id;

    var result = linkNumber(screenNumber, inputNumber);
    $('#screenNumber').val(result);

  })
});

function linkNumber(screenNumber, inputNumber) {
  if (screenNumber === '0') {
    return inputNumber;
  } else if (inputNumber === 'point') {
    return screenNumber + '.';
  } else{
    return screenNumber + inputNumber;
  }
}