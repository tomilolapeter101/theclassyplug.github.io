


(function () {
    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }


    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    //===== mobile-menu-btn
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    });



})();

// a javascrpit time countdown function 




function countdown(minutes, seconds) {
  var countdownElement = document.querySelector("#countdown");

  var totalSeconds = minutes * 60 + seconds;

  var countdownInterval = setInterval(function() {
    var minutesLeft = Math.floor(totalSeconds / 60);
    var secondsLeft = totalSeconds % 60;

    var formattedTime = `${minutesLeft}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
    countdownElement.textContent = formattedTime;

    totalSeconds--;
  }, 1000);
}



countdown(200, 0); // countdown for 5 minutes

