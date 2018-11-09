$('a').on('click', function() {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 500);
  }
});
