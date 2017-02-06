$(document).ready(function(){

var  mn = $("#nav");
    ns = "nav-scrolled";
    hdr = $("#header").height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr  ) {
    mn.addClass(ns);
  } else {
    mn.removeClass(ns);
  }
});

});

