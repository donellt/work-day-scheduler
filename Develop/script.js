$(document).ready(function() {
    $('.saveBtn').on('click', function() {
        var newDesc = $(this).siblings('.description').val();
        console.log(newDesc);
        var taskTime = $(this).parent().attr('id');
        console.log(taskTime);
    });

    function updateTime() {
        var currentHour = moment().hours();
        console.log(currentHour);

    $('.time-block').each(function() {
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

    $('#currentDay').text(moment().format('dddd, MMMM Do'));


});
