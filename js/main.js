

$('.singerOne h3').click(function () {
    $('.singerOne p').slideToggle(500)
    $('.singerTwo p').slideUp(500)
    $('.singerThree p').slideUp(500)
    $('.singerFour p').slideUp(500)
})
$('.singerTwo h3').click(function () {
    $('.singerOne p').slideUp(500)
    $('.singerTwo p').slideToggle(500)
    $('.singerThree p').slideUp(500)
    $('.singerFour p').slideUp(500)
})
$('.singerThree h3').click(function () {
    $('.singerOne p').slideUp(500)
    $('.singerTwo p').slideUp(500)
    $('.singerThree p').slideToggle(500)
    $('.singerFour p').slideUp(500)
})
$('.singerFour h3').click(function () {
    $('.singerOne p').slideUp(500)
    $('.singerTwo p').slideUp(500)
    $('.singerThree p').slideUp(500)
    $('.singerFour p').slideToggle(500)
})

$('#example').countdown({
    date: '10/29/2024 23:59:59'
}, function () {
    alert('Happy Birthday!');
});

$('.closeBtn').click(function () {
    $('#sideMenu').css('width', 0)
    $('#home .homeContent').css('margin-left', 'auto')
})
$('.openNav').click(function () {
    $('#sideMenu').css('width', '250px')
    $('#home .homeContent').css('margin-left', '250px')
})

$('#textarea').keyup(function () {
    let x = 100 - $('#textarea').val().length;
    $('#chars').text(x)
})

$('#homeBtn').click(function () {
    $(window).scrollTop(0);
})

$('#detailsBtn').click(function () {
    $('html, body').animate({ scrollTop: $('#slider').offset().top-100}, 100)
})

$('#counterBtn').click(function () {
    $('html, body').animate({ scrollTop: $('#countdown').offset().top-100}, 100)
})

$('#contactBtn').click(function () {
    $('html, body').animate({ scrollTop: $('#contact').offset().top+50}, 100)
})

