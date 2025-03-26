$(function(){

    // header, fixed-toolbar

    intro = gsap.timeline({})

    intro.from('.header .gnb .nav-item, .header .logo',{
        opacity:0,
        delay:1.1,
    },'a')
    intro.from('.fixed-toolbar',{
        opacity:0,
        delay:1.1,
    },'a')

    $(window).scroll(function(){
        curr = $(this).scrollTop();

        if (curr > 50) {
            $('.header').addClass('on');
            } else {
            $('.header').removeClass('on');
        }

    })


    // tablet
    // side-gnb, side-gnb nav-item
    $('.gnb .menu-item button').click(function () {
        $('.side-gnb').toggleClass('active1');
        $('.gnb .btn-menu, .gnb .btn-close').toggleClass('active1');
        $('.header').toggleClass('on');

        gsap.from('.side-gnb .nav-item', {
            duration: 1,
            opacity: 0,
            stagger: 0.3,
            delay: 0.5,
        });
    });


    // footer
    // footer group-footer, line-area::before
    $('.footer .group-footer, .footer .line-area').each(function(i, el){
        ScrollTrigger.create({
            trigger:el,
            start:"0% 70%",
            end:"100% 100%",
            onEnter:function(){
                $(el).addClass('on');
            }
        })
    })


})