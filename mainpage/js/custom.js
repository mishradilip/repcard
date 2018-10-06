$(function() {
  var mq = window.matchMedia("(min-width: 992px)");
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $('.owl-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    nav:false,
    center:true,
    dots:false,
    items:1,
    autoplay:true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut'
  })

  $('input').blur(function() {
    var $this = $(this);
    if ($this.val()){
      $this.addClass('used');
    }
    else
      $this.removeClass('used');
  });

  $(".form-wrapper input").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).next().focus();
    }
  });

  $('.btn-verify').on('click', function(){
    $('.form-section-block').hide();
    $('.success-block').show();
  });

  $(window).scroll(function(event) {
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll && window.matchMedia("(min-width: 768px)").matches) {
      //hasScrolled();
      fixedHeader()
      didScroll = false;
    }
  }, 250);

  function fixedHeader() {
    var st = $(this).scrollTop();
    if(st > navbarHeight) {
      $('.header-wrapper').addClass('nav-fixed');
    } else {
      $('.header-wrapper').removeClass('nav-fixed');
    }
  }

  function hasScrolled() {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta)
      return;
    if (st > lastScrollTop && st > navbarHeight) {
      $('.header-wrapper').removeClass('nav-down').addClass('nav-up');
    } else if (st < navbarHeight) {
      $('.header-wrapper').removeClass('nav-down nav-up');
    }
    else {
      if (st + $(window).height() < $(document).height()) {
        $('.header-wrapper').removeClass('nav-up').addClass('nav-down');
      }
    }
    lastScrollTop = st;
  }
})
