

// Set the date we're counting down to
var countDownDate = new Date("Mar 1, 2021 10:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // If less than 10 days/hours/minutes/seconds left on the countdown, add 0 in front of a day number
    if(days < 10) {
        days = "0" + days;
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    
    document.querySelector('.main__countdown').innerHTML = 
    "<div class='timer__wrapper'><div class='timer__timer'>"+days+"</div><div class='timer__for'>Days</div></div>" +
    "<div class='timer__wrapper'><div class='timer__timer'>"+hours+"</div><div class='timer__for'>Hours</div></div>" +
    "<div class='timer__wrapper'><div class='timer__timer'>"+minutes+"</div><div class='timer__for'>Minutes</div></div>" +
    "<div class='timer__wrapper'><div class='timer__timer'>"+seconds+"</div><div class='timer__for'>Seconds</div></div>";

    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.querySelector(".main__countdown").innerHTML = "EXPIRED";
    }
  }, 1000);