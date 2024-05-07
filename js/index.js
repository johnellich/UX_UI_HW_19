// function fade() {
//     $('.preloader').fadeOut("slow");
//     }
//     setTimeout(fade, 3000);

$(".preloader").delay(3000).fadeOut("slow",function(){
    $(this).remove();
})