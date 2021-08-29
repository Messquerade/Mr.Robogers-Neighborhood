// Business Logic

function playfulRange(number) {
  if (number === 0) {
    return "0";
  };
  playfulArray = []
  for (let i = 0; i <= number; i++) {
    let playfulNumber = i.toString();
    if (playfulNumber.includes("3")) {
      playfulNumber = "Won't you be my neighbor?"
    } else if (playfulNumber.includes("2")) {
      playfulNumber = "Boop!"
    } else if (playfulNumber.includes("1")) {
      playfulNumber = "Beep!"
    }
    playfulArray.push(playfulNumber);
  };
  return playfulArray.join(", ");
};

// UI Logic

$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    const inputNumber = parseInt($("#number").val());
    if (isNaN(inputNumber)) {
      $("#result").text("Please enter a number!");
    } else {
      const result = playfulRange(inputNumber);
      $("#result").text(result);
    };
  });
  
  $("button#Hint").click(function() {
    $("#hint").slideToggle();
    $("#answer").hide();
  });
  $("button#Answer").click(function() {
    $("#answer").slideToggle();
    $("#hint").hide();
  });
});