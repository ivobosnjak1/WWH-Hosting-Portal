$(document).ready(function() {

$(window).scroll(function () {
    console.log($(window).scrollTop())
  if ($(window).scrollTop() > 48) {
    $('#scroll').addClass('navbar-fixed');
  }
  if ($(window).scrollTop() < 49) {
    $('#scroll').removeClass('navbar-fixed');
  }
});
});
blink {
  animation: 2s linear infinite condemned_blink_effect;
}

@keyframes condemned_blink_effect {
  0% {
    visibility: hidden;
  }
  50% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}