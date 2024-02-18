$(document).ready(function () {
    $('.menu-hamburger').hide();
    $('.button-hamburger').click(function () {
        $('.menu-hamburger').show();
        $('.button-hamburger').hide();
        $('.close-button').click(() => {
            $('.menu-hamburger').hide();
            $('.button-hamburger').show();
        })
    });
});