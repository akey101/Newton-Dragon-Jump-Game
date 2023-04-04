Project Title:
Newton Dragon Jump Game.

Project Description:
Here we developed a game using HTML, CSS and JavaScript.
In this game, the player has to save the dragon from an obstacle i.e. fireball.
The player needs to move and jump the dragon using arrow keys from the keyboard and smartly needs to avoid a collision with the fireball.
By doing this, a player gets a +1 score for every dodge.
Remind it at as time passes, the speed of the obstacle increases linearly.
once the player fails to dodge the fireball and collides with it, the game is over. The player can get the final score on the screen after the game is over.

Technical Description:
Here we are using HTML, CSS and Vanilla JavaScript to build logic for 'Newton Dragon Jump Game'.
HTML: 
In HTML we simply put a main div class as "gamContainer".
inside the main div, we put three different classes viz. "dragon", "obstacle" and "gameOver".
Also for updating the score, we are putting id = "scoreCont".
CSS:
In CSS we are defining the background image of the game under the class "gameContainer".
We are positioning dragon and obstacle images in class="dragon" and class="obstacle" respectively.
As per our requirements, we are animating the obstacle and the dragon in class="obscaleAni" and class="animateDragon" respectively. 
And finally, as per the HTML logic, we are designing class="gameOver" and id=scoreCont.
JavaScript:
In JavaScript, first, we defined onkeydown event for the movement of our dragon using arrow keys.
In the setInterval function, we can get the x-axis and y-axis position of the dragon and obstacle every 10ms.
As per the obtained position of the dragon and obstacle, we can detect the collision of them and can execute game-over methods. 
