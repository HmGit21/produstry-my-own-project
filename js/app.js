/*
1: Home page js 
    1.1: start from menu toggle
    1.2: end counter
2: About page js
    2.1: start 
    2.2: end 
*/

$(function(){
    //menu toggle
    $('.toggle').click(function(){
        $('#myNav ul').toggle(500);

        $('.logo').toggleClass('active');

    });
    // sticky top manu bar fixed
    let menuFixed = $('nav');
        menuTop = menuFixed.offset().top;
    $(window).scroll(function(){
        scrollTop = $(this).scrollTop();

        if(scrollTop > menuTop){
          menuFixed.addClass('active');
        }else{
          menuFixed.removeClass('active');
        }

        //back to top button
        if(scrollTop > 500){
          backTop.addClass('active')
        }else{
          backTop.removeClass('active')
        }

    });
    let backTop = $('#back_top');
    backTop.on('click', function(){
      $('html,body').animate({
        scrollTop: 0,
      }, 1000);
    });
    // preloader core js item
    $(window).on('load', function(){
      $('#preloader').delay(1000).fadeOut(1000);
    });
   
    //counter 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


});
     //slick slider
   $('.banner_img').slick({
  	    speed: 300,
        infinite: true,
  	    slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        fade:true,
        arrows: true,
        prevArrow: '<div class="LeftArrow"><span class=""><i class="fas fa-chevron-left"></i></span></div>',
        nextArrow: '<div class="rightArrow"><span class=""><i class="fas fa-chevron-right"></i></span></div>',
        asNavFor: '.banner_content',
    });

   $('.banner_content').slick({
  	    speed: 300,
        infinite: true,
  	    slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        autoplaySpeed: 2000,
        asNavFor: '.banner_img'
    });
   //blog_slider
   $('.blog_slider').slick({
        centerMode: true,
        centerPadding: '0px',
        speed: 300,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll:3,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<div class="LeftArrow blogarrow"><span class=""><i class="fas fa-chevron-left"></i></span></div>',
        nextArrow: '<div class="rightArrow blogarrow2"><span class=""><i class="fas fa-chevron-right"></i></span></div>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 320,
                settings:"unslick"
              }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
   });
   // testimoninal slick slider
  
  $('.testimonial_text').slick({
    speed: 300,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: '.testimonial_img',
    fade:true,
    arrows: true,
    prevArrow: '<div class="LeftArrow"><span class=""><i class="fas fa-chevron-left"></i></span></div>',
    nextArrow: '<div class="rightArrow"><span class=""><i class="fas fa-chevron-right"></i></span></div>',
  });
  $('.testimonial_img').slick({
    centerMode: true,
    centerPadding: '0px',
    speed: 300,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: '.testimonial_text',
    arrows:false,
    
  });
// customer slick slider 
$('.customer_content').slick({
    centerMode: true,
    centerPadding: '0px',
    speed: 300,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth:true,
    arrows: true,
    prevArrow: '<div class="LeftArrow customerArrow"><span class=""><i class="fas fa-chevron-left"></i></span></div>',
    nextArrow: '<div class="rightArrow customerArrow2"><span class=""><i class="fas fa-chevron-right"></i></span></div>',
  });
// Home  core js end up here
/*-------------------------------------------
about us core js start up here
---------------------------------------------*/ 
//team slick slider
$('.team_slide').slick({
  centerMode: true,
        centerPadding: '0px',
        speed: 300,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll:3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<div class="LeftArrow teamArrow"><span class=""><i class="fas fa-chevron-left"></i></span></div>',
        nextArrow: '<div class="rightArrow teamArrow2"><span class=""><i class="fas fa-chevron-right"></i></span></div>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 320,
                settings:"unslick"
              }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
});

/*--------------------------------------------
blog details core js
--------------------------------------------*/ 
$(function(){
  let clickReply = $('.reply');
  let reply = $('.replyer');
  clickReply.on('click', function(){
    reply.fadeToggle(1000);
    reply.toggleClass('active');
    clickReply.toggleClass('active');
  });
  //sidebar btn show and hide
  $(window).on('scroll', function(){
    scrollTop = $(this).scrollTop();
    let sideBarButton =$('#sidebar_btn');
    if(scrollTop > 200){
      sideBarButton.addClass('active')
    }else{
      sideBarButton.removeClass('active')
    }
  });
  

  let sidebar = $('#sidebar');
  $('#sidebar_btn').on('click', function(){
    sidebar.addClass('active');
  });
  $('.sidebar_closeItem').on('click', function(){
    sidebar.removeClass('active');
  });
});