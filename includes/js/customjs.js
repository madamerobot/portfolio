//Default hide project tiles
$(document).ready(function () {

  $("#card1").hide();
  $("#card2").hide();
  $("#card3").hide();
  $("#card4").hide();
  $("#card5").hide();
  $("#card6").hide();
  $("#card7").hide();
  $("#card8").hide();
  $("#card9").hide();
  
  $(".carousel.carousel-slider").carousel({
     fullWidth: true
  });
}); //End of document ready function*/

//Reload page when clicking on logo
$(document).ready(function (){
  $("#headertext").on("click", function (){
 	location.reload();
  });
});//End of document ready function*/

//SWAPPING HEADER COPY AND BACKGROUND IMAGE ON RANDOM
//Change header copy on click

$(document).ready(function () {
  var headercopy = ["Bullshit Bingo","Appelflappen","Hagelslag"];
    $("#header1").on("click", function (){
	   var randomcopy = headercopy[Math.floor(Math.random()*headercopy.length)];
		$("#headertext").text(randomcopy);
    console.log(randomcopy);
    });//end of on click
});//End of document ready function*/

  //Change background on click

$(document).ready(function () {
  $("#header2").on("click", function(){ 
    if ( $("body").hasClass("background-palms") ){
      $("body").removeClass("background-palms")  
      $("body").addClass("background-melon")
    }     
    else if ( $("body").hasClass("background-melon") ){
       $("body").removeClass("background-melon")
       $("body").addClass("background-pool")
    }
    else if ( $("body").hasClass("background-pool") ){
       $("body").removeClass("background-pool")
       $("body").addClass("background-palms")
    }
  })
});//End of document.ready block

/*Hiding all content tiles & showing carousel*/
$(document).ready(function () {
	$("#header3").on("click", function (){
		$("#icon-row").hide();
    $("#all-cards").hide();
    $(".carousel.carousel-slider").carousel({
     fullWidth: true
    });
  });
}); //End of document.ready function

//Show blue cards after clicking blue button
$(document).ready(function () {
  $("#strategy").on("click", function (){
  $("#card4").hide();
  $("#card5").hide();
  $("#card6").hide();

  $("#card7").hide();
  $("#card8").hide();
  $("#card9").hide();

  $("#card1").show();
  $("#card2").show();
  $("#card3").show();
  });
}); //End of document ready function*/

//Show pink cards after clicking pink button
$(document).ready(function () {
  $("#web").on("click", function (){
  $("#card1").hide();
  $("#card2").hide();
  $("#card3").hide();

  $("#card7").hide();
  $("#card8").hide();
  $("#card9").hide();

  $("#card4").show();
  $("#card5").show();
  $("#card6").show();
  });
}); //End of document ready function*/

//Show lime cards after clicking pink button
$(document).ready(function () {
  $("#test").on("click", function (){
  $("#card1").hide();
  $("#card2").hide();
  $("#card3").hide();

  $("#card4").hide();
  $("#card5").hide();
  $("#card6").hide();

  $("#card7").show();
  $("#card8").show();
  $("#card9").show();
  });
}); //End of document ready function*/
