$(document).ready(function() {
    var service = new Service();

    setScreen('0');

    $('#AC').on('click', function() {
        service.one = undefined;
        service.two = undefined;
        service.symbol = undefined;
        service.single = undefined;

        setScreen('0');
    });

    $('.opposite-button').on('click', function() {
        service.single = $('#screenNumber').val();
        service.opposite(service, setScreen);
    });

    $('.percent-button').on('click', function() {
        service.single = $('#screenNumber').val();
        service.percent(service, setScreen);
    });

    $('.number-button').on('click', function() {
        var screenNumber = $('#screenNumber').val();
        var inputNumber = this.id;

        var result = linkNumber(screenNumber, inputNumber);
        $('#screenNumber').val(result);
    });
});

function setScreen(number) {
    $('#screenNumber').val(number);
}

function linkNumber(screenNumber, inputNumber) {
    if (screenNumber === '0') {
        return inputNumber;
    } else if (inputNumber === 'point') {
        return screenNumber + '.';
    } else {
        return screenNumber + inputNumber;
    }
}