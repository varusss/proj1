$(document).ready(function() {
    $(window).scroll(function() {
        $('.fadeIn').each(function(i) {
            var bottomObject = $(this).position().top + $(this).outerHeight();
            var bottomWindow = $(window).scrollTop() + $(window).height();
            if($(window).width() > 1024){
              if (bottomWindow > bottomObject ) {
                  $(this).animate({
                      'opacity': '1',
                  }, 1000);
              }
            }
        })
    })
})
