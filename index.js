var randomNum1 = (Math.floor(Math.random() * 8)) + 1;
switch (randomNum1) {
  case 1:
    $(".card__face--back").css("background-image", 'url("card1_flipped.png")');
    break;
  case 2:
    $(".card__face--back").css("background-image", 'url("card2_flipped.png")');
    break;
  case 3:
    $(".card__face--back").css("background-image", 'url("card3_flipped.png")');
    break;
  case 4:
    $(".card__face--back").css("background-image", 'url("card4_flipped.png")');
    break;
  case 5:
    $(".card__face--back").css("background-image", 'url("card5_flipped.png")');
    break;
  case 6:
    $(".card__face--back").css("background-image", 'url("card6_flipped.png")');
    break;
  case 7:
    $(".card__face--back").css("background-image", 'url("card7_flipped.png")');
    break;
  case 8:
    $(".card__face--back").css("background-image", 'url("card8_flipped.png")');
    break;

}
const audio = new Audio("announcement-sound-4-21464.mp3");

var cards = document.querySelectorAll('.img');

[...cards].forEach((card) => {
  card.addEventListener('click', function () {
    card.classList.add('is-flipped');
    $(".card__face--front").hide(1000);
    audio.play();
    setTimeout(function(){
      $(".card__face--back").hide(1000);
      $("p").html("WISHING YOU A VERY HAPPY NEW YEAR!");
      $("p").append("<p><a href='https://youtube.com/shorts/9F3kYeL2hj8?si=xvccTeEH4KFfSwwP'>Click me for 2023 Recap!<a></p>");
      
      $("a").css("text-decoration", "none");
      $("a").css("color", "rgb(225, 202, 2)");
      $("a").attr("target", "_self");
      
      const audio1 = new Audio("new-year-fireworks-sound1-180201.mp3");
      audio1.play();
      
  }, 10000);
  
    
  });
});

