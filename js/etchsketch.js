$(document).ready(function() {
// making a for loop that generates the default 16 x 16 squares, stops when it hits 16.
  for (var x = 0; x < 16; x++) {
    for (var y = 0; y < 16; y++) {
      var unit = $("<div class='unit'></div>");
      unit.appendTo('#container');
    }
    // I was supposed to add a button that allows the user to change the grid size
    // If i have time to come back to this, I'd make a simular fuction as above but 
    // have a prompt that feeds numbers into the test statement in the for loop above.
    // Allowing users to change it from 16. Although, i think this will mess with my CSS a lot.
    //I sort of wished that I kept it simpler. 
  }
  // making the mouse hover color change function
$(".unit").hover(function(){
    $(this).css("background-color", "#CFE0C3");
    }, function(){
    $(this).css("background-color", "#1F363D");
});
// I figured out that I can reset the hover function just by 
// changing the background color of unit in the css entry back to 
// it's initial color.
 $('.btn').click(function(){
     $('.unit').css('background-color', '#70A9A1');
 });
});