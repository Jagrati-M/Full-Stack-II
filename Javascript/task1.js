
const questions = [
    {
        question: "Which language is used to make web pages interactive?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        correctAnswer: 2,
        explanation: "JavaScript adds interactivity to web pages."
    },
    {
        question: "Which HTML tag is used for a heading?",
        options: ["<h1>", "<p>", "<img>", "<br>"],
        correctAnswer: 0,
        explanation: "The h1 tag is used for a main heading."
    },
    {
        question: "Which keyword declares a variable in JavaScript?",
        options: ["style", "let", "color", "body"],
        correctAnswer: 1,
        explanation: "The let keyword declares a block-scoped variable."
    },
    {
        question: "Which symbol is used for a single-line comment in JavaScript?",
        options: ["<!-- -->", "**", "//", "##"],
        correctAnswer: 2,
        explanation: "Two forward slashes start a single-line JavaScript comment."
    },
    {
        question: "Which method displays a message in the browser console?",
        options: ["console.log()", "print()", "show()", "display()"],
        correctAnswer: 0,
        explanation: "console.log() displays information in the browser console."
    }
];

let cq = 0;
let score = 0;
let answered = false;

function showQuestion() {
    const q = questions[cq];

    document.getElementById("question").textContent = q.question;

    document.getElementById("progress").textContent =
        `Q ${cq + 1}/${questions.length}`;

    document.getElementById("score").textContent =
        `Score: ${score}`;

    document.getElementById("explanation").textContent = "";

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    answered = false;

    q.options.forEach(function(option, index) {
        const button = document.createElement("button");

        button.textContent = option;
        button.classList.add("option");

        button.addEventListener("click", function() {
            checkAnswer(index);
        });

        optionsContainer.appendChild(button);
    });

    document.getElementById("nextButton").textContent =
        cq === questions.length - 1
            ? "Finish Quiz"
            : "Next Question";
}

function checkAnswer(selectedIndex) {
    if (answered) {
        return;
    }

    answered = true;

    const q = questions[cq];
    const allOptions = document.querySelectorAll(".option");

    allOptions.forEach(function(button) {
        button.disabled = true;
    });

    if (selectedIndex === q.correctAnswer) {
        allOptions[selectedIndex].classList.add("correct");
        score++;
    } else {
        allOptions[selectedIndex].classList.add("incorrect");
        allOptions[q.correctAnswer].classList.add("correct");
    }

    document.getElementById("score").textContent =
        `Score: ${score}`;

    document.getElementById("explanation").textContent =
        q.explanation;
}

document.getElementById("nextButton").addEventListener("click", function() {
    if (!answered) {
        alert("Please select an option first!");
        return;
    }

    if (cq < questions.length - 1) {
        cq++;
        showQuestion();
    } else {
        alert(`Quiz finished! Your score is ${score}/${questions.length}`);
    }
});

showQuestion();
