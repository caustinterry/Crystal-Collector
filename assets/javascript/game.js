//Have a randomly generated number display to the user. The user clicks on one of the crystals which has an assigned randomly generated number.
//When the user clicks on the crystal is adds to a total value that is displayed. The user wants to add numbers to match the initial generated number
//When the user reaches that value wins are increased and all new numbers are generated
//When the user goes over the value losses are increased and all new numbers are generated
//
//
//
$(document).ready(function() {
  //Variables
  //
  var wins = 0;
  var losses = 0;
  var totalValue = 0;
  var crystalOneNum = Math.floor(Math.random() * 12) + 1;
  console.log(crystalOneNum);
  var crystalTwoNum = Math.floor(Math.random() * 12) + 1;
  console.log(crystalTwoNum);
  var crystalThreeNum = Math.floor(Math.random() * 12) + 1;
  console.log(crystalThreeNum);
  var crystalFourNum = Math.floor(Math.random() * 12) + 1;
  console.log(crystalFourNum);
  //
  //Functions
  //
  function numbGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var randomNumber = numbGen(19, 120);
  console.log(randomNumber);
  $("#randNumber").text(randomNumber);

  //
  //Event listeners
  $("#crystal1").on("click", function() {
    $("#totalScore").text((totalValue += crystalOneNum));
  });
  //
  $("#crystal2").on("click", function() {
    $("#totalScore").text((totalValue += crystalTwoNum));
  });
  $("#crystal3").on("click", function() {
    $("#totalScore").text((totalValue += crystalThreeNum));
  });
  //
  $("#crystal4").on("click", function() {
    $("#totalScore").text((totalValue += crystalFourNum));
  });

  if (totalValue === randomNumber) {
    wins++;
  } else if (totalValue >= randomNumber) {
    losses++;
  }
});
//
//
//
//
//
//
//
//
//
