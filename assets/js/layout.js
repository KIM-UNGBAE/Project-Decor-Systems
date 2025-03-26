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
    // side-gnb
    $('.gnb .btn-menu').click(function(){
        $('.side-gnb').toggleClass('active1');
    }) 
    
    // second-gnb
    $('.side-gnb .nav-item').click(function(){
        
    })

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