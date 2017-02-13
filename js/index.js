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


// Get the modal
var modal = $('#myModal1');

// Get the image and insert it inside the modal - use its "alt" text as a caption
	 img = $('img-1');
	 modalImg = $("CF1.png");
	 captionText = $("caption");

$('#img-1').click(function(){
    $('#myModal1').css("display", "block");
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
});

var modal = $('#myModal2');

// Get the image and insert it inside the modal - use its "alt" text as a caption
	 img = $('img-2');
	 modalImg = $("CF2.png");
	 captionText = $("caption");

$('#img-2').click(function(){
    $('#myModal2').css("display", "block");
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
});

var modal = $('#myModal3');

// Get the image and insert it inside the modal - use its "alt" text as a caption
	 img = $('img-3');
	 modalImg = $("CF3.png");
	 captionText = $("caption");

$('#img-3').click(function(){
    $('#myModal3').css("display", "block");
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
});


// Get the <span> element that closes the modal
// var span = $(".close");

// // When the user clicks on <span> (x), close the modal
// $('.close').click(function() { 
//   $('.modal.'),css("display", "none";
// }

});
