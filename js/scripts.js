// Business Logic

function playfulNumber(number) {
  if (number === 0) {
    return "0";
  };
  const stringNumber = number.toString();
  let playfulArray = []
  for (const character of stringNumber) {
    if (character === "3") {
      return "Won't you be my neighbor?";
    };
  };
  for (const character of stringNumber) {
    if (character === "2") {
      return "Boop!";
    };
  };
  for (const character of stringNumber) {
    if (character === "1") {
      return "Beep!";
    } else {
      for (let i = 0; i <= number; i ++) {
        playfulArray.push(i);
      };
      playfulArray[1] = "Beep!";
      playfulArray[2] = "Boop!";
      playfulArray[3] = "Won't you be my neighbor?";
      return playfulArray.join(", ");
    };
  };
};

// UI Logic

$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    const inputNumber = parseInt($("#number").val());
    if (inputNumber) {
      console.log("Is this running?");
      $("#result").text("Please enter a number!");
    } else {
      console.log(inputNumber);
      const result = playfulNumber(inputNumber);
      $("#result").html(result);
    };
  });
  
  $("button#Hint").click(function() {
    $("#hint").toggle();
    $("#answer").hide();
  });
  $("button#Answer").click(function() {
    $("#answer").toggle();
    $("#hint").hide();
  });
});