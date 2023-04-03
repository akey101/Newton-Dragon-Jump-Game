let score = 0; //Score Global Value
let cross = true; 

document.onkeydown = function (e) {
    //console.log(e.key);
    if (e.key == 'ArrowUp') { //for jumping movement as soon as key press
        let dragon = document.querySelector('.dragon');
        dragon.classList.add('animateDragon');
        setTimeout(() => {
            dragon.classList.remove('animateDragon')
        }, 700);
    }
    if (e.key == 'ArrowRight') { // for right side movement as soon as key press
        let dragon = document.querySelector('.dragon');
        let dragonX = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
        dragon.style.left = (dragonX + 80) + "px";
    }
    if (e.key == 'ArrowLeft') { // for left side movement as soon as key press
        let dragon = document.querySelector('.dragon');
        let dragonX = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
        dragon.style.left = (dragonX - 80) + "px";
    }
}

setInterval(() => {
    let dragon = document.querySelector('.dragon');
    let gameOver = document.querySelector('.gameOver');
    let obstacle = document.querySelector('.obstacle');

    let dx = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left')); //for dragon X co-ordinate
    let dy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('top')); //for dragon Y co-ordinate

    let ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left')); //for obstacle X co-ordinate
    let oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top')); //for obstacle Y co-ordinate

    let offsetX = Math.abs(dx - ox);
    let offsetY = Math.abs(dy - oy);

    //console.log(offsetX, offsetY)

    if (offsetX < 73 && offsetY < 52) { //for collision
        gameOver.innerHTML = "GAME OVER !!! Your Score is:  " + score + " !!! Reload to Play Again...";
        obstacle.classList.remove('obstacleAni');

        document.onclick = function () {
            location.reload();
        }

        document.onkeydown = function (e) {
            if (e.key == 'Enter') {
                location.reload();
            }
        }
    }
    else if (offsetX < 145 && cross) { //for non collision
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1; // for linear speed increment reducing animation duration time
            obstacle.style.animationDuration = newDur + 's';
            //console.log('New animation duration: ', newDur);
        }, 500);
    }
}, 10);

function updateScore(score) { //for realtime score update 
    scoreCont.innerHTML = "Your Score: " + score;
}