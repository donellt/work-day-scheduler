$(document).ready(function() {
    $('.saveBtn').on('click', function() {
        var newDesc = $(this).siblings('.description').val();
        console.log(newDesc);
        var taskTime = $(this).parent().attr('id');
        console.log(taskTime);
    });
});