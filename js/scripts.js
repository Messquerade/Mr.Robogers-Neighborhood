function playfulNumber(number) {
  if (number === 0) {
    return "0";
  };

  let stringNumber = number.toString();
  for (const character of stringNumber) {
    if (character === "3") {
      return "Won't you be my neighbor?";
    };
  };
};