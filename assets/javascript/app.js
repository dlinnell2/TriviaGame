$(document).ready(function () {

    // Set up global variables
    var correctAnswers;
    var incorrectAnswers;
    var correct = 'Correct!';
    var incorrect = 'Sorry! The correct answer was';
    var question;
    var answer;
    var wrongOne;
    var wrongTwo;
    var wrongThree;
    var questionCount;
    var countdownTimer;

    // Create all questions as objects with info as properties

    var questOne = {
        question:'Is this question true?',
        correct:'Yes',
        incorrectOne:'No',
        incorrectTwo:'Maybe',
        incorrectThree: 'What?'
    };

    var questTwo = {
        question:'Is kitty cute?',
        correct:'Definitely',
        incorrectOne:'Cuter than anyone else',
        incorrectTwo:'The CUTEST!',
        incorrectThree: 'You would have to be blind bear to say no'
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

    // Function of builid gameplay div
    function buildQuestion () {

        //Show gameplay div, hide others
        $('#gameplay').show();
        $('#answerPage').hide();

        // Pull information from current question array and attach to variables
        question = questionChoice[questionCount].question;
        answer = questionChoice[questionCount].correct;
        wrongOne = questionChoice[questionCount].incorrectOne;
        wrongTwo = questionChoice[questionCount].incorrectTwo;
        wrongThree = questionChoice[questionCount].incorrectThree;

        //Place answers into local array
        tempAnswer = [answer, wrongOne, wrongTwo, wrongThree];

        //Use randomPlaceAnswers array to randomly assign answer placement
        for (var i=4; i > 0; i--) {
            var randomIndex = Math.floor(Math.random() * i);
            randomPlaceAnswers.push(tempAnswer[randomIndex]);
            tempAnswer.splice(randomIndex, 1, );
        }

        //Send question and randomly placed answers to page

        $('#question').text(question);
        $('#answerOne').text(randomPlaceAnswers[0]);
        $('#answerTwo').text(randomPlaceAnswers[1]);
        $('#answerThree').text(randomPlaceAnswers[2]);
        $('#answerFour').text(randomPlaceAnswers[3]);

    }

    //When correct answer is selected
    function answerCorrect () {
        $('#gameplay').hide();
        $('#answerPage').show();
        console.log ('correct')

        correctAnswers++;

        // Clear array and move question count in preparation of next game
        questionCount++;
        randomPlaceAnswers = [];

        setTimeout(buildQuestion, 5000);

    };

    function answerIncorrect () {
        $('#gameplay').hide();
        $('#answerPage').show();
        console.log ('incorrect')

        incorrectAnswers++;

        // Clear array and move question count in preparation of next game
        questionCount++;
        randomPlaceAnswers = [];

        setTimeout(buildQuestion, 5000);
    }

    //===============================================================

    //Gameplay

    //===============================================================

    set ();

    buildQuestion ();

    $('.answer').on('click', function(){
        if ($(this).text() === answer) {
            answerCorrect ();
        } else {
            answerIncorrect ();
        };
    })

});