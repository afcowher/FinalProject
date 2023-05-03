function checkAnswers() {
    // this makes the quiz result container become visible when the quiz is graded.
    document.getElementById('resultContainerQuiz').style.visibility = 'visible';
    // this grabs the selected choice from the quiz for each question
    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');
    var q3 = document.querySelector('input[name="q3"]:checked');
    var q4 = document.querySelector('input[name="q4"]:checked');
    var q5 = document.querySelector('input[name="q5"]:checked');
    var q6 = document.querySelector('input[name="q6"]:checked');
    var q7 = document.querySelector('input[name="q7"]:checked');
    var q8 = document.querySelector('input[name="q8"]:checked');
    var q9 = document.querySelector('input[name="q9"]:checked');
    var q10 = document.querySelector('input[name="q10"]:checked');
    var correctAnswers = 0;
    var incorrectAnswers = [];
    // this is just a basic if else statement that compares the answer choice to the correct answer
    if (q1 && q1.value == "b") {
        // adds one correct answer
        correctAnswers++;
    } else {
        // writes the incorect question to the list
        incorrectAnswers.push("Question 1");
    }
    if (q2 && q2.value == "c") {
        correctAnswers++;
    } else {
        incorrectAnswers.push("Question 2");
    }
    if (q3 && q3.value == "a") {
        correctAnswers++;
    } else {
        incorrectAnswers.push("Question 3");
    }
    if (q4 && q4.value == "b") {
        correctAnswers++;
    } else {
        incorrectAnswers.push("Question 4");
    }
    if (q5 && q5.value == "a") {
        correctAnswers++;
    } else {
        incorrectAnswers.push("Question 5");
    }
    if (q6 && q6.value == "a") {
        correctAnswers++;
    } else {
        incorrectAnswers.push("Question 6");
    }
    if (q7 && q7.value == "b") {
        correctAnswers++;
    } else {
        incorrectAnswers.push("Question 7");
    }
    if (q8 && q8.value == "c") {
        correctAnswers++;
    } else {
        incorrectAnswers.push("Question 8");
    }
    if (q9 && q9.value == "c") {
        correctAnswers++;
    } else {
        incorrectAnswers.push("Question 9");
    }
    if (q10 && q10.value == "b") {
        correctAnswers++;
    } else {
        incorrectAnswers.push("Question 10");
    }

    var resultContainerQuiz = document.getElementById("resultContainerQuiz");
    // this creates the results for the quiz and writes them to the screen
    if (correctAnswers == 10) {
        resultContainerQuiz.innerHTML = "Congratulations! You got all of the questions correct!";
    } else if (correctAnswers >= 1) {
        resultContainerQuiz.innerHTML = "You got " + correctAnswers + " question correct and " + (10 - correctAnswers) + " question incorrect. Incorrect answers: " + incorrectAnswers.join(", ");
    } else {
        resultContainerQuiz.innerHTML = "Sorry, you got all of the questions incorrect. <br><br>Incorrect answers: <br>" + incorrectAnswers.join(", ");
    }
}