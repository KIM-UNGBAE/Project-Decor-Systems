$(function(){

    // lenis
    const lenis = new Lenis();

    lenis.on('scroll', (e) => {
    });

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
        lenis.raf(time * 1000)
    });

    gsap.ticker.lagSmoothing(0)

    
    // section1
    // col-line, headline-text, desc1, desc2, section2 img, btn-all, img
    const headlineText = new SplitType('.section1 .group-headline .headline-text', { types: 'words, chars', });

    intro = gsap.timeline({})
    intro.from('.section1 .line-area .col-line',{
        delay:.5,
        scaleY:0,
        stagger:{
            from:"center",
            each:0.05,
        }
    },'a');

    intro.to('.section1 .line-area .col-line',{
        opacity:0,
        delay:1,
    });
    
    intro.from('.section1 .group-headline .headline-text:nth-child(1) .char',{
        yPercent:100,
        stagger:{
            from:"center",
            each:0.05,
        }
    },'a');

    intro.from('.section1 .group-headline .headline-text:nth-child(2) .char',{
        yPercent:100,
        stagger:{
            from:"center",
            each:0.05,
        }
    },'a');

    intro.from('.section1 .text-area .desc1',{
        opacity:0,
        delay:1.1,
    },'a');

    intro.from('.section1 .text-area .desc2',{
        opacity:0,
        delay:1.1,
    },'a');

    intro.from('.section1 .text-area img',{
        opacity:0,
        delay:1.1,
    },'a');

    intro.from('.section1 .text-area .btn-all',{
        opacity:0,
        delay:1.1,
    },'a');

    intro.from('.section1 .group-img img',{
        opacity:0,
        delay:1.1,
    },'a');


    // section2
    // content-item::before, after
    $('.section2 .content-item, .section2 .content-item:last-child').each(function(i, el){
        ScrollTrigger.create({
            trigger:el,
            start:"0% 70%",
            end:"50% 100%",
            onEnter:function(){
                $(el).addClass('on');
            }
        })
    });

    // slide img
    $('.section2 .content-area2').each(function(i, el){
        gsap.to($(el).find('.swiper-slide'),{
            scrollTrigger:{
                trigger:el,
                start:"0% 70%",
                end:"100% 100%",
            },
            '--scale':0,
            stagger:0.3,
            duration:1,
        })
    });
    
    // slide
    const sc2Slide1 = new Swiper('.sc2-slide1',{
        slidesPerView:'auto',
        navigation:{
            nextEl:'.section2 .control-box1 .next',
            prevEl:'.section2 .control-box1 .prev'
        },
        pagination:{
            el:'.pagination'
        },
        on:{
            "init":function(){
                total=this.slides.length;
                $('.section2 .curr').text(1);
                $('.section2 .total').text(total);
            },
            "slideChange":function(){
                idx=this.realIndex+1;
                $('.section2 .curr').text(idx);
            }
        }
    });

    const sc2Slide2 = new Swiper('.sc2-slide2',{
        slidesPerView:'auto',
        navigation:{
            nextEl:'.section2 .control-box2 .next',
            prevEl:'.section2 .control-box2 .prev'
        },
        pagination:{
            el:'.pagination'
        },
        on:{
            "init":function(){
                total=this.slides.length;
                $('.section2 .curr').text(1);
                $('.section2 .total').text(total);
            },
            "slideChange":function(){
                idx=this.realIndex+1;
                $('.section2 .curr').text(idx);
            }
        }
        
    });
    
    const sc2Slide3 = new Swiper('.sc2-slide3',{
        slidesPerView:'auto',
        navigation:{
            nextEl:'.section2 .control-box3 .next',
            prevEl:'.section2 .control-box3 .prev'
        },
        pagination:{
            el:'.pagination'
        },
        on:{
            "init":function(){
                total=this.slides.length;
                $('.section2 .curr').text(1);
                $('.section2 .total').text(total);
            },
            "slideChange":function(){
                idx=this.realIndex+1;
                $('.section2 .curr').text(idx);
            }
        }
        
    });


    // section3
    // svg
    content = gsap.timeline({})
    content.from('.section3 .group-content svg',{
        scrollTrigger:{
            trigger:'.group-content svg',                
            start:"0% 70%",
            end:"100% 100%",
        },
        scaleY:0,
    },'b');

    // text-box
    content.from('.section3 .text-area .text-box',{
        scrollTrigger:{
            trigger:'.text-area .text-box',                
            start:"0% 70%",
            end:"100% 100%",
        },
        stagger:{
            each:0.3,
        },
        delay:1,
        opacity:0,
    },'b');


    // section4
    // img-area
    $('.section4 .content-list').each(function(i, el){
        gsap.to($(el).find('.img-area'),{
            scrollTrigger:{
                trigger:el,
                start:"0% 70%",
                end:"100% 100%",
            },
            '--scale':0,
            stagger:0.3,
            duration:1,
        })
    });
    
    // section4::after
    $('.section4').each(function(i,el){
        ScrollTrigger.create({
            trigger:el,
            start:"50% 0%",
            end:"100% 100%",
            onEnter:function(){
                $(el).addClass('on');
            }
        })
    });


    // section5
    // img-area
    $('.section5 .content-item').each(function(i,el){
        gsap.to($(el).find('.img-area'),{
            scrollTrigger:{
                trigger:el,
                start:"0% 70%",
                end:"100% 100%",
            },
            "--scale":0,
            stagger:0.3,
            duration:1,
        })
    });

    // content-item::after
    $('.section5 .content-item').each(function(i,el){
        ScrollTrigger.create({
            trigger:el,
            start:"0% 60%",
            end:"100% 100%",
            onEnter:function(){
                $(el).addClass('on');
            }
        })
    });

    



})