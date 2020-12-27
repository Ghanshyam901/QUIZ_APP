const quizData = [
    {
        question: 'Which of the following option leads to the portability and security of Java?',
        a: "Bytecode is executed by JVM",
        b: "The applet makes the Java code secure and portable",
        c: "Use of exception handling",
        d: "Dynamic binding between objects",
        correct: "a",
    },
    {
        question: "Which of the following is not a Java features?",
        a: "Dynamic",
        b: "Architecture Neutral",
        c: "Use of pointers",
        d: "Object-oriented",
        correct: "c",
    },
    {
        question:"_____ is used to find and fix bugs in the Java programs.",

        a : "JVM",
        b : "JRE",
        c : "JDK",
        d : "JDB",
        correct: "d",
    },
    {
        question: " What is the return type of the hashCode() method in the Object class?",

        a : "Object",
        b : "int",
        c : "long",
        d : "void",
        correct: "b",
    },
    {

       question: "Which of the following is a valid long literal?",

       a : "ABH8097",
       b : "L990023",
       c :  "904423",
       d : "0xnf029L",
       correct:"c",

    },
    {
    question : "is java and java script is same",
    a :"yes",
    b: "no",
    correct :"b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});