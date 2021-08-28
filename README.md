# _Mr. Roboger's Neighborhood_

#### _This website displays different ranges depending on the user's input of different numbers._

#### By _**Anna Clarke**_

## Technologies Used

* _HTNL_
* _CSS_
* _JavaScript_
* _jQuery_
* _Bootstrap_

## Description

_This website welcomes users to Mr. Roboger's neighborhood and asks them to input a number. The website will display a range of numbers from zero to the user's inputted number. Within that range, all numbers containing the digit 3 will be replaced with 'Won't you be my neighbor?'. If a number contains the digit 2, and not the digit 3, it will be replaced with 'Boop'. If a number contains the digit 1, and not the digits 3 or 2, it will be replaced with 'Beep'._

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

Describe: playfulRange()

1. Test: "If the user input is 0, then it should return a string of "0"."  
Expect(playfulNumber(0).toEqual([0]));

2. Test: "Program returns a range of numbers from 0 to user input."  
Expect(playfulNumber(5).toEqual(["0, 1, 2, 3, 4, 5"]));

3. Test: "Within the range of numbers, all numbers containing the digit 3 should be replaced with the string, "Won't you be my neighbor?"”  
Expect(playfulNumber(13).toEqual([“0, 1, 2, "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, 12, “Won’t you be my neighbor?”” ]));

4. Test: "Within the range of numbers, all numbers containing the digit 2 should be replaced with the string, “Boop!”"  
Expect(playfulNumber(12).toEqual(["0, 1, “Boop!", “Won’t you be my neighbor?”, 4, 5, 6, 7, 8, 9, 10, 11, “Boop!””]));

5. Test: "Within the range of numbers, all numbers containing the digit 1 should be replaced with the string "Beep!"”  
Expect(playfulNumber(13).toEqual([“0, "Beep!", “Boop!”, “Won’t you be my neighbor?”, 4, 5, 6, 7, 8, 9, “Beep!”, “Beep!”, “Boop!”, “Won’t you be my neighbor?””]));





