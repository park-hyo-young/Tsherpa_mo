$(document).ready(function(){
    // include 함수
    includeLayout();

    // 햄버거 메뉴 클릭시
    $('.nav_btn').on('click', function(){
        $('.menu-list-area').show()
    });
    $('.list-popup > a').on('click', function(){
        $('.menu-list-area').hide()
    });

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
})

function includeLayout() {
    var includeArea = $('[data-include]');
    var self, url;
    $.each(includeArea, function(){
        self = $(this);
        url = self.data('include');
        self.load(url, function(){
            self.removeAttr('data-include');
        });
    });
}