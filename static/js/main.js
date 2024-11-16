(function ($) {
  'use strict';

  /*
  |--------------------------------------------------------------------------
  | Template Name: Bizmax
  | Author: Parv Infotech
  | Version: 1.0.0
  |--------------------------------------------------------------------------
  |--------------------------------------------------------------------------
  | TABLE OF CONTENTS:
  |--------------------------------------------------------------------------
  |
  | 1. Preloader
  | 2. Mobile Menu
  | 3. Sticky Header
  | 4. Dynamic Background
  | 5. Slick Slider
  | 6. Parallax Slider Swiper
  | 7. Isotop Initialize
  | 8. Review
  | 9. Modal Video
  | 10. Tabs
  | 11. Accordian
  | 12. Counter Animation
  | 13. Ripple
  | 14. Progress Bar
  | 15. Dynamic contact form
  |
  */

  /*--------------------------------------------------------------
    Scripts initialization
  --------------------------------------------------------------*/
  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  $(window).on('load', function () {
    $(window).trigger('scroll');
    $(window).trigger('resize');
    preloader();
    isotopInit();
  });

  $(function () {
    $(window).trigger('resize');
    mainNav();
    stickyHeader();
    dynamicBackground();
    slickInit();
    parallaxSwiperSlider();
    isotopInit();
    review();
    modalVideo();
    tabs();
    accordian();
    counterInit();
    rippleInit();
    progressBar();
    countDown();
    ecommerce();
    if ($.exists('.wow')) {
      new WOW().init();
    }
    if ($.exists('.player')) {
      $('.player').YTPlayer();
    }
  });

  $(window).on('scroll', function () {
    counterInit();
  });

  /*--------------------------------------------------------------
    1. Preloader
  --------------------------------------------------------------*/
  function preloader() {
    $('.cs_preloader_in').fadeOut();
    $('.cs_preloader').delay(150).fadeOut('slow');
  }

  /*--------------------------------------------------------------
    2. Mobile Menu
  --------------------------------------------------------------*/
  function mainNav() {
    $('.cs_nav').append('<span class="cs-munu_toggle"><span></span></span>');
    $('.menu-item-has-children').append(
      '<span class="cs-munu_dropdown_toggle"></span>',
    );
    $('.cs-munu_toggle').on('click', function () {
      $(this)
        .toggleClass('cs-toggle_active')
        .siblings('.cs_nav_list')
        .slideToggle();
    });
    $('.cs-munu_dropdown_toggle').on('click', function () {
      $(this).toggleClass('active').siblings('ul').slideToggle();
      $(this).parent().toggleClass('active');
    });
    // Search Toggle
    $('.cs_header_search_btn').on('click', function () {
      $(this).parents('.cs_header_search_wrap').toggleClass('active');
    });
  }

  /*--------------------------------------------------------------
    3. Sticky Header
  --------------------------------------------------------------*/
  function stickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $('.cs_sticky_header');
    var headerHeight = $header.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass('cs-gescout_sticky');
      } else {
        $header.removeClass('cs-gescout_sticky');
        $header.removeClass('cs-gescout_show');
      }

      if ($header.hasClass('cs-gescout_sticky')) {
        if (windowTop < lastScrollTop) {
          $header.addClass('cs-gescout_show');
        } else {
          $header.removeClass('cs-gescout_show');
        }
      }

      lastScrollTop = windowTop;
    });
  }

  /*--------------------------------------------------------------
    4. Dynamic Background
  --------------------------------------------------------------*/
  function dynamicBackground() {
    $('[data-src]').each(function () {
      var src = $(this).attr('data-src');
      $(this).css({
        'background-image': 'url(' + src + ')',
      });
    });
  }

  /*--------------------------------------------------------------
    5. Slick Slider
  --------------------------------------------------------------*/
  function slickInit() {
    if ($.exists('.cs_hero_slider')) {
      $('.cs_hero_slider').each(function () {
        var $slickActive = $(this).find('.cs_slider_activate');
        $slickActive.slick({
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          autoplay: false,
          fade: true,
          autoplaySpeed: 7000,
          speed: 500,
          cssEase: 'ease-in-out',
          prevArrow: $(this).find('.cs_slider_prev'),
          nextArrow: $(this).find('.cs_slider_next'),
        });
      });
    }
    if ($.exists('.cs_sidebar_slider')) {
      $('.cs_sidebar_slider').each(function () {
        var $slickActive = $(this).find('.cs_slider_activate');
        $slickActive.slick({
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 7000,
          speed: 500,
          cssEase: 'ease-in-out',
          prevArrow: $(this).find('.cs_slider_prev'),
          nextArrow: $(this).find('.cs_slider_next'),
        });
      });
    }
    if ($.exists('.cs_project_slider')) {
      $('.cs_project_slider').each(function () {
        var $slickActive = $(this).find('.cs_slider_activate');
        $slickActive.slick({
          slidesToShow: 4,
          infinite: true,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          prevArrow: $(this).find('.cs_slider_prev'),
          nextArrow: $(this).find('.cs_slider_next'),
          responsive: [
            {
              breakpoint: 1350,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      });
    }
    if ($.exists('.cs_project_slider_2')) {
      $('.cs_project_slider_2').each(function () {
        var $slickActive = $(this).find('.cs_slider_activate');
        $slickActive.slick({
          slidesToShow: 3,
          infinite: true,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          prevArrow: $(this).find('.cs_slider_prev'),
          nextArrow: $(this).find('.cs_slider_next'),
          responsive: [
            {
              breakpoint: 1350,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      });
    }
    // Testimonial Slider One
    if ($.exists('.cs_testimonial_slider')) {
      $('.cs_testimonial_slider').each(function () {
        var $slickActive = $(this).find('.cs_slider_activate');
        $slickActive.slick({
          slidesToShow: 4,
          infinite: true,
          slidesToScroll: 1,
          variableWidth: true,
          autoplay: true,
          autoplaySpeed: 3000,
          prevArrow: $(this).find('.cs_slider_prev'),
          nextArrow: $(this).find('.cs_slider_next'),
        });
      });
    }
    if ($.exists('.cs_testimonial_slider_2')) {
      $('.cs_testimonial_slider_2').each(function () {
        var $slickActive = $(this).find('.cs_slider_activate');
        $slickActive.slick({
          slidesToShow: 4,
          infinite: true,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          prevArrow: $(this).find('.cs_slider_prev'),
          nextArrow: $(this).find('.cs_slider_next'),
          responsive: [
            {
              breakpoint: 1350,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      });
    }

    // Service Slider One
    if ($.exists('.cs_service_slider')) {
      $('.cs_service_slider').each(function () {
        var $slickActive = $(this).find('.cs_slider_activate');
        $slickActive.slick({
          slidesToShow: 4,
          infinite: true,
          slidesToScroll: 1,
          variableWidth: true,
          autoplay: false,
          autoplaySpeed: 3000,
          prevArrow: $(this).find('.cs_slider_prev'),
          nextArrow: $(this).find('.cs_slider_next'),
        });
      });
    }
    if ($.exists('.cs_service_slider_2')) {
      $('.cs_service_slider_2').each(function () {
        var $slickActive = $(this).find('.cs_slider_activate');
        $slickActive.slick({
          slidesToShow: 4,
          infinite: true,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          prevArrow: $(this).find('.cs_slider_prev'),
          nextArrow: $(this).find('.cs_slider_next'),
          responsive: [
            {
              breakpoint: 1350,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      });
    }
    if ($.exists('.cs_product_slider')) {
      $('.cs_product_slider').each(function () {
        var $slickActive = $(this).find('.cs_slider_activate');
        $slickActive.slick({
          slidesToShow: 4,
          infinite: true,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          dots: true,
          prevArrow: $(this).find('.cs_slider_prev'),
          nextArrow: $(this).find('.cs_slider_next'),
          responsive: [
            {
              breakpoint: 1350,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      });
    }

    // Testimonial Slider Two
    $('.cs_testimonial_thumb').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.cs_testimonial_nav',
    });
    if ($.exists('.cs_testimonial_nav-active')) {
      $('.cs_testimonial_nav-active').each(function () {
        var $slickActive = $(this).find('.cs_testimonial_nav');
        $slickActive.slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          asNavFor: '.cs_testimonial_thumb',
          focusOnSelect: true,
          prevArrow: $(this).find('.cs_slider_prev'),
          nextArrow: $(this).find('.cs_slider_next'),
        });
      });
    }
  }

  /*--------------------------------------------------------------
    6. Parallax Slider Swiper
  --------------------------------------------------------------*/
  function parallaxSwiperSlider() {
    if ($.exists('.cs_parallax_slider')) {
      // Params
      let mainSliderSelector = '.cs_parallax_slider',
        interleaveOffset = 0.5;
      // Main Slider
      let mainSliderOptions = {
        loop: true,
        speed: 1000,
        autoplay: false,
        loopAdditionalSlides: 10,
        grabCursor: true,
        watchSlidesProgress: true,
        // mousewheel: true,
        navigation: {
          nextEl: '.cs_swiper_button_next',
          prevEl: '.cs_swiper_button_prev',
        },
        pagination: false,
        on: {
          init: function () {
            this.autoplay.stop();
          },
          imagesReady: function () {
            this.el.classList.remove('loading');
            this.autoplay.start();
          },
          progress: function (swiper) {
            for (let i = 0; i < swiper.slides.length; i++) {
              let slideProgress = swiper.slides[i].progress,
                innerOffset = swiper.width * interleaveOffset,
                innerTranslate = slideProgress * innerOffset;

              swiper.slides[i].querySelector(
                '.cs_swiper_parallax_bg',
              ).style.transform = 'translateX(' + innerTranslate + 'px)';
            }
          },
          touchStart: function (swiper) {
            for (let i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].style.transition = '';
            }
          },
          setTransition: function (swiper, transition) {
            for (let i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].style.transition = transition + 'ms';
              swiper.slides[i].querySelector(
                '.cs_swiper_parallax_bg',
              ).style.transition = transition + 'ms';
            }
          },
        },
      };
      let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);
    }
  }

  /*--------------------------------------------------------------
    7. Isotop Initialize
  --------------------------------------------------------------*/
  function isotopInit() {
    if ($.exists('.cs_isotop')) {
      $('.cs_isotop').isotope({
        itemSelector: '.cs_isotop_item',
        transitionDuration: '0.60s',
        percentPosition: true,
        masonry: {
          columnWidth: '.cs_grid_sizer',
        },
      });
      /* Active Class of Portfolio*/
      $('.cs_isotop_filter li').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
      });
      /*=== Portfolio filtering ===*/
      $('.cs_isotop_filter').on('click', 'a', function () {
        var filterElement = $(this).attr('data-filter');
        $('.cs_isotop').isotope({
          filter: filterElement,
        });
      });
    }
  }

  /*--------------------------------------------------------------
    8. Review
  --------------------------------------------------------------*/
  function review() {
    $('.cs_rating').each(function () {
      var review = $(this).data('rating');
      var reviewVal = review * 20 + '%';
      $(this).find('.cs_rating_percentage').css('width', reviewVal);
    });
  }

  /*--------------------------------------------------------------
    9. Modal Video
  --------------------------------------------------------------*/
  function modalVideo() {
    if ($.exists('.cs_video_open')) {
      $('body').append(`
        <div class="cs_video_popup">
          <div class="cs_video_popup-overlay"></div>
          <div class="cs_video_popup-content">
            <div class="cs_video_popup-layer"></div>
            <div class="cs_video_popup-container">
              <div class="cs_video_popup-align">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="about:blank"></iframe>
                </div>
              </div>
              <div class="cs_video_popup-close"></div>
            </div>
          </div>
        </div>
      `);
      $(document).on('click', '.cs_video_open', function (e) {
        e.preventDefault();
        var video = $(this).attr('href');

        $('.cs_video_popup-container iframe').attr('src', `${video}`);

        $('.cs_video_popup').addClass('active');
      });
      $('.cs_video_popup-close, .cs_video_popup-layer').on(
        'click',
        function (e) {
          $('.cs_video_popup').removeClass('active');
          $('html').removeClass('overflow-hidden');
          $('.cs_video_popup-container iframe').attr('src', 'about:blank');
          e.preventDefault();
        },
      );
    }
  }

  /*--------------------------------------------------------------
    10. Tabs
  --------------------------------------------------------------*/
  function tabs() {
    $('.cs_tabs .cs_tab_links a').on('click', function (e) {
      var currentAttrValue = $(this).attr('href');
      $('.cs_tabs ' + currentAttrValue)
        .fadeIn(400)
        .siblings()
        .hide();
      $(this).parents('li').addClass('active').siblings().removeClass('active');
      e.preventDefault();
    });
  }

  /*--------------------------------------------------------------
    11. Accordian
  --------------------------------------------------------------*/
  function accordian() {
    $('.cs_accordian').children('.cs_accordian_body').hide();
    $('.cs_accordian.active').children('.cs_accordian_body').show();
    $('.cs_accordian_head').on('click', function () {
      $(this)
        .parent('.cs_accordian')
        .siblings()
        .children('.cs_accordian_body')
        .slideUp(250);
      $(this).siblings().slideDown(250);
      $(this)
        .parent()
        .parent()
        .siblings()
        .find('.cs_accordian_body')
        .slideUp(250);
      /* Accordian Active Class */
      $(this).parents('.cs_accordian').addClass('active');
      $(this).parent('.cs_accordian').siblings().removeClass('active');
    });
  }

  /*--------------------------------------------------------------
    12. Counter Animation
  --------------------------------------------------------------*/
  function counterInit() {
    if ($.exists('.odometer')) {
      $(window).on('scroll', function () {
        function winScrollPosition() {
          var scrollPos = $(window).scrollTop(),
            winHeight = $(window).height();
          var scrollPosition = Math.round(scrollPos + winHeight / 1.2);
          return scrollPosition;
        }

        $('.odometer').each(function () {
          var elemOffset = $(this).offset().top;
          if (elemOffset < winScrollPosition()) {
            $(this).html($(this).data('count-to'));
          }
        });
      });
    }
  }

  /*--------------------------------------------------------------
    13. Ripple
  --------------------------------------------------------------*/
  function rippleInit() {
    if ($.exists('.cs_ripple_version')) {
      $('.cs_ripple_version').each(function () {
        $('.cs_ripple_version').ripples({
          resolution: 512,
          dropRadius: 20,
          perturbance: 0.04,
        });
      });
    }
  }

  /*--------------------------------------------------------------
    14. Progress Bar
  --------------------------------------------------------------*/
  function progressBar() {
    $('.cs_progress').each(function () {
      var progressPercentage = $(this).data('progress') + '%';
      $(this).find('.cs_progress_in').css('width', progressPercentage);
    });
  }

  /*--------------------------------------------------------------
    19. CountDown
  --------------------------------------------------------------*/
  function countDown() {
    if ($.exists('.cs_countdown')) {
      $('.cs_countdown').each(function () {
        var _this = this;
        var el = $(_this).data('countdate');
        var countDownDate = new Date(el).getTime();
        var x = setInterval(function () {
          var now = new Date().getTime();
          var distance = countDownDate - now;
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          );
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          $(_this).find('#cs_count_days').html(days);
          $(_this).find('#cs_count_hours').html(hours);
          $(_this).find('#cs_count_minutes').html(minutes);
          $(_this).find('#cs_count_seconds').html(seconds);

          if (distance < 0) {
            clearInterval(x);
            $(_this).html("<div class='cs_token_expired'>TOKEN EXPIRED<div>");
          }
        }, 1000);
      });
    }
  }

  /*--------------------------------------------------------------
    15. Dynamic contact form
  --------------------------------------------------------------*/
  if ($.exists('#cs-form')) {
    const form = document.getElementById('cs-form');
    const result = document.getElementById('cs-result');

    form.addEventListener('submit', function (e) {
      const formData = new FormData(form);
      e.preventDefault();
      var object = {};
      formData.forEach((value, key) => {
        object[key] = value;
      });
      var json = JSON.stringify(object);
      result.innerHTML = 'Please wait...';

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      })
        .then(async response => {
          let json = await response.json();
          if (response.status == 200) {
            result.innerHTML = json.message;
          } else {
            console.log(response);
            result.innerHTML = json.message;
          }
        })
        .catch(error => {
          console.log(error);
          result.innerHTML = 'Something went wrong!';
        })
        .then(function () {
          form.reset();
          setTimeout(() => {
            result.style.display = 'none';
          }, 5000);
        });
    });
  }
  /*--------------------------------------------------------------
    21. Dynamic contact form
  --------------------------------------------------------------*/
  function ecommerce() {
    // Star Rating Input
    $('.cs_input_rating i').on('click', function () {
      $(this).siblings().removeClass('fa-solid');
      $(this).addClass('fa-solid').prevAll().addClass('fa-solid');
    });
    // Product Single Slider
    $('.cs_single_product_thumb').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.cs_single_product_nav',
    });

    $('.cs_single_product_nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.cs_single_product_thumb',
      focusOnSelect: true,
      arrows: false,
    });
    // Check All
    $('#checkAll').change(function () {
      var isChecked = $(this).prop('checked');
      $('table input[type="checkbox"]').prop('checked', isChecked);
    });
    // Range Slider
    if ($.exists('#slider-range')) {
      $('#slider-range').slider({
        range: true,
        min: 0,
        max: 1000,
        values: [100, 600],
        slide: function (event, ui) {
          $('#amount').val('Price: $' + ui.values[0] + ' - $' + ui.values[1]);
        },
      });
    }
    if ($.exists('#amount')) {
      $('#amount').val(
        'Price: $' +
          $('#slider-range').slider('values', 0) +
          ' - $' +
          $('#slider-range').slider('values', 1),
      );
    }
    // Counter
    $('.cs_increment').click(function () {
      var countElement = $(this).siblings('.cs_quantity_input');
      var count = parseInt(countElement.text());
      count++;
      countElement.text(count);
    });

    $('.cs_decrement').click(function () {
      var countElement = $(this).siblings('.cs_quantity_input');
      var count = parseInt(countElement.text());
      if (count > 0) {
        count--;
        countElement.text(count);
      }
    });
  }
})(jQuery); // End of use strict
