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

  if( $('#sidebar').length ) {
    function onScroll(event) { 
      var scrollPosition = $(document).scrollTop();
      $('#sidebar a').each(function () {
        var currentLink = $(this);
	var refElement = $(currentLink.attr("href"));
	console.log("Position",scrollPosition);
        console.log("From",refElement.position().top);
 	console.log("To", refElement.position().top + refElement.height());
	if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
	  $('#sidebar ul li a').removeClass("active");
          console.log('Found');
	  currentLink.addClass("active");
	} else {
          console.log('Not Found');
	  currentLink.removeClass("active");
	};
	console.log('###');
      });
    }
     $('#sidebar a').first().addClass('active');
    $(document).on("scroll", onScroll);
  }
});
