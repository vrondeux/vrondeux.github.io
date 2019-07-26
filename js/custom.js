
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


/* Magnific Popup
-----------------------------------------------*/
$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
         fixedContentPos: false,
    });
});


/* Istope Portfolio
-----------------------------------------------*/
jQuery(document).ready(function($){

  if ( $('.iso-box-wrapper').length > 0 ) { 

      var $container  = $('.iso-box-wrapper'), 
        $imgs     = $('.iso-box img');

      $container.imagesLoaded(function () {

        $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
        });

        $imgs.load(function(){
          $container.isotope('reLayout');
        })

      });

      //filter items on button click

      $('.filter-wrapper li a').click(function(){

          var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({ 
        filter: filterValue,
        animationOptions: { 
            duration: 750, 
            easing: 'linear', 
            queue: false, 
        }                
      });             

      // don't proceed if already selected 

      if ( $this.hasClass('selected') ) { 
        return false; 
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

        return false;
      }); 

  }

});


$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  /*  smoothscroll
  ----------------------------------------------*/
   $(function() {
        $('#home a, .navbar-default a, #feature a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });
  


  /* home slideshow section
  -----------------------------------------------*/
  $(function(){
    jQuery(document).ready(function() {
    $('#home').backstretch([
//       "images/home-bg-slideshow11.jpg", 
//       "images/home-bg-slideshow12.jpg", 
//       "images/home-bg-slideshow13.jpg",  
       "images/home-bg-slideshow15.jpg", 
       // "images/home-bg-slideshow2.jpg",
       // "images/home-bg-slideshow3.jpg",
        ],  {duration: 5000, fade: 950});
    });
  })


   /* Flexslider
    -----------------------------------------------*/
    $(window).load(function() {
      $('.flexslider').flexslider({
         animation: "slide"
      });
    });
  

  /* Parallax section
    -----------------------------------------------*/
  function initParallax() {
    $('#about').parallax("100%", 0.1);
    $('#feature').parallax("100%", 0.3);
    $('#about').parallax("100%", 0.1);
//    $('#video').parallax("100%", 0.2);
    $('#menu').parallax("100%", 0.3);
    $('#team').parallax("100%", 0.3);
    $('#gallery').parallax("100%", 0.1);
    $('#contact').parallax("100%", 0.2);
  }
  initParallax();


  /* Nivo lightbox
    -----------------------------------------------*/
  $('#gallery .col-md-4 a').nivoLightbox({
        effect: 'fadeScale',
    });


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

/* Copyright date
-------------------------------*/
$('#copyright').find('p').find('span.year').html(new Date().getFullYear());

/* Obfuscate phone number
-------------------------------*/
cell_element = $(".allo");

cell_element.each(function(index) {

  cell_index = 0;
  cell_txt = cell_ref = cell_1 = cell_2 = '';

  while(cell_index < cell_element.text().length) {

    cell_tmp = cell_element.text().charAt(cell_index);

    if (!isNaN(1*cell_tmp)) {

      cell_1 = cell_2 = cell_element.text().charAt(cell_index)-1;

        if (cell_1 == -1) {
          cell_1 = ' ';
          cell_2 = '';
        }

    } else {

      cell_1 = cell_2 = cell_tmp;

    }

    cell_txt += '' + cell_1;
    cell_ref += '' + cell_2;
    cell_index++;
  }

  cell_element.text('+32 ' + cell_txt).attr('href', 'tel:+32' + cell_ref);

});

