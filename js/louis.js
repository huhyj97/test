function show() {
  document.getElementById('sidebar').classList.toggle('active');
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollpos = window.pageYOffset;

  if (prevScrollpos > currentScrollpos) {
    document.getElementById("hd").style.top = "0";
  } else {  document.getElementById("hd").style.top = "-100px";
  }
  prevScrollpos = currentScrollpos;
}

var slides = document.getElementsByClassName("slide");
var index = 0;

function goLeft(){
  if (index == 0) index = slides.length - 1;
  else index--;
  slides[0].style.marginLeft = "-" + index * 100 + "%";
}

function goRight() {
    if (index == slides.length - 1) index = 0;
    else index++;
  slides[0].style.marginLeft = "-" + index * 100 + "%";
}


//헤더 고정
// var didScroll; var lastScrollTop = 0; var delta = 5; var navbarHeight = $('.hd').outerHeight(); $(window).scroll(function(event){ didScroll = true; }); setInterval(function() { if (didScroll) { hasScrolled(); didScroll = false; } }, 250); function hasScrolled() { var st = $(this).scrollTop(); if(Math.abs(lastScrollTop - st) <= delta) return;  if (st > lastScrollTop && st > navbarHeight){  $('header').removeClass('nav-down').addClass('nav-up'); } else {  if(st + $(window).height() < $(document).height()) { $('header').removeClass('nav-up').addClass('nav-down'); } } lastScrollTop = st;
