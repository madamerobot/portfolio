  //Change background on click
$(document).ready(function () {
	$("#header2").on("click", function (){
	$("body").removeClass("background-style");
    $("body").addClass("houses");

    $("body").removeClass("background-style");
    $("body").addClass("palms");
	});
});

//Change header copy on click
$(document).ready(function () {
	$("#header1").on("click", function (){
	$("#headertext").text("Bullshit Bingo");
	});
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

//Hide project tiles default
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

