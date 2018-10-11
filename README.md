[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Tech
As simple as it looks, the Extereme Tic Tac Toe application was built with multiple technologies all depending on one another to function:

* CSS
* HTML5
* BOOTSRAP
* JAVASCRIPT
* CUSTOM GENERAL ASSEMBLY API

# The Process
I'll go over each individual file that contributes to making my tic tac toe application work and my thought process during each file.

##### engine.js
On day one of the project I hit a wall real quick and the engine was that wall. My brain was over thinking every little thing, I wanted to figure out how to put x's and o'x on the board, how the board was going to work and what needed to be done when a box was clicked. But once I got a suggestion from my instructor it all started to click. "One problem at a time." those words of wisdom stuck with me through out the whole process and once I was able to focus in on the first problem I needed to solve, everything else fell into place. I figured out the gameboard was just an array that was going to be filled with x's and o's and ending the game would have to meet certain conditions that compared where in the array thew x's and o's were. I used call back functions when adding an x or o to the array that allowed me to check conditions and switch the current play at once in the add player function. In the engine.js file my biggest obstacle was clearing my game board array when the user requested a new game from other files in my app, even when the engine.js file was required in it. I felt like I tried everything but when I got a suggestion from my classmate to create a method that does that in the engine.js file I was able to call that function outside of the engine.js file everytime I needed to clear the local board/array.

##### index.html
I knew right away I wanted to utilize bootstrap in order to create my gameboard, since it was still fresh in my mind from the previous labs I worked on in class. Once I completed the initial design for the board I went straight into cearting the froms and buttons needed in order for a user to even play the game. I made sure to add a hidden class to everything that would toggle between visible and hidden from the user when certain requirements were met. I also created a dsiplay message class that responded to everything that the user was doing on the application, from signing up to starting a new game.

##### app.js
This was one of the simpler files I worked on, here I only needed to connect the html id's for everything I created on the index.html to a click or submit event. I do want to say capturing an event for ever square on the gameboard was pretty tricky, I essentially used the id of every square to be the index on the game board that I could call on when physically putting x's and o's on to the board. Each html connected event handler had it's own function called on it which was created in the events.js file.

##### events.js
Each event connected to the index.html file was calling a function that was able to make an api request to the game server. I had to make sure each function was requesting the specific api action when called on. I made it so that if the function was called succefully I would display a message telling the user that the action was handled properly and vice versa when a problem had occured. I spent most of my time coding the onClicked function which essentailly sent out a patch request to the updating the game array on the server, ran the game engine every time someone clicked on the game board, added an x and o to the html board, and updated the local game array with either an x or o. I also stored the indexes and the game over value every time a square was clicked. I started to notice a lot of code was filling up the onClicked function and that I could have certain parts of the code run on the in the ui.js file which returned a feed back message to the user letting them know who's turn was nexted, if the game was over, etc.. So I decided to move some conditionals over to that file so that the right message would appear after every move the used made and that cleaned up the onClicked function big time.

##### api.js
This file was straight forward, I just had to make sure every function had a the right format when calling the ajax call. Luckily I had the project scope api files to show me the correct syntax for the calls. I used my store class instances to add the appropriate data to each ajax call depending on what they needed. Most calls needed the user token others needed the game id. One minor set back I had was combing the strings to the url, in a few cases there was an extra backslash that would mess up the url and not send the request to the right place. After quick look in the console I was able to find and adress that problem.

##### ui.js
Here is where I used the hidden classes attached to my html and toggled them on and off depending on what the user did. The main obstacle I delat with was not updating the hidden class in the css to display off. Nomrally we could just add the hidden class and be fine but since we were working with html5 I had to manually set the class to dsiplay nothing. I only had the sign up and sign in forms displayed at first. Once the user signed in those forms would be hidden and the change password form would be displayed along with the new game, get stats, and log out buttons. the new game button when pushed will toggle the hidden class for the gameboard to display it. Once logged out all the forms and buttons would be hidden and sign up and sign in formm would be displayed again. I mad sure to reset every form so that if displayed again the user would have a clean slate. On all the faliure catches a red message would be displayed to the user if they ran into any problems completing any action. On my createGameSuccess function and clicked success function I used my required engine class that enabled me to use call methods from that file which allowed me to reset the game board when the new game button was clicked and also allow me to check the game for matching conditions that allowed a message to be displayed regarding the players turn, if the game was over or not, and who ultimately won the game.

##### index.scss
I formated my whole application here, from centering everything and coloring my background. I still need to work on my CSS which is resulting in a plain style for my game. This will be addressed in future upodates to the application.

# Unsolved Issues
* CSS/Bootstrap: I Need to configure the sizing margins of the gameboard so that it stays at a fixed size even when the browser window adjusts in size.
* CSS/Bootstrap: I need to make sure the columns of the gameboard don't collapse on each other when the browser window is adjusted to a smaller size or is viewed in mobile mode.

# User Stories
* I will be able to create an account with my e-mail, password, and password comfirmation.
* I will be able to log into my newly created account.
* Once I'm logged in, the create account and user login fields are replaced with a change password field with three buttons(New game, Get stats, and log out) underneath it.
* I can click on the new game button to start a new game of tic tac toe.
* I can click on get stats to see how many games I'v played.
* I can click on logout to be brought back to the create account and login fields.
* Once I start a new game I can click on the game board and a 'x' will appear on the spot I clicked on as well as a message telling 'o' the next player to go.
* If I click on another spot on the board an 'o' will appear in that spot and a message will appear telling 'x' to go.
* Once I win, lose, or draw, a message will display showing who won, 'x' or 'o', if the game is a draw, as well as tell me to start a new game.
* When I click on the New Game button the game board clears and I can start playing a brand new game.
* Once I had my fill of tic tac toe I can logout using the Log Out button and sign in later to play again.


# Wire Frame
https://i.imgur.com/ZMaVmJw.jpg



## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
