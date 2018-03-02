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
        question: 'What was the working title of "Yesterday"?',
        correct: 'Scrambled Eggs',
        incorrectOne: 'All My Troubles',
        incorrectTwo: 'Yesternight',
        incorrectThree: 'I Believe'
    };

    var questTwo = {
        question: 'According to the song "Glass Onion", who was the walrus?',
        correct: 'Paul',
        incorrectOne: 'John',
        incorrectTwo: 'George',
        incorrectThree: 'Ringo',
    };

    var questThree = {
        question: 'What song did John Lennon cut the tape of during playback in order to create the ending?',
        correct: 'I Want You (She\'s So Heavy)',
        incorrectOne: 'Strawberry Fields Forever',
        incorrectTwo: 'Being for the Benefit of Mister Kite',
        incorrectThree: 'Happiness is a Warm Gun'
    };

    var questFour = {
        question: 'Who played keyboards on the "Get Back/Don\'t Let Me Down" single?',
        correct: 'Billy Preston',
        incorrectOne: 'Elton John',
        incorrectTwo: 'George Martin',
        incorrectThree: 'Billy Joel'
    };

    var questFive = {
        question: 'What was the last Beatles album to be recorded?',
        correct: 'Abbey Road',
        incorrectOne: 'Let It Be',
        incorrectTwo: 'Hey Jude',
        incorrectThree: 'Across the Universe'
    };

    var questSix = {
        question: 'Which Beatles song contains what is considered the first use of feedback in a recording?',
        correct: 'I Feel Fine',
        incorrectOne: 'Day Tripper',
        incorrectTwo: 'Taxman',
        incorrectThree: 'Revolution'
    };

    var questSeven = {
        question: 'What song was created by combining the tapes of two earlier verisons of the song, originally in different keys and tempos?',
        correct: 'Strawberry Fields Forever',
        incorrectOne: 'I\'m So Tired',
        incorrectTwo: 'Within You Without You',
        incorrectThree: 'Being For the Benefit of Mister Kite'
    };

    var questEight = {
        question: 'On what song did George Martin cut up pieces of previously recorded tape and rearrange them in order to create a part of the song?',
        correct: 'Yellow Submarine',
        incorrectOne: 'I Am the Walrus',
        incorrectTwo: 'Magical Mystery Tour',
        incorrectThree: 'Tomorrow Never Knows'
    };

    var questNine = {
        question: 'What song was written about a dog?',
        correct: 'Martha My Dear',
        incorrectOne: 'Julia',
        incorrectTwo: 'Why Don\'t We Do It In the Road?',
        incorrectThree: 'Mother Nature\'s Son'
    };

    var questTen = {
        question: 'Which is one of only two songs credited to all four Beatles?',
        correct: 'Flying',
        incorrectOne: 'Dig a Pony',
        incorrectTwo: 'Revolution 9',
        incorrectThree: 'Blue Jay Way'
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
        $('#start').show();
    };

    function reset() {
        correctAnswers = 0;
        incorrectAnswers = 0;
        questionCount = 0;
        $('#end').hide();
        buildQuestion();
    };

    function showAnswerPage() {
        $('#gameplay').hide();
        $('#answerPage').show();
    }

    // Function to build gameplay div---------------------------------
    function buildQuestion() {

        console.log(questionCount);

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

        //Show gameplay div, hide others
        $('#start').hide();
        $('#end').hide();
        $('#answerPage').hide();
        $('#gameplay').show();

    }

    function clock(){
        clockTime--;
        $('#countdown').text('You have ' + clockTime + ' seconds remaining');
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
            $('#countdown').text('You have ' + clockTime + ' seconds remaining');
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
        setTimeout(showAnswerPage, 75);

        // Change variable values and clear array in preparation fro next questions
        correctAnswers++;

        questionCount++;
        randomPlaceAnswers = [];

        //Trigger the next question or end game
        checkQuestion();

    };

    function answerIncorrect() {

        // Stop the clock
        clockRunning=false;
        checkClock();

        // Format the answer page
        $('#status').text(incorrect + ' ' + answer + '!');
        $('#answerGif').attr('src', './assets/images/wrong' +(Math.floor(Math.random()*5)+1) + '.gif');

        
        // Reveal answer page
        setTimeout(showAnswerPage, 75);

        // Change variable values and clear array in preparation fro next questions
        incorrectAnswers++;

        questionCount++;
        randomPlaceAnswers = [];

        // Trigger next question or end game
        checkQuestion();

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

        $('#statusOne').text('Thanks for playing!')

        $('#rightAnswers').text('You answered ' + correctAnswers + ' correctly!');

        $('#wrongAnswers').text('You answered ' + incorrectAnswers + ' incorrectly!');

        $('#reset').text('Click here to play again!');

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

    $('#reset').on('click', reset);


});