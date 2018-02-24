$(document).ready(function () {

    var correctAnswers;
    var incorrectAnswers;
    var correct = 'Correct!';
    var incorrect = 'Sorry, that\'s incorrect!';
    var question;
    var answer;
    var wrongA;
    var wrongB;
    var wrongC;
    var questionCount;

    // Create all questions as objects with info as properties

    var questOne = {
        question:'x',
        correct:'x',
        incorrectOne:'r',
        incorrectTwo:'t',
        incorrectThree: 'q'
    };

    var questTwo = {};

    var questThree = {};

    var questFour = {};

    var questFive = {};

    var questSix = {};

    var questSeven = {};
    
    var questEight = {};

    var questNine = {};

    var questTen = {};

    // Create array containing all objects to pull from

    var questions = [questOne, questTwo, questThree, questFour, questFive, questSix, questSeven, questEight, questNine, questTen];

    $('#question').text(questOne.question);
    $('#answerOne').text(answer);
    $('#answerTwo').text(questOne.incorrectOne);
    $('#answerThree').text(questOne.incorrectTwo);
    $('#answerFour').text(questOne.incorrectThree);

    $('p').on('click', function() {
        if ($(this).text() === answer){
            console.log('correct');
        }
    });

    console.log (questions[0].question);

    


});