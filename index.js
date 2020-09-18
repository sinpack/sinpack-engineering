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


/////////////////////// CONTACT EMAIL FORM /////////////////
(function() {
  function validEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  function validateHuman(honeypot) {
    if (honeypot) {  //if hidden form filled up
      console.log("Robot Detected!");
      return true;
    } else {
      console.log("Welcome Human!");
    }
  }

  // get all data in form and return object
  function getFormData(form) {
    var elements = form.elements;

    var fields = Object.keys(elements).filter(function(k) {
          return (elements[k].name !== "honeypot");
    }).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = {};
    fields.forEach(function(name){
      var element = elements[name];

      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

    console.log(formData);
    return formData;
  }

  function handleFormSubmit(event) {  // handles form submit without any jquery
    event.preventDefault();           // we are submitting via xhr below
    var form = event.target;
    var data = getFormData(form);         // get the values submitted in the form

    /* OPTION: Remove this comment to enable SPAM prevention, see README.md
    if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
      return false;
    }
    */

    if( data.email && !validEmail(data.email) ) {   // if email is not valid show error
      var invalidEmail = form.querySelector(".email-invalid");
      if (invalidEmail) {
        invalidEmail.style.display = "block";
        return false;
      }
    } else {
      disableAllButtons(form);
      var url = form.action;
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      // xhr.withCredentials = true;
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {
          console.log(xhr.status, xhr.statusText);
          console.log(xhr.responseText);
          var formElements = form.querySelector(".form-elements")
          if (formElements) {
            formElements.style.display = "none"; // hide form
          }
          var thankYouMessage = form.querySelector(".thankyou_message");
          if (thankYouMessage) {
            thankYouMessage.style.display = "block";
          }
          return;
      };
      // url encode form data for sending as post data
      var encoded = Object.keys(data).map(function(k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      }).join('&');
      xhr.send(encoded);
    }
  }

  function loaded() {
    console.log("Contact form submission handler loaded successfully.");
    // bind to the submit event of our form
    var forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  };
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();
