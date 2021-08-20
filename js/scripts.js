function playfulNumber(number) {
  if (number === 0) {
    return "0";
  };

  const stringNumber = number.toString();
  let playfulArray = []
  for (const character of stringNumber) {
    if (character === "3") {
      return "Won't you be my neighbor?";
    } else if (character === "2") {
      return "Boop!";
    } else if (character === "1") {
      return "Beep!";
    } else {
      for (let i = 0; i <= number; i ++) {
        console.log(i)
        playfulArray.push(i);
      };
      return playfulArray.join(", ");
    };
  };
};