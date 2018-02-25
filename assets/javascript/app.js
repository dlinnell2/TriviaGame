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
    var clockInterval;
    var clockRunning = false;
    var clockTime;

    // Create all questions as objects with info as properties

    var questOne = {
        question: 'Is this question true?',
        correct: 'Yes',
        incorrectOne: 'No',
        incorrectTwo: 'Maybe',
        incorrectThree: 'What?'
    };

    var questTwo = {
        question: 'Is kitty cute?',
        correct: 'Definitely',
        incorrectOne: 'Cuter than anyone else',
        incorrectTwo: 'The CUTEST!',
        incorrectThree: 'You would have to be blind bear to say no'
    };

    var questThree = {
        question: 'x',
        correct: 'x',
        incorrectOne: 'r',
        incorrectTwo: 't',
        incorrectThree: 'q'
    };

    var questFour = {
        question: 'x',
        correct: 'x',
        incorrectOne: 'r',
        incorrectTwo: 't',
        incorrectThree: 'q'
    };

    var questFive = {
        question: 'x',
        correct: 'x',
        incorrectOne: 'r',
        incorrectTwo: 't',
        incorrectThree: 'q'
    };

    var questSix = {
        question: 'x',
        correct: 'x',
        incorrectOne: 'r',
        incorrectTwo: 't',
        incorrectThree: 'q'
    };

    var questSeven = {
        question: 'x',
        correct: 'x',
        incorrectOne: 'r',
        incorrectTwo: 't',
        incorrectThree: 'q'
    };

    var questEight = {
        question: 'x',
        correct: 'x',
        incorrectOne: 'r',
        incorrectTwo: 't',
        incorrectThree: 'q'
    };

    var questNine = {
        question: 'x',
        correct: 'x',
        incorrectOne: 'r',
        incorrectTwo: 't',
        incorrectThree: 'q'
    };

    var questTen = {
        question: 'x',
        correct: 'x',
        incorrectOne: 'r',
        incorrectTwo: 't',
        incorrectThree: 'q'
    };

    // Create array containing all objects to pull from

    var questionChoice = [questOne, questTwo, questThree, questFour, questFive, questSix, questSeven, questEight, questNine, questTen];

    var randomPlaceAnswers = [];

    function start() {
        correctAnswers = 0;
        incorrectAnswers = 0;
        questionCount = 0;
        $('#end').hide();
        $('#gameplay').hide();
        $('#answerPage').hide();
        buildQuestion();
    };

    function reset() {
        correctAnswers = 0;
        incorrectAnswers = 0;
        questionCount = 0;
        $('#end').hide();
        $('#answerPage').hide();
    };

    // Function of builid gameplay div--------------------------------
    function buildQuestion() {

        console.log(questionCount);

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
        for (var i = 4; i > 0; i--) {
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

        //Start the clock
        clockRunning=true;

        checkClock();

        console.log(clockRunning);

    }

    function clock(){
        clockTime--;
        $('#countdown').text(clockTime);
        if (clockTime === 0) {
            clearInterval(clockInterval);
            answerIncorrect();
        }
    };

    function clockRun(){
        clockInterval = setInterval(clock, 1000);
        };

    function checkClock(){
        if (clockRunning) {
            clockTime = 30;
            $('#countdown').text(clockTime);
            clockRun();
        } else {
            clearInterval(clockInterval);
        };
    };


    //When correct answer is selected---------------------------------
    function answerCorrect() {

        clockRunning=false;

        checkClock();

        $('#gameplay').hide();
        $('#answerPage').show();

        correctAnswers++;

        // Clear array and move question count in preparation of next game
        questionCount++;
        randomPlaceAnswers = [];

        checkQuestion();

    };

    function answerIncorrect() {

        clockRunning=false;

        checkClock();

        $('#gameplay').hide();
        $('#answerPage').show();

        incorrectAnswers++;

        // Clear array and move question count in preparation of next game
        questionCount++;
        randomPlaceAnswers = [];

        checkQuestion();

    };

    function checkQuestion() {
        if (questionCount < 10) {
            setTimeout(buildQuestion, 50);
        } else {
            setTimeout(gameEnd, 50);
        };
    };

    function gameEnd() {
        console.log('End!');

        $('#rightAnswers').text(correctAnswers);
        $('#wrongAnswers').text(incorrectAnswers);

        $('#answerPage').hide();
        $('#end').show();

    };

    //===============================================================

    //Gameplay

    //===============================================================

    start();

    $('.answer').on('click', function () {
        if ($(this).text() === answer) {
            answerCorrect();
        } else {
            answerIncorrect();
        };
    });


});