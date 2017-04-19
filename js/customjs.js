//Hide project tiles default
$(document).ready(function () {

$("#card1").hide();
$("#card2").hide();
$("#card3").hide();

}); /*closing: document ready function*/

//Show card1 after clicking button
$(document).ready(function () {

$("#strategy").on("click", function (){
$("#card1").toggle();
$("#card2").toggle();
$("#card3").toggle();

});

}); /*closing: document ready function*/

