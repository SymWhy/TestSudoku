Sudoku Tester
==
Tests if a given array of 81 digits would be a valid sudoku grid with options to randomize the digits using a dynamically generated grid

Currently randomizing the digits in the sudoku array is completely random, so repeats are possible and a valid grid is very unlikely to be built.
The checker button will successfully note if the array is valid or not.

Next steps would be to prevent duplicates in randomization, randomize box A,E,I, and finally use recursion to fill out the rest of the grid with a potentially valid sudoku grid.

Files included
--
index.html: HTML file containing the general layout and allowing the browser to access CSS and Javascript files
style.css: CSS file containing the style rules for the HTML page
sudoku.js: JavaScript file that generates and evaluates the given array of 81 digits to determine if it's valid
grid.js: JavaScript file that dynamically generates nine 9x9 grids to contain data from sudoku.js

Using the file
--
Open index.html in your browser. The Check? button will return "TRUE" or "FALSE" depending on if the sudoku grid is valid or not. The Shuffle? button will randomize the 81 digit array.
