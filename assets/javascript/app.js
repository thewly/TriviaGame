function check(){
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var correct = 0;

    if (question1 === "300") {
        correct++;
    }
    if (question2 === "50") {
        correct++;
    }
    if (question3 === "80") {
        correct++;
    }
    if (question4 === "3000") {
        correct++;
    }
    if (question5 === "450") {
        correct++;
    }
    if (question6 === "1") {
        correct++;
    }

    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}










































































// var quizContainer = $("#quiz");
// var resultsContainer = $("#results");
// var submitButton = $("#submit");

// function buildQuiz() {
//     myQuestions.forEach((currentQuestion, questionNumber) => {

//     })
// }

// function showResults() { }

// // display quiz right away
// buildQuiz();

// //on submit, show results
// submitButton.addEventListener('click', showResults);

// var myQuestions = [
//     {
//         question: "Who is the strongest?",
//         answers: {
//             a: "Superman",
//             b: "The Terminator",
//             c: "Waluigi, obviously"
//         },
//         correctAnswer: "c"
//     },
//     {
//         question: "What is the best site ever created?",
//         answers: {
//             a: "SitePoint",
//             b: "Simple Steps Code",
//             c: "Trick question; they're both the best"
//         },
//         correctAnswer: "c"
//     },
//     {
//         question: "Where is Waldo really?",
//         answers: {
//             a: "Antarctica",
//             b: "Exploring the Pacific Ocean",
//             c: "Sitting in a tree",
//             d: "Minding his own business, so stop asking"
//         },
//         correctAnswer: "d"
//     }
// ];














// $("#startButton").on("click", function () {
//     $("#startScreen").css('display', 'none');
//     $("#quizScreen").css('display', 'inline-block');
// });

// $("#doneButton").on("click", function () {
//     for (var j = 0; j < radios.length; j++) {
//         var radios = document.getElementsByName("radioFruit");
//         console.log(radios);
//         if (radios[i].value === "correct" && radio.checked) {
//             console.log("this is broken" + amountCorrect);
//         }
//     }
//     $("#quizScreen").css('display', 'none');
//     $("#resultsScreen").css('display', 'inline-block');
// });
// var amountCorrect = 0;

// var radios = document.getElementsByName("radioFruit");
//   for(var j = 0; j < radios.length; j++) {
//     var radio = radios[j];
//     console.log("BS");
// }
// if ()


// if(radio.value === "correct" && radio.checked) {
//   console.log("this is broken"+amountCorrect);
// }
// console.log(amountCorrect);









































// var questions = [
//     ["what is 2 + 2", "4", "6", "8", "10", "A"],
//     ["what is 2 + 4", "4", "6", "8", "10", "B"],
//     ["what is 2 + 6", "4", "6", "8", "10", "C"],
//     ["what is 2 + 8", "4", "6", "8", "10", "D"]
// ]
// var correct = 0;
// var counter = 0;


// $("#test").on("click", function () {
//     nextQuestion();
// });

// function nextQuestion(){

// var form = $("<div>")
// form.append(questions[counter][0])
// for (var i=1; i<questions[counter].length; i++) {
//     var buttonOptions = '<br><input type="radio" id="radioApple" name="radioFruit" value="'+questions[counter][5]+'"><label for="'+questions[counter][5]+'">'+questions[counter][i]+'</label><br>'
//     form.append(buttonOptions);
// }


// $("#test").html(form);
// console.log(form);
//     `<p>
//             What was Steve Irwin's favorite color?
//     </p>
//     <div class="radio-toolbar">
//         <input type="radio" id="radioApple" name="radioFruit" value="apple">
//         <label for="radioApple">Apple</label><br>

//         <input type="radio" id="radioBanana" name="radioFruit" value="banana">
//         <label for="radioBanana">Banana</label><br>

//         <input type="radio" id="radioOrange" name="radioFruit" value="orange">
//         <label for="radioOrange">Orange</label> <br>

//         <input type="radio" id="radioGrape" name="radioFruit" value="grape">
//         <label for="radioGrape">Grape</label> <br>
//     </div>`
//     // initiate first question
//     questions[counter];
//     // $("#test").html(questions)
//     counter++;


// }
// test answers
    // increase counter
    // check answer
    // move to next question
    // finish quiz if out of questions


//      















































// var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
// var questions = [
//     ["What is 2 + 2?", "4", "6", "8", "10", "A"],
//     ["What is 2 + 4?", "4", "6", "8", "10", "B"],
//     ["What is 2 + 6?", "4", "6", "8", "10", "C"],
//     ["What is 2 + 8?", "4", "6", "8", "10", "D"]
// ];
// function _(x) {
//     return document.getElementById(x);
// }
// function renderQuestion() {
//     test = _("test");
//     if (pos >= questions.length){
//         test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
//         _("test_status").innerHTML = "Test Completed";
//         pos = 0;
//         correct = 0;
//         return false;
//     }
//     _("test_status").innerHTML = "Question " + (pos+1) + " of " +questions.length;
//     question = questions[pos][0];
//     chA = questions[pos][1];
//     chB = questions[pos][2];
//     chC = questions[pos][3];
//     chD = questions[pos][4];
//     test.innerHTML = "<h3>"+question+"</h3>";
//     test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
//     test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
//     test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
//     test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
//     test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
// }
// function checkAnswer() {
//     choices = document.getElementsByName("choices");
//     console.log(choices);
//     for (var i=0; i<choices.length; i++) {
//         if (choices[i].checked) {
//             choice = choices[i].nodeValue;
//             console.log("test" + choice);
//         }
//     }
//     console.log(choice);
//     console.log(questions[pos][4]);
//     // I need to add the correct/false screens, the code below breaks it & I don't know why
//     if (choice === questions[pos][4]){
//         correct++;
//         _("correctAnswer").innerHTML("You are Correct!");
//     }
//     // else {
//     //     wrong++;
//     //     _("wrongAnswer").innerHTML("You are Wrong!");
//     // }
//     pos++;
//     renderQuestion();
// }
// // I need to make this start upon button click, not begin on page load
// window.addEventListener ("load", renderQuestion, false);