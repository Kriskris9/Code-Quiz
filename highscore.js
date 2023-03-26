var topScore = document.querySelector('#scores');
var highestScore = document.querySelector('#highscore');


function showScore() {

var initials =  localStorage.getItem('initials');
   
var score = localStorage.getItem('score');

highestScore.textContent = initials + " " + score;

    // var highScores= JSON.parse(localStorage.getItem("highScores")) || [];
    
    // highScores.forEach(function(score) {
    //     var liEl = document.createElement("li");
//     //     liEl.textContent = score.initials + " - " + score.score;
//     //     topScore.appendChild(liEl);
//     });
 
    
    
}
showScore();