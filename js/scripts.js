/*!
    * Start Bootstrap - Freelancer v6.0.0 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop(); 
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict



   function mailto(id) {
     location.href = "mailto:"+id+"@impleview.com?subject=["+id+"] Consultation Request for <Add your property address>&body=<Add your request. Include the plan and details as much as possible.>";
   }

    function quoteFunction(id) {
        var sqft = document.getElementById("sqft").value;
        
          if (id == "quote") {
              if (sqft == 9) {
                quote = "Email to discuss."
              } else
            if (sqft == 8) {
              quote = "$1,950-$4,950"
            } else
            if (sqft == 7) {
              quote = "$1,400-$2,800"
            } else
            if (sqft == 6) {
                quote = apply_advanced(740 + additional())
            } else
            if (sqft == 5) {
                quote = apply_advanced(720 + additional()) 
            } else
            if (sqft == 4) {
                quote = apply_advanced(690 + additional())
            } else
            if (sqft == 3) {
                quote = apply_advanced(650 + additional()) 
            } else
            if (sqft == 2) {
                quote = apply_advanced(600 + additional()) 
            } else
            if (sqft == 1) {
                quote = apply_advanced(540 + additional()) 
            } 
        }

        document.getElementById("output1").value = "Price Estimate: " + quote;

    }
    function additional(){
    	var stories = document.getElementById("stories").value;
        var jadu = document.getElementById("jadu").value;
        var adu = document.getElementById("adu").value;
        var additional = 0; 
        if (stories == 2) {additional = additional + 30}
        if (stories == 3) {additional = additional + 120}
        if (jadu == "yes") {additional = additional + 165}
        if (adu == "attached") {additional = additional + 195}
        if (adu == "detached") {additional = additional + 460}
        return additional;
    
    }
    function apply_advanced(quote){
        var window_quote = document.getElementById("window_quote").value;
        var saver = document.getElementById("saver").value;
        if (window_quote == "yes") {quote = quote * 1.12}    
        if (saver == "paloalto") {quote = quote * 1.19}
        if (saver == "ultimate") {quote = quote * 1.23}
       return "$" + Math.ceil(quote) + " - $" + Math.ceil(quote * 1.15);
    }
    function pricing_note(){
      return " (CF1R registration fees included)";
    }
    function popupFunction(id) {
      var popup = document.getElementById(id);
      popup.classList.toggle("show");
    }
  
