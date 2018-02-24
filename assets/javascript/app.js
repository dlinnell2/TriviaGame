$(document).ready(function () {

    var correctAnswers
    var incorrectAnswers
    var correct = 'Correct!'
    var incorrect = 'Sorry, that\'s incorrect!'

    // Create all questions as objects with info as properties

    var questOne = {
        question:'x',
        correct:'x',
        incorrectOne:'r',
        incorrectTwo:'t',
        incorrectThree: 'q'
    }

    console.log(questOne.question);


    var timeleft = 30;
    var downloadTimer = setInterval(function () {
        timeleft--;
        document.getElementById("countdowntimer").textContent = timeleft;
        if (timeleft <= 0)
            clearInterval(downloadTimer);
    }, 1000)

    $('#question').text(questOne.question)
    $('#answerOne').text(questOne.correct)
    $('#answerTwo').text(questOne.incorrectOne)
    $('#answerThree').text(questOne.incorrectTwo)
    $('#answerFour').text(questOne.incorrectThree)

});