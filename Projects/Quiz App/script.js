document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");

    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            question: "Who wrote 'Hamlet'?",
            choices: [
                "Charles Dickens",
                "Jane Austen",
                "William Shakespeare",
                "Mark Twain",
            ],
            answer: "William Shakespeare",
        },
    ];

    let score = 0;
    let currentIndex = 0;
    let answered = false; // Track if the question has been answered

    startBtn.addEventListener("click", startQuiz);

    function startQuiz() {
        startBtn.classList.add("hidden");
        showQuestion();
    }

    function showQuestion() {
        nextBtn.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        questionText.textContent = questions[currentIndex].question;

        choicesList.innerHTML = "";
        answered = false; // Reset answered flag for the new question

        questions[currentIndex].choices.forEach((choice) => {
            const li = document.createElement("li");
            li.textContent = choice;

            li.addEventListener("click", () => {
                if (answered) return; // Prevent multiple selections
                answered = true; // Mark the question as answered
                
                nextBtn.classList.remove("hidden");

                if (choice === questions[currentIndex].answer) {
                    score++;
                }

                // Highlight the correct and incorrect answers
                Array.from(choicesList.children).forEach((item) => {
                    item.style.pointerEvents = "none"; // Disable all choices
                    if (item.textContent === questions[currentIndex].answer) {
                        item.style.color = "green";
                    } else {
                        item.style.color = "red";
                    }
                });
            });

            choicesList.appendChild(li);
        });
    }

    nextBtn.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex === questions.length) {
            currentIndex = 0;
            questionContainer.classList.add("hidden");
            resultContainer.classList.remove("hidden");
            scoreDisplay.textContent = `${score}/${questions.length}`;
        } else {
            showQuestion();
        }
    });

    restartBtn.addEventListener("click", () => {
        location.reload();
    });
});
