$(document).ready(function () {
    $('.saveBtn').on('click', function () {
        var newDesc = $(this).siblings('.description').val();
        console.log(newDesc);
        var taskTime = $(this).parent().attr('id');
        console.log(taskTime);

        localStorage.setItem(taskTime, newDesc);
    });

    function updateTime() {
        var currentHour = moment().hours();
        console.log(currentHour);

        $('.time-block').each(function () {
            var taskHour = parseInt($(this).attr('id'));

            if (taskHour < currentHour) {
                $(this).addClass('past')
                $(this).removeClass('present');
                $(this).removeClass('future');
            } else if (taskHour === currentHour) {
                $(this).addClass('present');
                $(this).removeClass('past');
                $(this).removeClass('future');
            } else {
                $(this).addClass('future')
                $(this).removeClass('past')
                $(this).removeClass('present')
            }
        });
    }

    updateTime();

    var updateDelay = setInterval(updateTime, 10000);

    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));


    $('#currentDay').text(moment().format('dddd, MMMM Do'));


});
