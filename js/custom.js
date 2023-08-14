alert("Happy 77th Independence Day!");

/* navigation menu animation with way points */

$('.nav-animate').waypoint(function (direction) {
  $('.secondary-menu').toggleClass('hide', direction === "down");
  $('.navbar').toggleClass('comeup', direction === "down");
}, {
  offset: '10%'
});

// Block scrolling

$('.nav li a').bind('click', function (e) {
  var anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
  }, 1200);
  if ($(window).width() < 768) {
    var $navMain = $(".navbar-collapse");
    $navMain.collapse('hide');
  }
  e.preventDefault();
});

/* play list music button */
$(document).ready(function () {
  var audioElements = document.querySelectorAll(".audio1");
  var obj = document.createElement("audio");
  obj.src = "audio/Nadi.mp3";
  obj.volume = 1;
  obj.autoPlay = true;
  obj.preLoad = true;
  var $disk;

  $('#playNowBtn').click(function (e) {
    var $playNowButton = $(this);
    var $playlist = $playNowButton.parent().parent();
    $disk = $playlist.children().children('.disk');

    if ($disk.hasClass('rotating')) {
      $disk.removeClass('rotating');
      $playNowButton.children('i').removeClass('fa-pause').addClass('fa-play');
      obj.pause();
    } else {
      $disk.addClass('rotating');
      $playNowButton.children('i').removeClass('fa-play').addClass('fa-pause');
      obj.play();
    }

    // Pause all other audio elements in the top section
    audioElements.forEach((audioElement) => {
      if (audioElement !== obj) {
        audioElement.pause();
        var $otherPlaylist = $(audioElement).parent().parent();
        var $otherDisk = $otherPlaylist.children().children('.disk');
        $otherDisk.removeClass('rotating');
        $otherPlaylist.find('.btn').children('i').removeClass('fa-pause').addClass('fa-play');
      }
    });

    // Pause the video
    var videoElement = document.getElementById("videoElement");
    videoElement.pause();

    e.preventDefault();
  });

  // Add event listeners to each audio element in the top section
  audioElements.forEach((audio) => {
    audio.addEventListener("play", function () {
      // Pause the audio in the bottom section
      obj.pause();
      if ($disk) {
        $disk.removeClass('rotating');
        $('#playNowBtn').children('i').removeClass('fa-pause').addClass('fa-play');
      }
    });
  });

  var videoElement = document.getElementById("videoElement");

  // Pause audio when the video starts playing
  videoElement.addEventListener("play", function () {
    // Pause audio in the section with id=playNowBtn
    obj.pause();
    if ($disk) {
      $disk.removeClass('rotating');
      $('#playNowBtn').children('i').removeClass('fa-pause').addClass('fa-play');
    }
  });

  // Pause audio in the bottom section when any audio in the top section plays
  audioElements.forEach((audioElement) => {
    audioElement.addEventListener("play", function () {
      // Pause audio in the section with id=playNowBtn
      obj.pause();
      if ($disk) {
        $disk.removeClass('rotating');
        $('#playNowBtn').children('i').removeClass('fa-pause').addClass('fa-play');
      }
    });
  });

  // Event listener to stop the rotation when the audio ends
  obj.addEventListener('ended', function () {
    if ($disk) {
      $disk.removeClass('rotating');
      $('#playNowBtn').children('i').removeClass('fa-pause').addClass('fa-play');
    }
  });

  // Event listener to pause audio when the video is playing
  videoElement.addEventListener('play', function () {
    obj.pause();
    if ($disk) {
      $disk.removeClass('rotating');
      $('#playNowBtn').children('i').removeClass('fa-pause').addClass('fa-play');
    }
  });
});

/***********************/
// Function to set/update a cookie
function setCookie(name, value, days) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '')  + expires + '; path=/; SameSite=None; Secure';
}

// Example usage:
setCookie('SID', 'your-sid-value', 30);
setCookie('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.3108303686877!2d85.311682415033!3d23.360376884791246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3cafd21c3b8b47b3%3A0xf482776c3e79903b!2sHatia%2C%20Ranchi%2C%20Jharkhand%20830023%2C%20India!5e0!3m2!1sen!2sin!4v1627831929873!5m2!1sen!2sin', 30);
// Set other cookies in a similar manner










/* *************************************** */
// One page navigation
/* *************************************** */

$('.nav').onePageNav({
  currentClass: 'active',
  changeHash: true,
  scrollSpeed: 1000,
  scrollThreshold: 0.1
});

// Block scrolling

$('.nav a').bind('click', function (e) {
  if ($(window).width() < 768) {
    var $navMain = $(".navbar-collapse");
    $navMain.collapse('hide');
  }
  e.preventDefault();
});

/* Owl-Carousel Client Slider */

$(document).ready(function () {
  $("#portfolioOwl").owlCarousel({
    autoPlay: 3000,
    slideSpeed: 1200,
    paginationSpeed: 500,
    stopOnHover: true,
    items: 4,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [991, 3],
    itemsTabletSmall: [767, 2]
  });
});

/* tool-tip initialize */

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


/* Scroll to Top */

$(".totop").hide();
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.totop').fadeIn();
    }
    else {
      $('.totop').fadeOut();
    }
  });

  $('.totop a').click(function (e) {
    e.preventDefault();
    $('body,html').animate({ scrollTop: 0 }, 1200);
  });

});
/*****************************/
if ('geolocation' in navigator) {
  // Code for using geolocation API
} else {
  // Fallback code for browsers that do not support geolocation
}
if (navigator.userAgentData) {
  const userAgentData = navigator.userAgentData;
  const brand = userAgentData.brands[0].brand;
  const version = userAgentData.brands[0].version;
  console.log(`Browser: ${brand}, Version: ${version}`);
} else {
  // Fallback code for browsers that do not support userAgentData
}

/**************************Festival Effects****************************/
