// I don't understand what's happening with the below variable
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    ["What is 2 + 2?", "4", "6", "8", "10", "A"],
    ["What is 2 + 4?", "4", "6", "8", "10", "B"],
    ["What is 2 + 6?", "4", "6", "8", "10", "C"],
    ["What is 2 + 8?", "4", "6", "8", "10", "D"]
];
function _(x) {
    return document.getElementById(x);
}
function renderQuestion() {
    test = _("test");
    if (pos >= questions.length){
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
        _("test_status").innerHTML = "Test Completed";
        pos = 0;
        correct = 0;
        return false;
    }
    _("test_status").innerHTML = "Question " + (pos+1) + " of " +questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer() {
    choices = document.getElementsByName("choices");
    for (var i=0; i<choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].nodeValue;
        }
    }
    // I need to add the correct/false screens, the code below breaks it & I don't know why
    if (choice === questions[pos][4]){
        correct++;
        // _("correctAnswer").innerHTML("You are Correct!");
    }
    // else {
    //     wrong++;
    //     _("wrongAnswer").innerHTML("You are Wrong!");
    // }
    pos++;
    renderQuestion();
}
// I need to make this start upon button click, not begin on page load
window.addEventListener ("load", renderQuestion, false);