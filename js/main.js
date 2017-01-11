$( document ).ready(function() {
    alert("hello1");
$('.navbar [href^=#]').click(function (e) {
    //alert("hello2");
    e.preventDefault();
   // alert("hello3");
    var div = $(this).attr('href');
    $("html, body").animate({
        scrollTop:$(div).position().top
    }, "slow");
    //alert("hello4");
});


});
