
//blog slider
$('.blog_post_slider').on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
  }).owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    nav: true,
    smartSpeed: 2000,
    navText: [
      '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
      '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>'


    ]
  });

//township
/* $("#sub1,#sub2,#sub3,#sub4,#sub5,#sub6").hover(function() {
      $("#sub1-hover,#sub2-hover,#sub3-hover,#sub4-hover,#sub5-hover,#sub6-hover").css("animation-name","slide");
      
  });*/



//onscroll change position of element

var targetOffset = $("#js__scroll-to-section").offset().top;

var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > targetOffset ) {   

      $('#js__scroll-to-section .right-line').css({"transform":"translateY(-430px)","transition-duration":"1s"});

      $('#js__scroll-to-section .right-line2').css({"transform":"translateY(-530px)","transition-duration":"1s"});

      $('#js__scroll-to-section .left-line').css({"transform":"translateY(430px)","transition-duration":"1s"});
      
      $('#js__scroll-to-section .left-line2').css({"transform":"translateY(530px)","transition-duration":"1s"});

     /* $('#about #about-heading-line').css({"transform":"translateY(300px)","transition-duration":"3s"});
      $('#about .g-promo-section__img-right--lg:before').css({"transform":"translateY(-300px)","transition-duration":"3s"});*/


    } else{

       $('#js__scroll-to-section .right-line').css({"transform":"translateY(0px)","transition-duration":"1s"});

       $('#js__scroll-to-section .right-line2').css({"transform":"translateY(0px)","transition-duration":"1s"});

       $('#js__scroll-to-section .left-line').css({"transform":"translateY(0px)","transition-duration":"1s"});

       $('#js__scroll-to-section .left-line2').css({"transform":"translateY(0px)","transition-duration":"1s"});

    }
});
    


//onscroll change position of element

var targetOffset2 = $("#about #about-heading-line").offset().top;

var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > targetOffset2 ) {   
      
      $('#about #about-heading-line').css({"transform":"translateY(300px)","transition-duration":"1s"});
     
      $('#about .g-promo-section__img-right--lg #about-heading-line-right').css({"transform":"translateY(-300px)","transition-duration":"1s"});


    } else{

      $('#about #about-heading-line').css({"transform":"translateY(0px)","transition-duration":"1s"});

      $('#about .g-promo-section__img-right--lg #about-heading-line-right').css({"transform":"translateY(0px)","transition-duration":"1s"});

     
    }
});


//onscroll change position of element

var targetOffset3 = $("#about").offset().top;

var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > targetOffset3 ) {   
      

      /*$('#blog .right-line2').css({"transform":"translateY(-680px)","transition-duration":"3s"});

      $('#blog .left-line').css({"transform":"translateY(575px)","transition-duration":"4s"});
      
      $('#blog .left-line2').css({"transform":"translateY(680px)","transition-duration":"4s"});*/


    } else{

     $('#about .g-promo-section__img-right--lg #about-heading-line-right').css({"transform":"translateY(0px)","transition-duration":"5s"});

      /* $('#blog .right-line2').css({"transform":"translateY(0px)","transition-duration":"5s"});

       $('#blog .left-line').css({"transform":"translateY(0px)","transition-duration":"3s"});

       $('#blog .left-line2').css({"transform":"translateY(0px)","transition-duration":"3s"});*/
    }
});



/*slider on video*/

/*$(function() {
    $("<link/>", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,800,700,600,300"
    }).appendTo("head");
});*/
