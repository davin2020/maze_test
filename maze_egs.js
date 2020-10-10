
// enterGame
// CONCEPTS
// 1 page with 2 css div, click Enter on 1st div and display=block the 2nd div and calls setupGame() func


// document.querySelector('#ghStars').innerHTML = htmlString;
// item.addEventListener('click', (e) => {
//     console.log('CLICKED blah ');
// })

function showSplashScreen() {
    document.querySelector('#enterGame').addEventListener('click', (e) => {
        console.log('enterGame CLICKED');
// document.querySelector('.mainScreen').innerHTML = 'style =\"display :none\"';
        //this adds css to div to make it display
        document.querySelector('.mainScreen2').style = 'display: block; height: 200px;';
        //this adds a class which makes 2nd div dislay block
        document.querySelector('.mainScreen').classList.add('showItem');
        // modal.classList.remove('open');

    })
}

// plus divs of class goodPath with mousehover listener which logs ok - plus divs of class badPath or badlandsPath with mousehover listener that console logs "badlands"
function setupGame() {
    //listen for mouse over events on good & bad paths/divs
    document.querySelector('.goodPath').addEventListener('click', (e) => {
        console.log('goodPath clicked');
        //stop this bubbling up to parent - event.stopPropagation();
        e.stopPropagation();
    })
    document.querySelector('.goodPath').addEventListener('mouseover', (e) => {
        console.log('goodPath mouseover');
        e.stopPropagation();
    })

    document.querySelector('.badlandsPath').addEventListener('click', (e) => {
        console.log('badlandsPath clicked');
    })
    document.querySelector('.badlandsPath').addEventListener('mouseover', (e) => {
        console.log('badlandsPath mouseover');
    })

    //start the timer when user clicks it
    document.querySelector('#countdownTimer').addEventListener('click', (e) => {
        console.log('countdownTimer clicked & started');

//timers not really workingn as expected
        //takes callback & amt of time in ms as params
        for (let i=5; i>0; i--) {
            setTimeout(() => {
                console.log('setTimeout '+ i)
            }, 10000);
            console.log('mikes awesome');
        }

        //takes callback & amt of time im  ms - will run every x amt of time
        // for (let i=5; i>0; i--) {
        //     setInterval(() => {
        //         console.log('countdown... ' );
        //     }, 5000);
            //this seems to keep counting downn by itself
        // }


    })
}

// MAIN
showSplashScreen();
setupGame();

// TO DOS - 10 Oct 2020

/*
MAZE CONCEPTS TO TEST

1 page with 2 css div, click Enter on 1st div and display=block the 2nd div and calls setupGame() func > done

on 2nd div - getReadyTimer button with click eventListener, which does time for 5 secs, only half working... -

plus a gameTimeRemaining timer for 30secs w click eventlistener-

plus an animateObstacles() func that moves individual things while timer >0 , and loops each items movement -

plus divs of class goodPath with mousehover listener which logs ok - plus divs of class badPath or badlandsPath with mousehover listener that console logs "badlands" > done

plus startingSquare and endingSquare divs, with eventListener for mousehover, logic would be if mouseHover on endingSquare && gameTimer >0 then alert You Win - if gameTimer counts down to 0 thten alert You Lose and show button w Play Again option w click eventListener-

need Play Again button to call resetGame or setupGame function

 */