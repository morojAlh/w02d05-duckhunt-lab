$(document).ready(function() {
  // 6. Things are getting a bit messy. Put everything from problems 1-4 in a new function 
  // called createDuck that "returns" the duck object

  // 8a. If you go to the dev tools you’ll see that we made 5 ducks, but they are all in the same place! Modify createDuck so 
  // each time it creates a duck, it appears in a random location. 
  // 8b. The ducks should also move to a random location after 1 second
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"

  // 9. Our ducks are going to be easy targets if they only move once.
  //    Modify createDuck() so the ducks keep moving around!

  var $body = $('body');

  function createDuck(){
    var speedOfMove = Math.floor(Math.random() * 2500);

      // 1. Can you create a <div> with the class "duck" and name it "duck"
    var $duck = $('<div/>').addClass('duck');
    $body.append($duck);
  
    // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
    setInterval(function(){
      $duck.toggleClass('flap');
    }, 250); 

    // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"
    $duck.css({
      'left' : Math.random() * window.innerWidth+'px',
      'top': Math.random() * window.innerHeight +'px'
    });
  
    // 4. Try making the duck move to a different location after 1 second
    setInterval(function(){
      $duck.animate({
        'left' : Math.random() * window.innerWidth +'px',
        'top': Math.random() * window.innerHeight +'px'
      });
    },speedOfMove);

    return $duck;
  }


  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function

  for (var i = 0 ; i< 5 ; i++){
    createDuck();
  }
  

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!

  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second)

  $('div').on('click', function(){
    $(this).addClass('shot');

    var $image = $('<img/>').attr('src', 'images/shot.png');
    $(this).append($image);

    $(this).delay(1000).queue(function() { 
      $(this).remove(); 
      checkForWinner();
    });

  });
  

  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. If not, alert "YOU WIN!"
  
  function checkForWinner(){
    var $ducks= $('body').find('div').length;
    if ($ducks === 0){
      alert('YOU WIN!');
    }
  }

  // FIN. You win 1 trillion tokens.  Play the day away!
})
