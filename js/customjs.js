//Hide project tiles default
$(document).ready(function () {

$("#card1").hide();
$("#card2").hide();
$("#card3").hide();
$("#card4").hide();
$("#card5").hide();
$("#card6").hide();

}); /*closing: document ready function*/

//Show blue cards after clicking blue button
$(document).ready(function () {

$("#strategy").on("click", function (){
$("#card4").hide();
$("#card5").hide();
$("#card6").hide();

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

$("#card4").show();
$("#card5").show();
$("#card6").show();

});

}); /*closing: document ready function*/

