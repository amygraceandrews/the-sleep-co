// A $( document ).ready() block.

// Hamburger Menu

$(document).ready(function() {
  $(".hamburger-button").click(function() {
      $(this).toggleClass("active");
      $(".mobile-menu").fadeToggle()
  });
});



// Light Gallery

lightGallery(document.getElementById('lightgallery'), {
  speed: 500,
  download: false
  
});


// Light Gallery 2

lightGallery(document.getElementById('lightgallery-2'), {
  speed: 500,
  download: false
  
});