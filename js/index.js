$(window).scroll(function() {
  var $window = $(window),
    $body = $('body'),
    $panel = $('.panel');

  var scroll = $window.scrollTop() + ($window.height() / 3);
  var height = $(window).scrollTop();

  if (height > 280) {
    $('.crown').css({"visibility": "visible"}).addClass('animated fadeInUp');
  }

  if (height > 1190) {
    $('.praise').css({"visibility": "visible"}).addClass('animated fadeInUp');
  }

  if (height > 2300) {
    $('.ring').css({"visibility": "visible"}).addClass('animated fadeInUp');
  }

  $panel.each(function() {
    var $this = $(this);

    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
      $body.removeClass(function(index, css) {
        return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
      });

      $body.addClass('color-' + $(this).data('color'));
    }
  });
}).scroll();
