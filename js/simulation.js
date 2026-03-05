// =======================
// PRE-QUIZ & SIMULATION LOGIC
// =======================

const sectionTitle = document.getElementById("dynamic-section");
const contentArea = document.getElementById("content-area");
const submitBtn = document.getElementById("submit-quiz-btn");

// Create Next button dynamically
let nextBtn = document.createElement("button");
nextBtn.id = "next-btn";
nextBtn.textContent = "Next: Simulation";
nextBtn.style.display = "none";
nextBtn.style.float = "right";
nextBtn.style.marginTop = "10px";
contentArea.parentNode.appendChild(nextBtn);

// Load all pre-quiz questions at once
function loadFullQuiz() {
    sectionTitle.textContent = "Pre-Quiz";

    let quizHTML = "";
    preQuiz.forEach((qData, qIndex) => {
        quizHTML += `<div class="quiz-question">
            <h3>Question ${qIndex + 1}</h3>
            <p>${qData.question}</p>`;
        qData.options.forEach((option, oIndex) => {
            const letter = String.fromCharCode(65 + oIndex);
            quizHTML += `<label class="quiz-option" style="display:block; margin-bottom:6px;">
                <input type="radio" name="question${qIndex}" value="${oIndex}">
                ${letter}) ${option}
            </label>`;
        });
        quizHTML += `</div>`;
    });

    contentArea.innerHTML = quizHTML;

    // Reset buttons
    submitBtn.style.display = "inline-block";
    submitBtn.disabled = false;
    nextBtn.style.display = "none";

    // Remove old score if present
    const oldScore = document.getElementById("score-div");
    if (oldScore) oldScore.remove();
}

// Show correction under each failed/unanswered question
function showCorrection(questionDiv, qData) {
    const correctLetter = String.fromCharCode(65 + qData.correct);
    const correction = document.createElement("p");
    correction.classList.add("correction");
    correction.style.color = "#4B0082"; // deep purple
    correction.style.marginTop = "5px";
    correction.textContent = `Correct Answer: ${correctLetter}) ${qData.options[qData.correct]}`;
    questionDiv.appendChild(correction);
}

// Handle Submit Quiz click
submitBtn.addEventListener("click", () => {
    let score = 0;

    preQuiz.forEach((qData, qIndex) => {
        const selected = document.querySelector(`input[name="question${qIndex}"]:checked`);
        const questionDiv = document.querySelectorAll(".quiz-question")[qIndex];

        // Remove previous corrections
        const prevCorrection = questionDiv.querySelector(".correction");
        if (prevCorrection) prevCorrection.remove();

        if (selected) {
            if (parseInt(selected.value) === qData.correct) {
                score++;
            } else {
                showCorrection(questionDiv, qData);
            }
        } else {
            showCorrection(questionDiv, qData);
        }
    });

    // Show score at the bottom
    let scoreDiv = document.getElementById("score-div");
    if (!scoreDiv) {
        scoreDiv = document.createElement("div");
        scoreDiv.id = "score-div";
        scoreDiv.style.marginTop = "15px";
        scoreDiv.style.fontWeight = "600";
        contentArea.appendChild(scoreDiv);
    }
    scoreDiv.textContent = `Your Score: ${score} / ${preQuiz.length}`;

    // Disable submit and show next button
    submitBtn.disabled = true;
    nextBtn.style.display = "inline-block";
});

// Handle Next click -> Simulation placeholder
nextBtn.addEventListener("click", () => {
    sectionTitle.textContent = "Simulation";
    contentArea.innerHTML = `
        <h2>Simulation Section</h2>
        <p>This area will display the scenarios (not implemented yet).</p>
    `;
    submitBtn.style.display = "none";
    nextBtn.style.display = "none";
});

// Initialize pre-quiz when page loads
document.addEventListener("DOMContentLoaded", () => {
    loadFullQuiz();
});