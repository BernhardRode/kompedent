$(document).ready(function(){
  // cache the window object
  $window = $(window);
  //$body= $('body');

  //smooth scroll
  $('a[href*=#]').click(function() {
    if ( !$(this).attr( 'data-slide') ) {
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
});
