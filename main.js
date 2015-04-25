(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'hammerjs'], factory);
  } else if (typeof exports === 'object') {
    factory(require('jquery'), require('hammerjs'));
  } else {
    factory(jQuery, Hammer);
  }
}(function($, Hammer) {
  function hammerify(el, options) {
    var $el = $(el);
    if(!$el.data("hammer")) {
      $el.data("hammer", new Hammer($el[0], options));
    }
  }

  $.fn.hammer = function(options) {
    return this.each(function() {
      hammerify(this, options);
    });
  };

  // extend the emit method to also trigger jQuery events
  Hammer.Manager.prototype.emit = (function(originalEmit) {
    return function(type, data) {
      originalEmit.call(this, type, data);
      $(this.element).trigger({
        type: type,
        gesture: data
      });
    };
  })(Hammer.Manager.prototype.emit);
}));


$(document).ready(function () {
  $window = $(window);

  //smooth scroll
  $('a[href*=#]').click(function () {
    if (!$(this).attr('data-slide')) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
        if ($target.length) {
          var targetOffset = ( $('#navbar').height() * -1 ) - 10 + $target.offset().top;
          $('html,body').animate({scrollTop: targetOffset}, 1000);
          return false;
        }
      }
    };
  });

  if ($('.carousel').length) {
    $('.carousel').hammer();

    $('.carousel').on('swipeleft', function() {
      $(this).carousel('prev');
    });

    $('.carousel').on('swiperight', function() {
      $(this).carousel('next');
    });
  }

  if ($('#sidebar').length) {
    function onScroll(event) {
      var scrollPosition = $(document).scrollTop();
      $('#sidebar a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
          $('#sidebar ul li a').removeClass("active");
          currentLink.addClass("active");
        } else {
          currentLink.removeClass("active");
        };

      });
    }

    $('#sidebar a').first().addClass('active');
    $(document).on("scroll", onScroll);
  }

  if ($('.parallax').length) {
    setTimeout(function () {
      $(window).trigger('resize').trigger('scroll');
    }, 600);
  }
});
