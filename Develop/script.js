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
    }

    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    updateTime();
});
