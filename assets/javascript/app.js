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
        question: 'x',
        correct: 'y',
        incorrectOne: 't',
        incorrectTwo: 'r',
        incorrectThree: 'x',
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
        $('#start').show();
        $('#end').hide();
        $('#gameplay').hide();
        $('#answerPage').hide();
    
    };

    function reset() {
        correctAnswers = 0;
        incorrectAnswers = 0;
        questionCount = 0;
        $('#end').hide();
        $('#answerPage').hide();
    };

    // Function to build gameplay div---------------------------------
    function buildQuestion() {

        console.log(questionCount);

        //Show gameplay div, hide others
        $('#start').hide();
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

        //checkClock();

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

        //Stop the clock running
        clockRunning=false;
        checkClock();

        //Format the answer page
        $('#status').text(correct);

        $('#answerGif').attr('src', './assets/images/right' +(Math.floor(Math.random()*5)+1) + '.gif');

        
        //Reveal answer page
        $('#gameplay').hide();
        $('#answerPage').show();

        // Change variable values and clear array in preparation fro next questions
        correctAnswers++;

        questionCount++;
        randomPlaceAnswers = [];

        //Trigger the next question or end game
        //checkQuestion();

    };

    function answerIncorrect() {

        // Stop the clock
        clockRunning=false;
        checkClock();

        // Format the answer page
        $('#answerGif').attr('src', './assets/images/wrong' +(Math.floor(Math.random()*5)+1) + '.gif');

        
        // Reveal answer page
        $('#gameplay').hide();
        $('#answerPage').show();

        // Change variable values and clear array in preparation fro next questions
        incorrectAnswers++;

        questionCount++;
        randomPlaceAnswers = [];

        // Trigger next question or end game
        //checkQuestion();

    };

    function checkQuestion() {
        if (questionCount < 10) {
            setTimeout(buildQuestion, 5000);
        } else {
            setTimeout(gameEnd, 5000);
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

    $('#startButton').on('click', buildQuestion);    

    $('.answer').on('click', function () {
        if ($(this).text() === answer) {
            answerCorrect();
        } else {
            answerIncorrect();
        };
    });


});