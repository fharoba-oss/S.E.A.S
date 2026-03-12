// =======================
// PHISHING SCENARIOS DATA
// =======================
const phishingScenarios = [
    {
        title: "Urgent System Verification",
        preview: "Your account requires immediate verification to avoid suspension.",
        content: "You receive an email stating that your system account must be verified immediately or it will be suspended. The email contains a link asking you to log in and confirm your details.",
        options: [
            "Click the link and enter your login details",
            "Ignore the email completely",
            "Do not click the link and report the email as suspicious"
        ],
        correct: 2,
        feedback: [
            "❌ This is dangerous. The link may lead to a fake login page designed to steal your credentials.",
            "⚠️ Ignoring it avoids the risk, but reporting it helps prevent others from being targeted.",
            "✅ Correct. Reporting suspicious emails helps security teams investigate and warn others."
        ]
    },
    {
        title: "Password Reset Notification",
        preview: "A password reset request was received for your account.",
        content: "You receive an email claiming that a password reset was requested for your account. It asks you to click a link to confirm the request.",
        options: [
            "Click the link immediately to secure the account",
            "Check the sender address and verify if the email looks legitimate",
            "Forward the email to coworkers asking if they received it"
        ],
        correct: 1,
        feedback: [
            "❌ This could lead to a malicious website that steals your credentials.",
            "✅ Correct. Always verify the sender and inspect suspicious emails carefully before interacting.",
            "⚠️ Forwarding it may spread a malicious email further."
        ]
    },
    {
        title: "Unexpected Attachment",
        preview: "A message contains an attachment labelled 'Important Documents'.",
        content: "You receive an email with an attachment labelled 'Important Documents'. You were not expecting any documents from this sender.",
        options: [
            "Download and open the attachment to see what it contains",
            "Delete the email immediately",
            "Verify the sender and confirm whether the attachment is legitimate before opening it"
        ],
        correct: 2,
        feedback: [
            "❌ Opening unknown attachments may install malware on your system.",
            "⚠️ Deleting it removes the threat but verifying first helps determine if it is legitimate.",
            "✅ Correct. Always verify unexpected attachments before opening them."
        ]
    },
    {
        title: "Prize Notification Email",
        preview: "You have been selected to receive a special reward.",
        content: "You receive an email saying you have been selected to receive a reward. The message asks you to click a link and provide personal details to claim it.",
        options: [
            "Click the link and fill in the information",
            "Ignore the email and do nothing",
            "Recognize it as suspicious and report it"
        ],
        correct: 2,
        feedback: [
            "❌ This is a common phishing tactic used to collect personal information.",
            "⚠️ Ignoring it avoids the trap but reporting it helps security teams monitor threats.",
            "✅ Correct. Messages offering unexpected rewards are a common phishing technique."
        ]
    }
];

// =======================
// GLOBAL FUNCTIONS
// =======================
window.goHome = function () {
    window.location.href = "index.html";
};

window.loadInbox = function () {
    const inbox = document.getElementById("phishing-inbox");
    inbox.innerHTML = ""; // clear

    phishingScenarios.forEach((scenario, index) => {
        const email = document.createElement("div");
        email.classList.add("email-item");
        email.style.padding = "12px";
        email.style.border = "1px solid #ccc";
        email.style.borderRadius = "6px";
        email.style.marginBottom = "10px";
        email.style.cursor = "pointer";
        email.style.background = "#fff3f3";
        email.style.transition = "background 0.2s";

        email.innerHTML = `
            <strong>${scenario.title}</strong>
            <p style="margin:5px 0 0 0; color:#555;">${scenario.preview}</p>
        `;

        email.addEventListener("mouseenter", () => {
            email.style.background = "#f0e6ff";
        });
        email.addEventListener("mouseleave", () => {
            email.style.background = "#fff3f3";
        });

        email.addEventListener("click", () => loadScenario(index));

        inbox.appendChild(email);
    });
};

// =======================
// LOAD SCENARIO PAGE
// =======================
window.loadScenario = function (index) {
    const inbox = document.getElementById("phishing-inbox");
    const scenario = phishingScenarios[index];
    inbox.innerHTML = ""; // clear

    let html = `
        <h3>${scenario.title}</h3>
        <div style="margin:10px 0; padding:15px; border:1px solid #ccc; border-radius:8px; background:#fafafa;">
            <p>${scenario.content}</p>
        </div>
    `;

    scenario.options.forEach((option, i) => {
        html += `
            <label class="option-label" style="
                display:block; margin:6px 0; padding:8px 10px; border:1px solid #ddd; border-radius:6px; cursor:pointer; transition: background 0.2s;">
                <input type="radio" name="scenario-option" value="${i}" style="margin-right:8px;"> ${String.fromCharCode(65 + i)}) ${option}
            </label>
        `;
    });

    html += `
        <button id="submit-btn" disabled style="margin-top:15px; padding:10px 18px; cursor:pointer; background:#4B0082; color:#fff; border:none; border-radius:6px;">Submit</button>
        <button style="margin-top:15px; margin-left:8px; padding:10px 18px; border:none; border-radius:6px; cursor:pointer; background:#ccc;" onclick="loadInbox()">Back to Inbox</button>
        <button style="margin-top:15px; margin-left:8px; padding:10px 18px; border:none; border-radius:6px; cursor:pointer; background:#007ACC; color:#fff;" onclick="goHome()">Back to Homepage</button>
    `;

    inbox.innerHTML = html;

    const submitBtn = document.getElementById("submit-btn");
    const radios = document.querySelectorAll('input[name="scenario-option"]');

    radios.forEach(radio => {
        radio.addEventListener("change", () => {
            submitBtn.disabled = false;
        });
    });

    submitBtn.addEventListener("click", () => showFeedback(index));
};

// =======================
// SHOW FEEDBACK
// =======================
window.showFeedback = function (index) {
    const inbox = document.getElementById("phishing-inbox");
    const scenario = phishingScenarios[index];
    const selected = parseInt(document.querySelector('input[name="scenario-option"]:checked').value);

    inbox.innerHTML = `
        <h3>${scenario.title} – Feedback</h3>
        <div style="padding:15px; border:1px solid #ccc; border-radius:8px; background:#fafafa; margin-bottom:15px;">
            <p style="font-weight:600; font-size:16px;">${scenario.feedback[selected]}</p>
        </div>
        <div style="line-height:1.6; margin-bottom:15px;">
            <p>Social engineering attacks manipulate human behaviour to trick employees. Always pause and verify requests before taking action.</p>
            <p>Unexpected emails, links, or attachments may be phishing attempts. Never provide credentials or personal details without confirming legitimacy.</p>
            <p>Report suspicious messages to your IT/security team to prevent harm to yourself and others.</p>
        </div>

        <button style="margin-top:10px; padding:10px 18px; cursor:pointer; background:#4B0082; color:#fff; border:none; border-radius:6px;" onclick="loadScenario(${index})">Back to Scenario</button>
        <button style="margin-top:10px; margin-left:8px; padding:10px 18px; border:none; border-radius:6px; cursor:pointer; background:#ccc;" onclick="loadInbox()">Back to Inbox</button>
        <button style="margin-top:10px; margin-left:8px; padding:10px 18px; border:none; border-radius:6px; cursor:pointer; background:#007ACC; color:#fff;" onclick="goHome()">Back to Homepage</button>
    `;
};

// =======================
// INIT
// =======================
document.addEventListener("DOMContentLoaded", () => {
    window.loadInbox();
});