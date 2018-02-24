$(document).ready(function () {

    // Set up global variables
    var correctAnswers;
    var incorrectAnswers;
    var correct = 'Correct!';
    var incorrect = 'Sorry, that\'s incorrect!';
    var question;
    var answer;
    var wrongOne;
    var wrongTwo;
    var wrongThree;
    var questionCount;

    // Create all questions as objects with info as properties

    var questOne = {
        question:'Is this question true?',
        correct:'Yes',
        incorrectOne:'No',
        incorrectTwo:'Maybe',
        incorrectThree: 'What?'
    };

    var questTwo = {
        question:'x',
        correct:'x',
        incorrectOne:'r',
        incorrectTwo:'t',
        incorrectThree: 'q'
    };

    var questThree = {
        question:'x',
        correct:'x',
        incorrectOne:'r',
        incorrectTwo:'t',
        incorrectThree: 'q'
    };

    var questFour = {
        question:'x',
        correct:'x',
        incorrectOne:'r',
        incorrectTwo:'t',
        incorrectThree: 'q'
    };

    var questFive = {
        question:'x',
        correct:'x',
        incorrectOne:'r',
        incorrectTwo:'t',
        incorrectThree: 'q'
    };

    var questSix = {
        question:'x',
        correct:'x',
        incorrectOne:'r',
        incorrectTwo:'t',
        incorrectThree: 'q'
    };

    var questSeven = {
        question:'x',
        correct:'x',
        incorrectOne:'r',
        incorrectTwo:'t',
        incorrectThree: 'q'
    };
    
    var questEight = {
        question:'x',
        correct:'x',
        incorrectOne:'r',
        incorrectTwo:'t',
        incorrectThree: 'q'
    };

    var questNine = {
        question:'x',
        correct:'x',
        incorrectOne:'r',
        incorrectTwo:'t',
        incorrectThree: 'q'
    };

    var questTen = {
        question:'x',
        correct:'x',
        incorrectOne:'r',
        incorrectTwo:'t',
        incorrectThree: 'q'
    };

    // Create array containing all objects to pull from

    var questionChoice = [questOne, questTwo, questThree, questFour, questFive, questSix, questSeven, questEight, questNine, questTen];

    var randomPlaceAnswers = [];

    function set () {
        correctAnswers = 0;
        incorrectAnswers = 0;
        questionCount = 0;
    };

    // Pulls information from questionChoice array at current index number to build question and possible answers
    function buildQuestion () {
        question = questionChoice[questionCount].question;
        answer = questionChoice[questionCount].correct;
        wrongOne = questionChoice[questionCount].incorrectOne;
        wrongTwo = questionChoice[questionCount].incorrectTwo;
        wrongThree = questionChoice[questionCount].incorrectThree;
        questionCount++;

        //Place answers into local array
        tempAnswer = [answer, wrongOne, wrongTwo, wrongThree];

        //Use randomPlaceAnswers array to randomly assign answer placement
        for (var i=3; i > -1; i--) {
            var randomIndex = Math.floor(Math.random() * i);
            randomPlaceAnswers.push(tempAnswer[randomIndex]);
            tempAnswer.splice(randomIndex, 1, );
            console.log (randomPlaceAnswers)
            console.log (tempAnswer);
        }

        //Send question and randomly placed answers to page

        $('#question').text(question);
        $('#answerOne').text(randomPlaceAnswers[0]);
        $('#answerTwo').text(randomPlaceAnswers[1]);
        $('#answerThree').text(randomPlaceAnswers[2]);
        $('#answerFour').text(randomPlaceAnswers[3]);
    }

    set ();

    buildQuestion ();

    setTimeout(buildQuestion, 5000);

});