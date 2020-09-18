let test = document.getElementById("test");
let techbar1 = document.getElementById("techbar1");
let checkTechBar = false;

test.addEventListener("mouseenter", function() {
  $(".techbar").fadeIn(500);
});

test.addEventListener("mouseleave", function() {
  // This handler will be executed only once when the cursor
  // moves over the dropdown list
  setTimeout(function() {
    if (checkTechBar === true) {
      console.log("KATI GINETAI 3");
    } else {
      $(".techbar").fadeOut(300);
    }
  }, 500);
});


techbar1.addEventListener("mouseenter", function() {
  //Check if the cursor is inside the div
  checkTechBar = true;
});

techbar1.addEventListener("mouseleave", function() {
  //Check if the cursor is inside the div
  checkTechBar = false;
  $(".techbar").fadeOut(500);
});

// SMOOTH SCROLLING
$(document).ready(function() {
  // $(window).on("load", function(){
  //   // First, make sure we're on the index page. All others can skip this.
  //   if( window.location.pathname == "/" || window.location.pathname =="/index.html" ){
  //     // so we're on the index page. Any index processing can happen here.
  //     //   For our use, we want to get the hash (if we have one) and trim off the leading hash:
  //     if (window.location.hash) {
  //       let mySection = window.location.hash.substring(1); // start at the SECOND char to the end
  //
  //       // now, we want to trigger the proper link:
  //       $(`a[data-section='${mySection}']`).trigger("click");
  //     }
  //   }
  // }


  // Add smooth scrolling to all links
  var base = new String(document.location.pathname).substring(document.location.pathname.lastIndexOf('/') + 1);
  if (base == "index.html") {
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1200, function() {

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;


        });
      } // End if
    });
  }


});
////////////////////////////////////////////////////////////

// VIDEO PLAYER STOPPING WHEN MODAL CLOSES

$('#exampleModal2').on('hidden.bs.modal', function() {
  for (var i = 1; i < 3; i++) {
    var myVideo = $("#video" + i);
    $(this).find(myVideo)[0].pause();
    $(this).find(myVideo)[0].currentTime = 0;
  }
})

$('#exampleModal4').on('hidden.bs.modal', function() {
  for (var i = 3; i < 7; i++) {
    var myVideo = $("#video" + i);
    $(this).find(myVideo)[0].pause();
    $(this).find(myVideo)[0].currentTime = 0;
  }
})

$('#exampleModal5').on('hidden.bs.modal', function() {
  for (var i = 8; i < 10; i++) {
    var myVideo = $("#video" + i);
    $(this).find(myVideo)[0].pause();
    $(this).find(myVideo)[0].currentTime = 0;
  }
})
///////////////////////////////////////////////////////////

// STOP SCROLLING WHILE CAROUSEL ACTIVE

// $('#carouselExampleIndicators1').on('slide.bs.carousel', function() {
//   // $('.modal').scrollTop(0);
//
//
// });


////////////////////////////////////////////////////////////

// NAVBAR SCROLLING
// add padding top to show content behind navbar
$('body').css('padding-top', $('.navbar').outerHeight() + 'px');

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
  var last_scroll_top = 0;
  $(window).on('scroll', function() {
    scroll_top = $(this).scrollTop();
    if (scroll_top < last_scroll_top) {
      $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
    } else {
      $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
    }
    last_scroll_top = scroll_top;
  });
}

//////////////////////////////////////////////////////////
// Get the video
var videopromo = document.getElementById("video-promo");

// Get the button
var btnpromo = document.getElementById("btn-promo");

// Pause and play the video, and change the button text
function myFunction() {
  if (videopromo.paused) {
    videopromo.play();
    btnpromo.innerHTML = "Pause";
  } else {
    videopromo.pause();
    btnpromo.innerHTML = "Play";
  }
}
///////////////////////////////////////////////////////////
