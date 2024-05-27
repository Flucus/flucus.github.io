/** 
  * Template Name: SpicyX
  * Version: 1.0  
  * Template Scripts
  * Author: MarkUps
  * Author URI: http://www.markups.io/

  Custom JS
  

  1. FIXED NAVBAR 
  2. TOP SLIDER
  3. MENU SMOOTH SCROLLING
  4. SCROLL TOP BUTTON
  5. CURRENT YEAR
  
**/

jQuery(function ($) {


  /* ----------------------------------------------------------- */
  /*  1. FIXED NAVBAR 
  /* ----------------------------------------------------------- */


  jQuery(window).bind('scroll', function () {
    if (jQuery(window).scrollTop() > 200) {
      jQuery('.mu-main-navbar').addClass('navbar-bg');
      jQuery('.navbar-brand').addClass('navbar-brand-small');
    } else {
      jQuery('.mu-main-navbar').removeClass('navbar-bg');
      jQuery('.navbar-brand').removeClass('navbar-brand-small');
    }
  });

  /* ----------------------------------------------------------- */
  /*  2. TOP SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */

  jQuery('.mu-top-slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    fade: true,
    cssEase: 'linear'
  });

  /* ----------------------------------------------------------- */
  /*  3. MENU SMOOTH SCROLLING
  /* ----------------------------------------------------------- */

  //MENU SCROLLING WITH ACTIVE ITEM SELECTED

  // Cache selectors
  var lastId,
    topMenu = $(".mu-main-nav"),
    topMenuHeight = topMenu.outerHeight() + 13,
    // All list items
    menuItems = topMenu.find('a[href^=\\#]'),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function (e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 32;
    jQuery('html, body').stop().animate({
      scrollTop: offsetTop
    }, 1500);
    jQuery('.navbar-collapse').removeClass('in');
    e.preventDefault();
  });

  // Bind to scroll
  jQuery(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent().removeClass("active")
        .end().filter("[href=\\#" + id + "]").parent().addClass("active");
    }
  })

  /* ----------------------------------------------------------- */
  /*  4. SCROLL TOP BUTTON
  /* ----------------------------------------------------------- */

  //Check to see if the window is top if not then display button

  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 300) {
      jQuery('.scrollToTop').fadeIn();
    } else {
      jQuery('.scrollToTop').fadeOut();
    }
  });

  //Click event to scroll to top

  jQuery('.scrollToTop').click(function () {
    jQuery('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });

});

document.addEventListener('DOMContentLoaded', function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
  script.onload = function () {
    particlesJS("snow", {
      "particles": {
        "number": {
          "value": 50,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#d0e7f5"
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false
          }
        },
        "size": {
          "value": 10,
          "random": true,
          "anim": {
            "enable": false
          }
        },
        "line_linked": {
          "enable": false
        },
        "move": {
          "enable": true,
          "speed": 2.5,
          "direction": "bottom",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": true,
            "rotateX": 300,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "events": {
          "onhover": {
            "enable": false
          },
          "onclick": {
            "enable": false
          },
          "resize": false
        }
      },
      "retina_detect": true
    });
  }
  document.head.append(script);
});

/* ----------------------------------------------------------- */
/*  5. CURRENT YEAR
/* ----------------------------------------------------------- */
document.getElementById('current-year').textContent = new Date().getFullYear();