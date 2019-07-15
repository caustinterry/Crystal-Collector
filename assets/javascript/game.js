//Have a randomly generated number display to the user. The user clicks on one of the crystals which has an assigned randomly generated number.
//When the user clicks on the crystal it adds to a total value that is displayed. The user wants to add numbers to match the initial generated number
//When the user reaches that value wins are increased and all new numbers are generated
//When the user goes over the value losses are increased and all new numbers are generated
//
//
//
$(document).ready(function() {
  //Variables
  //
  var crystalOneNum;
  var crystalTwoNum;
  var crystalThreeNum;
  var crystalFourNum;
  var wins = 0;
  var losses = 0;
  var totalValue;
  var randomNumber;

  //
  //Functions

  //function to generate the random number for the crystals
  function setValues() {
    return Math.floor(Math.random() * 12) + 1;
  }
  var startGame = function() {
    //random number is generated
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    //number is set for first crystal
    crystalOneNum = setValues();
    //number is set for second crystal
    crystalTwoNum = setValues();
    //number is set for third crystal
    crystalThreeNum = setValues();
    //number is set for fourth crystal
    crystalFourNum = setValues();
    $("#randNumber").text(randomNumber);

    totalValue = 0;
    $("#totalScore").text(totalValue);

    console.log(crystalOneNum);
    console.log(crystalTwoNum);
    console.log(crystalThreeNum);
    console.log(crystalFourNum);
    console.log(randomNumber);
  };
  startGame();

  //Displaying the random number to the HTML

  //
  //Event listeners

  //Event listener to restart game

  function gemClick() {
    $("#crystal1").on("click", function() {
      totalValue += crystalOneNum;
      $("#totalScore").text(totalValue);
      console.log(totalValue);
      if (totalValue === randomNumber) {
        wins++;
        $("#wins").text(wins);
        startGame();
      } else if (totalValue > randomNumber) {
        losses++;
        $("#losses").text(losses);
        startGame();
      }
    });
    $("#crystal2").on("click", function() {
      totalValue += crystalTwoNum;
      $("#totalScore").text(totalValue);
      console.log(totalValue);
      if (totalValue === randomNumber) {
        wins++;
        $("#wins").text(wins);
        startGame();
      } else if (totalValue > randomNumber) {
        losses++;
        $("#losses").text(losses);
        startGame();
      }
    });
    $("#crystal3").on("click", function() {
      totalValue += crystalThreeNum;
      $("#totalScore").text(totalValue);
      console.log(totalValue);
      if (totalValue === randomNumber) {
        wins++;
        $("#wins").text(wins);
        startGame();
      } else if (totalValue > randomNumber) {
        losses++;
        $("#losses").text(losses);
        startGame();
      }
    });
    $("#crystal4").on("click", function() {
      totalValue += crystalFourNum;
      $("#totalScore").html(totalValue);
      console.log(totalValue);
      if (totalValue === randomNumber) {
        wins++;
        $("#wins").text(wins);
        startGame();
      } else if (totalValue > randomNumber) {
        losses++;
        $("#losses").text(losses);
        startGame();
      }
    });

    console.log(totalValue);
  }
  gemClick();

  $(".btn").on("click", function() {
    wins = 0;
    $("#wins").text(wins);
    losses = 0;
    $("#losses").text(losses);
    startGame();
  });
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
