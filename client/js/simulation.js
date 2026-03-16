// =======================
// PRE-QUIZ & SIMULATION LOGIC
// =======================

// =======================
// SOCIAL ENGINEERING SCENARIOS
// =======================

const scenarios = [
    /* =======================
    PHISHING SCENARIOS
    ======================= */

    {
        type: "phishing",
        title: "Email Phishing – System Maintenance",
        inboxSubject: "System Maintenance – Immediate Action Required",
        content: `
<p><strong>From:</strong> IT Support &lt;support@company-secureteam.com&gt;</p>

<p>You open your email inbox and notice a message marked as <strong>urgent</strong>. The email claims the company is performing an emergency security upgrade and all employees must verify their credentials.</p>

<p>The message warns that if you do not act within 24 hours, your account access may be restricted.</p>

<p>The email includes a login link labelled <strong>Secure Login Portal</strong>.</p>

<p>However, something feels slightly unusual about the email address and tone of urgency.</p>
`,
        options: [
            "Click the login link and enter your credentials",
            "Ignore the email completely",
            "Report the email to IT/security"
        ],
        correct: 2,
        feedback: [
            "❌ Attackers often impersonate IT to steal credentials.",
            "⚠️ Ignoring avoided the attack but reporting helps protect others.",
            "✅ Correct! Reporting suspicious emails helps stop phishing attacks."
        ]
    },

    {
        type: "phishing",
        title: "Email Phishing – Payroll Update",
        inboxSubject: "Payroll Update Required",
        content: `
<p>An email appears in your inbox claiming to be from the payroll department.</p>

<p>The message says there has been an error in the payroll system and employees must confirm their bank details through an attached form.</p>

<p>The email looks professional and contains the company logo.</p>

<p>You were not expecting any payroll changes.</p>
`,
        options: [
            "Download and complete the attachment",
            "Contact HR through official channels to verify the request",
            "Forward the email to colleagues"
        ],
        correct: 1,
        feedback: [
            "❌ Downloading attachments from unknown sources may install malware.",
            "✅ Correct! Verifying through official channels prevents phishing.",
            "⚠️ Forwarding may spread the attack."
        ]
    },

    {
        type: "phishing",
        title: "Email Phishing – Account Suspension Warning",
        inboxSubject: "Account Suspension Notice",
        content: `
<p>You receive an email warning that your company email account will be suspended due to unusual activity.</p>

<p>The message urges you to verify your identity immediately through a provided link.</p>

<p>The sender address appears slightly different from the official company domain.</p>
`,
        options: [
            "Delete the email immediately",
            "Click the link and verify your account",
            "Report the email to IT/security"
        ],
        correct: 2,
        feedback: [
            "⚠️ Deleting avoids risk but does not alert security teams.",
            "❌ Entering credentials would compromise your account.",
            "✅ Correct! Reporting phishing helps protect the organisation."
        ]
    },

    /* =======================
    BAITING SCENARIOS
    ======================= */

    {
        type: "baiting",
        title: "Baiting – USB Found in Office",
        content: `
<p>You return from lunch and notice a USB flash drive placed on your desk labelled 
<strong>Confidential Financial Reports</strong>.</p>

<p>No one in your department mentioned sending files via USB. The device looks new and professionally labelled.</p>

<p>Curiosity kicks in — it might contain important documents. However, attackers sometimes leave infected USB drives in workplaces hoping employees will plug them in.</p>
`,
        options: [
            "Plug the USB into your computer to see what files are inside",
            "Take the USB to IT/security for inspection",
            "Leave it on the desk and continue working"
        ],
        correct: 1,
        feedback: [
            "❌ Unknown USB devices can contain malware.",
            "✅ Correct! IT can safely analyse suspicious devices.",
            "⚠️ Leaving it avoids risk but does not address the threat."
        ]
    },

    {
        type: "baiting",
        title: "Baiting – Free Software Download",
        content: `
<p>While browsing online during work, you see an advertisement offering a free software tool that promises to increase productivity.</p>

<p>The pop‑up claims the program integrates with company systems and offers powerful automation features.</p>

<p>The download link is not from the official software website.</p>
`,
        options: [
            "Install the software immediately",
            "Report the pop‑up to IT/security",
            "Download it and scan later"
        ],
        correct: 1,
        feedback: [
            "❌ Installing unknown software may install spyware.",
            "✅ Correct! Reporting suspicious downloads protects company systems.",
            "⚠️ Downloading still risks malware infection."
        ]
    },

    {
        type: "baiting",
        title: "Baiting – Online Giveaway",
        content: `
<p>You receive a message saying you have won a free smartphone from an online giveaway.</p>

<p>The message asks you to fill in personal details to claim the prize.</p>

<p>You do not remember entering any giveaway.</p>
`,
        options: [
            "Provide your information to claim the prize",
            "Reply asking if the giveaway is real",
            "Report the message as suspicious"
        ],
        correct: 2,
        feedback: [
            "❌ Providing personal information may lead to identity theft.",
            "⚠️ Responding confirms your email is active.",
            "✅ Correct! Reporting prevents scams."
        ]
    },

    /* =======================
    PRETEXTING SCENARIOS
    ======================= */

    {
        type: "pretexting",
        title: "Pretexting – Phone Call from IT Support",
        content: `
<p>You receive a phone call from someone claiming to be from the company's IT department.</p>

<p>The caller says unusual login attempts were detected on your account and asks for your password so they can "secure the system."</p>

<p>The caller sounds professional and insists the issue must be resolved immediately.</p>
`,
        options: [
            "Give them your password so they can fix the issue",
            "Hang up and report the call to IT/security",
            "Ask them to call back later"
        ],
        correct: 1,
        feedback: [
            "❌ IT departments never ask for passwords.",
            "✅ Correct! Reporting suspicious calls prevents pretexting attacks.",
            "⚠️ Asking them to call later still leaves the situation unresolved."
        ]
    },

    {
        type: "pretexting",
        title: "Pretexting – HR Information Request",
        content: `
<p>You receive an email from someone claiming to be a new HR employee.</p>

<p>They say they are updating employee records and ask you to send your employee ID, address, and phone number.</p>

<p>The email appears polite but you do not recognise the sender.</p>
`,
        options: [
            "Send the requested information",
            "Verify the request with HR before sharing anything",
            "Ignore the email"
        ],
        correct: 1,
        feedback: [
            "❌ Sharing personal data could expose sensitive information.",
            "✅ Correct! Always verify identity before sharing data.",
            "⚠️ Ignoring avoids risk but does not alert security teams."
        ]
    },

    {
        type: "pretexting",
        title: "Pretexting – Vendor Security Audit",
        content: `
<p>An email arrives from someone claiming to be an external security auditor working with your company.</p>

<p>The sender says they need temporary login credentials to test the company system.</p>

<p>The request seems urgent but you were not informed about any audit.</p>
`,
        options: [
            "Provide temporary login access",
            "Verify the audit with IT or management",
            "Ignore the email"
        ],
        correct: 1,
        feedback: [
            "❌ Sharing credentials exposes systems to attackers.",
            "✅ Correct! Verification prevents social engineering attacks.",
            "⚠️ Ignoring avoids immediate harm but does not report the threat."
        ]
    }

];

// =======================
// RANDOM SCENARIO GENERATOR
// =======================

function randomScenario(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// This creates 3 random scenarios (one of each type)
let simulationscenarios = [
    randomScenario(scenarios.filter(s => s.type === "phishing")),
    randomScenario(scenarios.filter(s => s.type === "baiting")),
    randomScenario(scenarios.filter(s => s.type === "pretexting"))
];
// =======================
// POST-SIMULATION QUIZ QUESTIONS
// =======================

const postQuizQuestions = [

    {
        question: `
<div style="border:1px solid #ccc; border-radius:8px; padding:15px; background:#f9f9f9; line-height:1.5; margin-bottom:10px;">
<p><strong>From:</strong> accounts-update@company-payroll.co</p>
<p><strong>Subject:</strong> Urgent Payroll Verification</p>
<hr>
<p>"Due to a system update, all employees must verify their payroll information today to avoid salary delays. Please log in using the secure portal below."</p>
</div>

<p>What steps would you take before interacting with this message?</p>
`,
        keywords: ["verify", "check sender", "report", "do not click"],
        tip: "Always verify unexpected payroll emails through official channels and never click suspicious links."
    },

    {
        question: `
<div style="border:1px solid #ccc; border-radius:8px; padding:15px; background:#fff3f3; line-height:1.5; margin-bottom:10px;">
<p><strong>Pop-up Message:</strong></p>
<p>"WARNING: Your computer is infected with a dangerous virus. Immediate action is required. Download the security cleaner below to remove the threat."</p>
</div>

<p>Describe how you should respond to this situation.</p>
`,
        keywords: ["close", "report", "IT", "do not download"],
        tip: "Never download software from unexpected pop-ups. Close the alert and report it to IT immediately."
    },

    {
        question: `
<div style="border:1px solid #ccc; border-radius:8px; padding:15px; background:#f0f0f0; line-height:1.5; margin-bottom:10px;">
<p>You arrive at work and find a USB flash drive lying near the printer labelled <strong>"Staff Salary Data"</strong>.</p>
</div>

<p>Explain why attackers sometimes leave devices like this in workplaces and describe the safest way to handle the situation.</p>
`,
        keywords: ["baiting", "do not plug", "report", "IT"],
        tip: "Suspicious USB drives may contain malware. Do not plug them in; report them to IT for safe handling."

    },

    {
        question: `
<div style="border:1px solid #ccc; border-radius:8px; padding:15px; background:#eef6ff; line-height:1.5; margin-bottom:10px;">
<p>Someone calls your office phone and introduces themselves as a member of the IT department. They say they detected suspicious login attempts on your account and need your password to secure the system.</p>
</div>

<p>Explain how you would determine whether this caller is legitimate before taking any action.</p>
`,
        keywords: ["verify", "IT", "do not share password", "report"],
        tip: "Legitimate IT staff never ask for passwords. Always verify the caller through official channels and report suspicious calls."

    },

    {
        question: `
<div style="border:1px solid #ccc; border-radius:8px; padding:15px; background:#f9f9f9; line-height:1.5; margin-bottom:10px;">
<p>List three warning signs that may indicate an email message is part of a phishing attack.</p>
</div>
`,
        keywords: ["urgent", "unknown sender", "suspicious link", "spelling"],
        tip: "Look for urgent requests, unknown senders, suspicious links, or spelling errors in emails."

    },

    {
        question: `
<div style="border:1px solid #ccc; border-radius:8px; padding:15px; background:#fff3f3; line-height:1.5; margin-bottom:10px;">
<p>A coworker sends you a message saying they cannot access an important system because they forgot their password. They ask if they can temporarily use your account to finish their task quickly.</p>
</div>

<p>What should you do in this situation and why?</p>
`,
        keywords: ["do not share password", "reset password", "IT"],
        tip: "Never share your account credentials. Encourage your coworker to reset their password or contact IT."

    },

    {
        question: `
<div style="border:1px solid #ccc; border-radius:8px; padding:15px; background:#f0f0f0; line-height:1.5; margin-bottom:10px;">
<p>Imagine someone contacts you claiming to be conducting a company security audit and asks for temporary login access so they can test the system.</p>
</div>

<p>What concerns would this request raise and what should you do before providing any information?</p>
`,
        keywords: ["verify", "management", "IT", "do not share credentials"],
        tip: "Verify the legitimacy of audits through management or IT before sharing any credentials."
    },

    {
        question: `
<div style="border:1px solid #ccc; border-radius:8px; padding:15px; background:#eef6ff; line-height:1.5; margin-bottom:10px;">
<p>Explain two actions employees should take if they believe someone attempted to trick them into revealing company information.</p>
</div>
`,
        keywords: ["report", "security", "IT", "verify"],
        tip: "Immediately report suspicious attempts to IT or security and verify any unusual requests."
    },

    {
        question: `
<div style="border:1px solid #ccc; border-radius:8px; padding:15px; background:#f9f9f9; line-height:1.5; margin-bottom:10px;">
<p>You receive a message saying employees are eligible for a special reward program and asking you to provide your employee number and contact details to claim the prize.</p>
</div>

<p>What factors would you consider to decide whether this message is legitimate?</p>
`,
        keywords: ["verify", "promotion", "report", "do not share personal information"],
        tip: "Verify legitimacy through official channels and never share personal information without confirmation."
    },

    {
        question: `
<div style="border:1px solid #ccc; border-radius:8px; padding:15px; background:#fff3f3; line-height:1.5; margin-bottom:10px;">
<p>In your own words, describe how social engineering attacks exploit human behaviour in workplaces.</p>
</div>
`,
        keywords: ["trust", "urgency", "authority", "deception"],
        tip: "Social engineering exploits trust, urgency, authority, or curiosity to trick employees into unsafe actions."

    }

];

// Track scenario state
let currentScenarioIndex = 0;
let scenarioScore = 0;
// =======================
// POST QUIZ STATE
// =======================

let postQuizIndex = 0;
let postQuizResponses = [];
let postQuizScores = [];

// DOM Elements
const sectionTitle = document.getElementById("dynamic-section");
const contentArea = document.getElementById("content-area");
const submitBtn = document.getElementById("submit-quiz-btn");
let nextBtn = document.getElementById("next-btn");

// Initialize pre-quiz when page loads
document.addEventListener("DOMContentLoaded", () => {
    loadFullQuiz();
});

// =======================
// Load all Pre-Quiz Questions
// =======================
function loadFullQuiz() {
    sectionTitle.textContent = "Pre-Quiz";

    let quizHTML = "";

    preQuiz.forEach((qData, qIndex) => {
        quizHTML += `<div class="quiz-question" style="margin-bottom:15px;">
            <h3>Question ${qIndex + 1}</h3>
            <p>${qData.question}</p>`;

        qData.options.forEach((option, oIndex) => {
            const letter = String.fromCharCode(65 + oIndex); // A, B, C, D
            quizHTML += `<label class="quiz-option" style="display:block; margin:3px 0;">
                <input type="radio" name="q${qIndex}" value="${oIndex}">
                ${letter}) ${option}
            </label>`;
        });

        quizHTML += `</div>`;
    });

    // Placeholders for score and buttons
    quizHTML += `
        <div id="score-div" style="margin-top:15px; font-weight:600;"></div>
        <div style="display:flex; justify-content:flex-end; margin-top:15px;">
            <button id="next-btn-prequiz" style="display:none; padding:10px 20px; background:#4B0082; color:#fff; border:none; border-radius:6px; cursor:pointer;">Next: Simulation</button>
        </div>
    `;

    contentArea.innerHTML = quizHTML;

    // Reset buttons
    submitBtn.style.display = "inline-block";
    submitBtn.disabled = false;
}

// =======================
// Show correction under each failed/unanswered question
// =======================
function showCorrection(questionDiv, qData) {
    const correctLetter = String.fromCharCode(65 + qData.correct);
    const correction = document.createElement("div");
    correction.className = "correction";
    correction.style.color = "#4B0082"; // deep purple
    correction.style.marginTop = "5px";
    correction.style.fontWeight = "600";
    correction.textContent = `Correct Answer: ${correctLetter}) ${qData.options[qData.correct]}`;
    questionDiv.appendChild(correction);
}

// =======================
// Handle Submit Quiz Click
// =======================
submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let score = 0;

    preQuiz.forEach((qData, qIndex) => {
        const selected = document.querySelector(`input[name="q${qIndex}"]:checked`);
        const questionDiv = document.querySelectorAll(".quiz-question")[qIndex];

        // Remove previous corrections
        const prevCorrection = questionDiv.querySelector(".correction");
        if (prevCorrection) prevCorrection.remove();

        if (selected) {
            if (Number(selected.value) === Number(qData.correct)) {
                score++;
            } else {
                showCorrection(questionDiv, qData);
            }
        } else {
            // No answer selected
            showCorrection(questionDiv, qData);
        }
    });

    // Show score
    const scoreDiv = document.getElementById("score-div");
    scoreDiv.textContent = `Your Score: ${score} / ${preQuiz.length}`;

    // Mark pre-quiz as completed
    sessionStorage.setItem("preQuizCompleted", "true");

    // Hide submit button and show next button
    submitBtn.style.display = "none";
    const nextBtnPreQuiz = document.getElementById("next-btn-prequiz");
    nextBtnPreQuiz.style.display = "inline-block";
    nextBtnPreQuiz.addEventListener("click", startSimulationInbox);
});

// =======================
// Handle Next Click -> Simulation Inbox
// =======================
function startSimulationInbox() {
    sectionTitle.textContent = "Simulation Inbox";

    // Hide the pre-quiz Next button (already hidden by changing contentArea)
    submitBtn.style.display = "none";

    // Build Inbox HTML
    let inboxHTML = `<h3>Inbox</h3><div class="inbox">`;
    // Generic realistic inbox
    inboxHTML += `
<div class="email" style="padding:10px;border:1px solid #ccc;margin-bottom:8px;border-radius:6px;">
<p><strong>Staff Meeting Reminder</strong></p>
<p>Reminder: Weekly meeting scheduled tomorrow at 10 AM.</p>
</div>

<div class="email" style="padding:10px;border:1px solid #ccc;margin-bottom:8px;border-radius:6px;">
<p><strong>Payroll Update</strong></p>
<p>Your monthly payroll statement is now available.</p>
</div>

<div class="email" style="padding:10px;border:1px solid #ccc;margin-bottom:8px;border-radius:6px;">
<p><strong>New Clinic Policy</strong></p>
<p>Please review the updated workplace policy document.</p>
</div>
`;

    simulationscenarios.forEach((sc, idx) => {
        if (sc.type === "phishing") {
            // Phishing looks like an email
            inboxHTML += `
        <div class="email unread" data-index="${idx}" style="padding:10px;border:1px solid #ccc;margin-bottom:8px;border-radius:6px;cursor:pointer;background:#fff3f3;">
            <p><strong>${sc.inboxSubject || sc.title}</strong></p>
            <p>${sc.content.substring(0, 80).replace(/<[^>]*>?/gm, '')}...</p>
        </div>
        `;
        } else {
            // Baiting & pretexting are just descriptions
            inboxHTML += `
        <div class="scenario-description" data-index="${idx}" style="padding:10px;border:1px solid #ccc;margin-bottom:8px;border-radius:6px;cursor:pointer;background:#f9f9f9;">
            <p><strong>${sc.title}</strong></p>
            <p>${sc.content.substring(0, 80).replace(/<[^>]*>?/gm, '')}...</p>
        </div>
        `;
        }
    });

    inboxHTML += `</div>`;
    contentArea.innerHTML = inboxHTML;

    // Add click listeners to scenarios
    document.querySelectorAll(".email, .scenario-description").forEach(el => {
        el.addEventListener("click", () => {
            const idx = parseInt(el.dataset.index);
            currentScenarioIndex = idx;
            loadScenario(idx);
        });
    });
}

// =======================
// Load one scenario at a time
// =======================
function loadScenario(index) {
    const scenario = simulationscenarios[index];

    let html = `
<div style="margin-bottom:10px;font-weight:600;">
Scenario ${index + 1} of ${simulationscenarios.length}
</div>

<div class="quiz-question">
<h3>${scenario.title}</h3>
`;

    html += `
<div style="margin-bottom:10px;font-size:14px;color:#555;">
Attack Type: <strong>${scenario.type.toUpperCase()}</strong>
</div>
`;


    if (scenario.type === "phishing") {

        html += `
<div style="background:#fff;border:1px solid #ccc;padding:15px;border-radius:8px;margin-top:10px;">
<p><strong>From:</strong> IT Support &lt;support@company.com&gt;</p>
<p><strong>Subject:</strong> ${scenario.inboxSubject}</p>
<hr>
${scenario.content}
</div>
`;
    }

    else if (scenario.type === "baiting") {

        html += `
<div style="background:#f4f4f4;border:1px solid #ccc;padding:15px;border-radius:8px;margin-top:10px;">
<p><strong>System Notification</strong></p>
<hr>
${scenario.content}
</div>
`;
    }

    else if (scenario.type === "pretexting") {

        html += `
<div style="background:#eef6ff;border:1px solid #ccc;padding:15px;border-radius:8px;margin-top:10px;">
<p><strong>Incoming Communication</strong></p>
<hr>
${scenario.content}
</div>
`;
    }

    scenario.options.forEach((option, oIndex) => {
        const letter = String.fromCharCode(65 + oIndex);
        html += `<label class="quiz-option" style="display:block; margin:4px 0; padding:6px 8px; border-radius:6px; border:1px solid #ddd; cursor:pointer; transition: background 0.2s;">
            <input type="radio" name="scenario-option" value="${oIndex}">
            ${letter}) ${option}
        </label>`;
    });

    contentArea.innerHTML = html;

    // Style: hover effect for options
    const labels = contentArea.querySelectorAll("label.quiz-option");
    labels.forEach(label => {
        label.addEventListener("mouseenter", () => {
            label.style.backgroundColor = "#f0f0f0";
        });
        label.addEventListener("mouseleave", () => {
            label.style.backgroundColor = "#fff";
        });
    });

    // Reset submit button for this scenario
    submitBtn.style.display = "inline-block";
    submitBtn.disabled = true; // user must select an option first
    submitBtn.onclick = handleScenarioSubmit;
    submitBtn.textContent = "Submit Answer";
    // Enable submit button when an option is clicked
    const radios = contentArea.querySelectorAll('input[name="scenario-option"]');
    radios.forEach(radio => {
        radio.addEventListener("change", () => {
            submitBtn.disabled = false;
        });
    });
}
function handleScenarioSubmit() {
    const selected = document.querySelector('input[name="scenario-option"]:checked');
    if (!selected) return;

    const choice = Number(selected.value);
    const scenario = simulationscenarios[currentScenarioIndex];

    // Hide submit button immediately
    submitBtn.style.display = "none";

    // Update score if correct
    if (choice === scenario.correct) {
        scenarioScore++;
    }

    // Countdown in seconds (2 minutes = 120s)
    let countdown = 120;

    // Build feedback HTML
    let html = `
<h3>${scenario.title}</h3>

<div style="margin-top:15px;padding:20px;border:1px solid #ccc;border-radius:8px;background:#fafafa;">

<p style="font-weight:700;font-size:16px;margin-bottom:10px;">
${scenario.feedback[choice]}
</p>

<p style="margin-top:10px;line-height:1.6;">
Social engineering attacks manipulate human behaviour rather than technical systems. 
Attackers often rely on urgency, curiosity, fear, or authority to pressure employees into 
making quick decisions without verifying the request.
</p>

<p style="margin-top:10px;line-height:1.6;">
In workplace environments, these attacks commonly appear through suspicious emails, 
unexpected phone calls, fake system warnings, or physical devices such as unknown USB drives.
Employees should always pause and verify requests before taking action.
</p>

<p style="margin-top:10px;line-height:1.6;">
Best practice is to confirm requests through official communication channels, 
avoid interacting with unknown devices or links, and report suspicious activity 
to the appropriate internal authority or IT personnel.
</p>

</div>

<p style="margin-top:15px;color:#777;">
Next scenario will load in <span id="countdown-timer">2:00</span>
</p>

<button id="next-scenario-btn" style="margin-top:10px;">Next Scenario</button>
    `;

    contentArea.innerHTML = html;

    const countdownTimer = document.getElementById("countdown-timer");
    const nextBtnImmediate = document.getElementById("next-scenario-btn");

    // Update countdown every second
    const interval = setInterval(() => {
        countdown--;
        let minutes = Math.floor(countdown / 60);
        let seconds = countdown % 60;
        if (seconds < 10) seconds = "0" + seconds;
        countdownTimer.textContent = `${minutes}:${seconds} `;

        if (countdown <= 0) {
            clearInterval(interval);
            goToNextScenario();
        }
    }, 1000);

    // User can click to skip countdown
    nextBtnImmediate.addEventListener("click", () => {
        clearInterval(interval);
        goToNextScenario();
    });

    // Function to move to next scenario
    function goToNextScenario() {
        currentScenarioIndex++;
        if (currentScenarioIndex < simulationscenarios.length) {
            loadScenario(currentScenarioIndex);
        } else {
            showFinalResults();
        }
    }
}

function showFinalResults() {
    sectionTitle.textContent = "Simulation Results";

    // Mark simulation as completed
    sessionStorage.setItem("simulationCompleted", "true");

    let score = scenarioScore;
    let message = "";

    if (score === 3) {
        message = "Excellent awareness. You successfully identified all social engineering attempts.";
    } else if (score === 2) {
        message = "Moderate awareness. Some attacks were identified, but improvement is needed.";
    } else {
        message = "Your responses indicate a high risk of falling for social engineering attacks.";
    }

    contentArea.innerHTML = `
        <h2>Simulation Complete</h2 >
        <p><strong>Score:</strong> ${score} / ${simulationscenarios.length}</p>
        <p>${message}</p>
        <button id="start-post-quiz-btn">Start Post-Quiz</button>
    `;

    // Add event listener to start post-quiz
    document.getElementById("start-post-quiz-btn").addEventListener("click", () => {
        postQuizIndex = 0;
        postQuizResponses = [];
        postQuizScores = [];
        loadPostQuizQuestion(postQuizIndex);
    });
}
// =======================
// LOAD POST QUIZ QUESTION
// =======================

function loadPostQuizQuestion(index) {

    sectionTitle.textContent = "Post-Simulation Quiz";

    const q = postQuizQuestions[index];

    contentArea.innerHTML = `
       <div class="quiz-question">

            <h3>Question ${index + 1}</h3>

            <p style="margin-bottom:15px;">${q.question}</p>

            <textarea id="post-quiz-answer"
                style="width:100%;height:150px;padding:10px;border-radius:6px;border:1px solid #ccc;"
                placeholder="Write your answer here..."
            ></textarea>

            <div style="margin-top:15px;">
                <button id="next-question-btn">Next Question</button>
            </div>

        </div >
        `;

    document.getElementById("next-question-btn").addEventListener("click", () => {

        const answer = document.getElementById("post-quiz-answer").value;

        postQuizResponses.push(answer);

        postQuizIndex++;

        if (postQuizIndex < postQuizQuestions.length) {
            loadPostQuizQuestion(postQuizIndex);
        } else {
            gradePostQuiz();
        }

    });

}
// =======================
// SIMPLE AI ANSWER GRADING
// =======================

function gradePostQuiz() {

    let totalScore = 0;

    postQuizResponses.forEach((response, index) => {

        const keywords = postQuizQuestions[index].keywords;
        let score = 0;

        const lower = response.toLowerCase();

        keywords.forEach(keyword => {
            if (lower.includes(keyword)) {
                score++;
            }
        });

        const questionScore = score / keywords.length;

        postQuizScores.push(questionScore);

        totalScore += questionScore;

    });

    const percentage = Math.round((totalScore / postQuizQuestions.length) * 100);

    showPostQuizResults(percentage);

}
function showPostQuizResults(score) {

    sectionTitle.textContent = "Post-Quiz Results";

    // Mark post-quiz as completed
    sessionStorage.setItem("postQuizCompleted", "true");

    let resultHTML = `
        <div style = "margin-bottom:20px;">
            <h2>Training Complete</h2>

            <div style="
                background:#f4f4f4;
                border:1px solid #ccc;
                padding:15px;
                border-radius:8px;
                margin-top:10px;
            ">
                <p style="font-size:18px;font-weight:600;">
                    Your Final Score: ${score}%
                </p>

                <p>
                    Review the questions below to see feedback and additional security tips.
                </p>
            </div>
        </div >
        `;

    postQuizQuestions.forEach((q, index) => {

        const response = postQuizResponses[index];
        const questionScore = postQuizScores[index];

        let feedbackColor;
        let feedbackText;

        if (questionScore > 0.7) {
            feedbackColor = "#e8f5e9";
            feedbackText = "Good response. You identified several correct security behaviours.";
        }
        else if (questionScore > 0.3) {
            feedbackColor = "#fff3cd";
            feedbackText = "Partially correct. There are additional security precautions that should also be considered.";
        }
        else {
            feedbackColor = "#f8d7da";
            feedbackText = "Important security steps were missing. Review the guidance below.";
        }

        resultHTML += `
        <div class="quiz-question" style = "margin-bottom:25px;">

            <h3>Question ${index + 1}</h3>

            <div style="
                background:#ffffff;
                border:1px solid #ccc;
                padding:15px;
                border-radius:8px;
                margin-top:10px;
            ">

                <p>${q.question}</p>

                <hr style="margin:15px 0;">

                <p><strong>Your Answer:</strong></p>

                <div style="
                    background:#f9f9f9;
                    border:1px solid #ddd;
                    padding:10px;
                    border-radius:6px;
                    margin-bottom:10px;
                ">
                    ${response || "(No answer provided)"}
                </div>

                <div style="
                    background:${feedbackColor};
                    border:1px solid #ccc;
                    padding:10px;
                    border-radius:6px;
                    margin-bottom:10px;
                ">
                    <strong>Feedback:</strong> ${feedbackText}
                </div>

                <div style="
    background:#eef6ff;
    border:1px solid #ccc;
    padding:10px;
    border-radius:6px;
">
    <strong>Security Tip:</strong>
    ${q.tip}
</div>

            </div>

        </div>
        `;

    });

    // Add the buttons BEFORE rendering
    resultHTML += `
        <div style = "margin-top:30px; display:flex; gap:15px;">
        <button onclick="goHome()" style="
            padding:10px 20px;
            background:#4B0082;
            color:#fff;
            border:none;
            border-radius:6px;
            cursor:pointer;
        ">Go to Homepage</button>

        <button id="goNotes()" style="
            padding:10px 20px;
            background:#007ACC;
            color:#fff;
            border:none;
            border-radius:6px;
            cursor:pointer;
        ">Go to Info / Notes</button>
    </div>
        `;

    // Now set innerHTML once, with buttons included
    contentArea.innerHTML = resultHTML;
    // Unlock the homepage navigation buttons after completing post-quiz
    function unlockHomepageNav() {
        const navButtons = document.querySelectorAll('.nav-bar a'); // Make sure nav buttons have <a> tags
        navButtons.forEach(btn => {
            btn.classList.remove('disabled');    // remove disabled class if any
            btn.style.pointerEvents = 'auto';    // enable clicking
            btn.style.opacity = 1;               // restore visibility
        });
    }

    // Call the function after rendering results
    unlockHomepageNav();
}
// =======================
// NAVIGATION BUTTONS
// =======================

function goHome() {
    window.location.href = "index.html";
}

function goNotes() {
    window.location.href = "notes.html";
}

