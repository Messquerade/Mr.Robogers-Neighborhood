# _Mr. Roboger's Neighborhood_

#### _This website displays different messages depending on user input of different numbers._

#### By _**Anna Clarke**_

## Technologies Used

* _HTNL_
* _CSS_
* _JavaScript_
* _jQuery_
* _Bootstrap_

## Description

_This website welcomes users to Mr. Roboger's neighborhood and asks them to input a number. Depending on the user's number choice, the website will display a varitey of messages. The website asks the user to identify the pattern of the messages, offering a hint and answer._

## Setup/Installation Requirements

* _Clone this repository from Github to your desktop_
* _Navigate to the top of the directory_
* _Open directory in your text editor of choice_


## Known Bugs

* _NA_

## License

MIT

_Copyright (c) 2021 Anna Clarke_

## Contact Information

_Anna Clarke: annac.klingberg@gmail.com_

## Specifications

Describe: playfulNumber()

1. Test: "If the user input is 0, then it should return a string of "0"."
Expect(playfulNumber(0).toEqual([0]));

2. Test: "If the user input contains a 3, the program should return "Won't you be my neighbor?"
Expect(playfulNumber(23).toEqual(["Won't you be my neighbor?"]));

3. Test: "If user input contains a 2, the program should return "Boop!"
Expect(playfulNumber(42).toEqual(["Boop!"]));

4. Test: "If user input contains a 1, the program should return "Beep!"
Expect(playfulNumber(601).toEqual(["Beep!"]));

5. Test: "Program returns a range of numbers from 0 to user input."
Expect(playfulNumber(5).toEqual(["0, 1, 2, 3, 4, 5"]));

6. Test: "Program replaces 1, 2, and 3 in range of returned numbers."
Expect(playfulNumber(5).toEqual(["0, Beep!, Boop!, Won't you be my neighbor?, 4, 5"]));




