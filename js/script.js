$(document).ready(function(){
    
    $('head').load('head.html');
    $('#header-loding').load('header.html');
    $('#header-loding-login').load('header-login.html');

    $('.select-box > a').on('click', function(e){
        e.preventDefault();
        if($('.select-box > .option-list').hasClass('up') === true) {
            $('.option-list').removeClass('up');
            $('.option-list').slideDown(300);
        } else {
            $('.option-list').addClass('up');
            $('.option-list').slideUp(300);
        }
    }); 
    
    $('.stu-code-box > a').click(function(e){
        e.preventDefault();
        $('.popup-share').show();
    });
    $('.popup-header > a').click(function(e){
        e.preventDefault();
        $('.popup-share').hide();
    });

    $('.list-menu-group > a, .next-pagebtn-group > .page-num').on('click',function(e){
        e.preventDefault();
        if($(this).hasClass('active') === true) {
            $(this).siblings().removeClass('active');
        } else {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        }
    });

    $('.stu-pass-list > a').on('click',function(e){
        e.preventDefault();
        if($(this).hasClass('pass-show') === true) {
            $(this).removeClass('pass-show');
            $(this).addClass('pass-hide');
        } else {
            $(this).removeClass('pass-hide');
            $(this).addClass('pass-show');
        }
    });
    
    var swiper = new Swiper(".class-offcial-box", {
        spaceBetween: 50,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    $('.nav_btn').on('click', function(){
        $('.menu-list-area').show()
    });
})