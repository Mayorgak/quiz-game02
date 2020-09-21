
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;



const highScore = JSON.parse(localStorage.getItem("highScores")) || [];


username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    console.log("clicked the save btn");
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    };

    highScore.push(score);

    highScore.sort( (a,b) =>  b.score - a.score)
    
    highScore.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    console.log(highScore);

    window.location.assign("/");

};