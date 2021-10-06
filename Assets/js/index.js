$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$('.sech').click(function () {
  $('.section-3-img>div').hide()
  $('.' + $(this).attr('id')).show(700)

  $(this).css("background-color", "#24b662");
  $(this).css("color", "white");
  $(this).siblings().css("background-color", "white");
  $(this).siblings().css("color", "black");
});


var app = document.getElementById('writer');

var typewriter = new Typewriter(app, {
  delay: 70,
});

typewriter
  .pauseFor(1000)
  .typeString('Gələcəyinizi')
  .pauseFor(300)
  .deleteChars(12)
  .typeString('Bizimlə')
  .pauseFor(300)
  .deleteChars(7)
  .typeString('Qurun!!!')
  .pauseFor(300)
  .deleteChars(8)
  .typeString('MilliSoft')
  .start();


mybutton = document.getElementById("top-buttun");


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
}

$('#openmenu').click(function () {
  $('#mainmenu').slideToggle();
});
