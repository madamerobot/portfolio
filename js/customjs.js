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
}); /*closing: document ready function*/

 //Reload page when clicking on logo
 $(document).ready(function (){
 $("#headertext").on("click", function (){
 	location.reload();
  });
 });/*closing: document ready function*/

//--THIS IS NEW
//LOOPS FOR SWAPPING HEADER COPY AND BACKGROUND IMAGE

//Change header copy on click
  $(document).ready(function () {

  	var headercopy = ["Bullshit Bingo","Kaastostie","Hagelslag"];

	$("#header1").on("click", function (){
		var randomcopy = headercopy[Math.floor(Math.random()*headercopy.length)];
		$("#headertext").text(randomcopy);
    console.log(randomcopy);
		/*clearInterval(randomcopy);*/
        });//end of on click

	});//*closing: document ready function*/

//END OF NEW STUFF

  //Change background on click

$(document).ready(function () {

  /*var classes = ["background-palms","background-beach","background-pool"];  
   var randomclass = classes[Math.floor(Math.random()*classes.length)];*/
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
});

/*Hiding all content tiles & showing carousel*/
$(document).ready(function () {

	$("#header3").on("click", function (){
		$("#all-cards").hide();
		$("#icon-row").hide();
          });/*---$("#header3").on("click", function ()*/

	$("#header3").on("click", function (){
		$(".carousel.carousel-slider").carousel({
 	   fullWidth: true
       });/*$("#header3").on("click", function ()*/
      });/*$(document).ready(function ()*/
	});/*$(document).ready(function ()*/


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
}); /*closing: document ready function*/

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

}); /*closing: document ready function*/

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

}); /*closing: document ready function*/

