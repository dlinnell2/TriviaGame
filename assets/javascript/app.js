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


    function set () {
        correctAnswers = 0;
        incorrectAnswers = 0;
        questionCount = 0;
    };

    function buildQuestion () {
        question = questionChoice[questionCount].question;
        answer = questionChoice[questionCount].correct;
        wrongOne = questionChoice[questionCount].incorrectOne;
        wrongTwo = questionChoice[questionCount].incorrectTwo;
        wrongThree = questionChoice[questionCount].incorrectThree;
        questionCount++;
    }

    set ();

    buildQuestion ();

    console.log (question);
    console.log (answer);
    console.log (wrongOne);
    console.log (wrongTwo);
    console.log (wrongThree);

    buildQuestion ();

    console.log (question);
    console.log (answer);
    console.log (wrongOne);
    console.log (wrongTwo);
    console.log (wrongThree);

});