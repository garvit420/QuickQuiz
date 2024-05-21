document.addEventListener("DOMContentLoaded", function() {
    const finalScore = document.getElementById('finalScore');
    const score = localStorage.getItem('mostRecentScore');
    finalScore.innerText = score;
    
    const restartButton = document.getElementById('restartButton');
    const homeButton = document.getElementById('homeButton');
    
    restartButton.addEventListener('click', () => {
        window.location.assign('game.html');
    });
    
    homeButton.addEventListener('click', () => {
        window.location.assign('index.html');
    });
});
