$(document).ready(function () {
  // ===== NAVBAR SCROLL EFFECT =====
  var lastScrollTop = 0;
  var navbar = $(".navbar");

  $(window).on("scroll", function () {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > lastScrollTop && scrollTop > 50) {
      // Scrolling down
      navbar.addClass("scrolled");
    } else if (scrollTop < lastScrollTop && scrollTop <= 50) {
      // Scrolling up
      navbar.removeClass("scrolled");
    }

    lastScrollTop = scrollTop;
  });

  // ===== UNIVERSAL SLIDER FUNCTION =====
  function initSlider($slider) {
    var index = 0;
    var visible = 3;
    var $items = $slider.find(".slider-items .pop");
    var total = $items.length;

    function moveSlide() {
      var offset = -(index * (100 / visible));
      $slider
        .find(".slider-items")
        .css("transform", "translateX(" + offset + "%)");
    }

    // Manual next button
    $slider.find(".scroll-btn.right").on("click", function () {
      index = (index + 1) % (total - visible + 1);
      moveSlide();
    });

    // Manual prev button
    $slider.find(".scroll-btn.left").on("click", function () {
      index = (index - 1 + (total - visible + 1)) % (total - visible + 1);
      moveSlide();
    });

    // Auto slide
    setInterval(function () {
      $slider.find(".scroll-btn.right").trigger("click");
    }, 2000);
  }

  // Initialize all sliders
  $(".slider-section").each(function () {
    initSlider($(this));
  });

  // ===== BUTTON SHOW / HIDE LOGIC =====
  $(".sec-1 button").on("click", function () {
    var target = $(this).data("target");
    $(".slider-section").hide();
    $("." + target).fadeIn(400);
  });

  $(".but-4").click(function () {
    $("#brain").show();
    $("#creativity").hide();
    $("#energy").hide();
    $("#play").hide();
    $("#mood").hide();
    $("#long").hide();
  });
  $(".but-5").click(function () {
    $("#brain").hide();
    $("#creativity").show();
    $("#energy").hide();
    $("#play").hide();
    $("#mood").hide();
    $("#long").hide();
  });
  $(".but-6").click(function () {
    $("#brain").hide();
    $("#creativity").hide();
    $("#energy").show();
    $("#play").hide();
    $("#mood").hide();
    $("#long").hide();
  });
  $(".but-7").click(function () {
    $("#brain").hide();
    $("#creativity").hide();
    $("#energy").hide();
    $("#play").show();
    $("#mood").hide();
    $("#long").hide();
  });
  $(".but-8").click(function () {
    $("#brain").hide();
    $("#creativity").hide();
    $("#energy").hide();
    $("#play").hide();
    $("#mood").show();
    $("#long").hide();
  });
  $(".but-9").click(function () {
    $("#brain").hide();
    $("#creativity").hide();
    $("#energy").hide();
    $("#play").hide();
    $("#mood").hide();
    $("#long").show();
  });

  // ===== BRAIN SLIDER =====
  $(".brain-slider").each(function () {
    let $slider = $(this).find(".slider-items");
    let scroll = 320;
    let speed = 500;
    let delay = 2000;

    // Manual buttons
    $(this)
      .find(".scroll-btn.left")
      .click(function () {
        $slider.animate({ scrollLeft: "-=" + scroll }, speed);
      });
    $(this)
      .find(".scroll-btn.right")
      .click(function () {
        $slider.animate({ scrollLeft: "+=" + scroll }, speed);
      });

    // Auto scroll
    function autoScroll() {
      let max = $slider[0].scrollWidth - $slider.outerWidth();
      let cur = $slider.scrollLeft();
      if (cur + scroll >= max) {
        $slider.animate({ scrollLeft: 0 }, speed);
      } else {
        $slider.animate({ scrollLeft: cur + scroll }, speed);
      }
    }

    let auto = setInterval(autoScroll, delay);

    // Pause on hover
    $slider.hover(
      function () {
        clearInterval(auto);
      },
      function () {
        auto = setInterval(autoScroll, delay);
      }
    );
  });

  // ===== FEEDBACK SLIDER =====
  let $slider = $(".feedback-slider");
  let slideW = $(".feedback-slider .mm-7").outerWidth(true);
  let total = $(".feedback-slider .mm-7").length;
  let index = 0;
  let auto;

  function goTo(i) {
    $slider.css("transform", "translateX(" + -slideW * i + "px)");
  }

  function start() {
    auto = setInterval(function () {
      index++;
      if (index > total - 4) index = 0;
      goTo(index);
    }, 2000);
  }

  function stop() {
    clearInterval(auto);
  }

  // Manual buttons
  $(".slider-btn.left").click(function () {
    stop();
    index--;
    if (index < 0) index = total - 4;
    goTo(index);
    start();
  });
  $(".slider-btn.right").click(function () {
    stop();
    index++;
    if (index > total - 4) index = 0;
    goTo(index);
    start();
  });

  // Pause on hover
  $slider.hover(stop, start);

  start(); // auto start

  var $slider1 = $(".product-slider");
  var $slides1 = $(".product-item");
  var totalSlides1 = $slides1.length;
  var index1 = 0;

  // Function to move slider
  function moveSlider1() {
    $slider1.css("transform", "translateX(" + -index1 * 100 + "%)");
  }

  // Next button
  $(".right-1").click(function () {
    index1 = (index1 + 1) % totalSlides1; // move right
    moveSlider1();
  });

  // Previous button
  $(".left-1").click(function () {
    index1 = (index1 - 1 + totalSlides1) % totalSlides1; // move left
    moveSlider();
  });

  var images = [
    "pic5.webp",
    "pic6.webp",
    "pic7.webp",
    "pic8.webp",
    "pic9.webp",
    "pic10.webp",
    "pic1.webp",
    "pic2.webp",
    "pic3.webp",
    "pic4.webp",
    "pic5.webp",
    "pic6.webp",
    "pic7.webp",
    "pic8.webp",
    "pic9.webp",
    "pic10.webp",
    "pic1.webp",
    "pic2.webp",
    "pic3.webp",
    "pic4.webp",
  ];

  var currentIndex = 0;
  var loadCount = 4; // load 4 images each time

  // hide "Show Less" button at start
  $("#lessBtn").hide();

  var currentIndex = 0;
  var loadCount = 4;

  // LOAD MORE button
  $("#loadBtn").click(function () {
    var newImages = images.slice(currentIndex, currentIndex + loadCount);

    $.each(newImages, function (index, imgSrc) {
      $("#gallery").append(
        `<div class="col-md-3 gel-i"><img src="${imgSrc}" class="img-fluid" alt=""></div>`
      );
    });

    currentIndex += loadCount;

    // Show "Show Less" button after first load
    $("#lessBtn").show();

    // Hide "Load More" if all images are loaded
    if (currentIndex >= images.length) {
      $("#loadBtn").hide();
    }
  });

  // SHOW LESS button
  $("#lessBtn").click(function () {
    // Remove last loaded images
    $("#gallery .col-md-3 ").slice(-loadCount).remove();

    currentIndex -= loadCount;

    // Show "Load More" again
    $("#loadBtn").show();

    // Hide "Show Less" if no extra images remain
    if (currentIndex <= 0) {
      $("#lessBtn").hide();
    }
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
      $(".start-today-box").fadeIn();
    } else {
      $(".start-today-box").fadeOut();
    }
  });
});
