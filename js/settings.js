$(function() {
  'use strict';

  /* --------------------------------------------------------------------------- */
  /*  Flex Slider
     /* --------------------------------------------------------------------------- */
  (function() {
    $('.flexslider').flexslider({
      animation: 'fade', //String: Select your animation type, 'fade' or 'slide'
      slideDirection: 'horizontal', //String: Select the sliding direction, 'horizontal' or 'vertical'
      slideshow: true, //Boolean: Animate slider automatically
      slideshowSpeed: 3000, //Integer: Set the speed of the slideshow cycling, in milliseconds
      animationDuration: 600, //Integer: Set the speed of animations, in milliseconds
      directionNav: true, //Boolean: Create navigation for previous/next navigation? (true/false)
      controlNav: true, //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
      keyboardNav: true, //Boolean: Allow slider navigating via keyboard left/right keys
      mousewheel: false, //Boolean: Allow slider navigating via mousewheel
      prevText: '', //String: Set the text for the 'previous' directionNav item
      nextText: '', //String: Set the text for the 'next' directionNav item
      pausePlay: false, //Boolean: Create pause/play dynamic element
      pauseText: '', //String: Set the text for the 'pause' pausePlay item
      playText: 'Play', //String: Set the text for the 'play' pausePlay item
      randomize: false, //Boolean: Randomize slide order
      slideToStart: 0, //Integer: The slide that the slider should start on. Array notation (0 = first slide)
      animationLoop: true, //Boolean: Should the animation loop? If false, directionNav will received 'disable' classes at either end
      pauseOnAction: true, //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
      pauseOnHover: false, //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
      controlsContainer: '', //Selector: Declare which container the navigation elements should be appended too. Default container is the flexSlider element. Example use would be '.flexslider-container', '#container', etc. If the given element is not found, the default action will be taken.
      manualControls: ''
    });
  })();

  /* ---------------------------------------------------------------------- */
  /*  Easytabs
     /* ---------------------------------------------------------------------- */
  (function() {
    // Run easytabs
    $('#content-wrapper')
      .easytabs({
        animate: true,
        updateHash: true,
        transitionIn: 'slideDown',
        transitionOut: 'slideUp',
        animationSpeed: 600,
        tabs: '.tab',
        tabActiveClass: 'active'
      })
      .bind('easytabs:after', function(
        e,
        $clicked,
        $targetPanel
      ) {
        var showCopyrightOn = [
          '#resume',
          '#contacts',
          '#blog'
        ];
        if (
          showCopyrightOn.indexOf($targetPanel.selector) !=
          -1
        ) {
          $('#copyright').html('Eugen Istoc &copy; 2015');
        } else {
          $('#copyright').html('Dealing with it...');
        }
      });
  })();

  /* ---------------------------------------------------------------------- */
  /*  Logo, Slider and audio
     /* ---------------------------------------------------------------------- */
  (function() {
    // Needed variables
    var $logo = $('#logo'),
      $slider = $('.slider-wrapper'),
      audio = document.getElementsByTagName('audio')[0];

    $('.tab-notmain').click(function() {
      $logo.fadeIn('slow');
      $slider.slideUp(500);
    });

    $('.tab-main').click(function() {
      $logo.fadeOut('slow');
      $slider.delay(1000).slideDown(500);
    });
  })();

  /* ---------------------------------------------------------------------- */
  /*  Portfolio
     /* ---------------------------------------------------------------------- */
  (function() {
    // Needed variables
    var $container = $('#portfolio-content'),
      $filter = $('#portfolio-filter');

    if (document.location.hash.substr(1) === 'portfolio') {
      $container.isotope();
    } else {
      $(window).hashchange(function() {
        if (
          document.location.hash.substr(1) === 'portfolio'
        ) {
          $container.isotope();
        }
      });
    }

    $container.imagesLoaded(function() {
      $container.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
          duration: 750,
          easing: 'linear'
        }
      });
    });

    // Isotope Filter
    $filter.find('a').click(function() {
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    });

    // Copy categories to item classes
    $filter.find('a').click(function() {
      $filter.find('a').removeClass('current');
      $(this).addClass('current');
    });
  })();

  /* ---------------------------------------------------------------------- */
  /*  Fancybox
     /* ---------------------------------------------------------------------- */
  (function() {
    $('.fancybox').fancybox();
    $('.fancybox-media').fancybox({
      openEffect: 'fade',
      closeEffect: 'fade',
      helpers: {
        media: {}
      }
    });
  })();

  /* ---------------------------------------------------------------------- */
  /*  Modernizr Check csstransforms3d
     /* ---------------------------------------------------------------------- */
  (function() {
    Modernizr.load({
      test:
        Modernizr.csstransforms3d &&
        Modernizr.csstransitions,
      yep: 'js/jquery.hoverfold.js',
      nope: 'css/fallback-portfolio.css',
      callback: function(url, result, key) {
        if (url === 'js/jquery.hoverfold.js') {
          $('#portfolio-content').hoverfold();
        }
      }
    });
  })();

  /* --------------------------------------------------------------------------- */
  /*  In-Field Labels
     /* --------------------------------------------------------------------------- */
  (function() {
    $('.flabel').inFieldLabels();
  })();

  $(document).ready(function() {
    if (window.location.href.indexOf('sent=true') !== -1) {
      $('.form-success').show();
    }

    $('li.tab').click(function() {
      $('.form-success').hide();
    });
  });
});
