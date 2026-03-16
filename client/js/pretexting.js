// =======================
// PRETEXTING SCENARIOS DATA
// =======================
const pretextingScenarios = [
    {
        title: "Phone Call from IT Support",
        preview: "A caller claiming to be from IT asks for your password to secure the system.",
        content: "You receive a phone call from someone claiming to be from the company's IT department. The caller says unusual login attempts were detected on your account and asks for your password so they can 'secure the system'.<br><br>The caller sounds professional and insists the issue must be resolved immediately.",
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
        title: "HR Information Request",
        preview: "A new HR employee asks for your personal details via email.",
        content: "You receive an email from someone claiming to be a new HR employee. They say they are updating employee records and ask you to send your employee ID, address, and phone number.<br><br>The email appears polite but you do not recognise the sender.",
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
        title: "Vendor Security Audit",
        preview: "An external auditor asks for temporary login credentials.",
        content: "An email arrives from someone claiming to be an external security auditor working with your company. The sender says they need temporary login credentials to test the company system.<br><br>The request seems urgent but you were not informed about any audit.",
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
// GLOBAL FUNCTIONS
// =======================
window.goHome = function () {
    window.location.href = "index.html";
};

window.loadInbox = function () {
    const inbox = document.getElementById("pretexting-inbox");
    inbox.innerHTML = ""; // clear

    pretextingScenarios.forEach((scenario, index) => {
        const item = document.createElement("div");
        item.classList.add("scenario-item");
        item.style.padding = "12px";
        item.style.border = "1px solid #ccc";
        item.style.borderRadius = "6px";
        item.style.marginBottom = "10px";
        item.style.cursor = "pointer";
        item.style.background = "#eef6ff";
        item.style.transition = "background 0.2s";

        item.innerHTML = `
            <strong>${scenario.title}</strong>
            <p style="margin:5px 0 0 0; color:#555;">${scenario.preview}</p>
        `;

        item.addEventListener("mouseenter", () => {
            item.style.background = "#f0e6ff";
        });
        item.addEventListener("mouseleave", () => {
            item.style.background = "#eef6ff";
        });

        item.addEventListener("click", () => loadScenario(index));

        inbox.appendChild(item);
    });
};

// =======================
// LOAD SCENARIO PAGE
// =======================
window.loadScenario = function (index) {
    const inbox = document.getElementById("pretexting-inbox");
    const scenario = pretextingScenarios[index];
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
        <button style="margin-top:15px; margin-left:8px; padding:10px 18px; border:none; border-radius:6px; cursor:pointer; background:#ccc;" onclick="loadInbox()">Back to Scenarios</button>
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
    const inbox = document.getElementById("pretexting-inbox");
    const scenario = pretextingScenarios[index];
    const selected = parseInt(document.querySelector('input[name="scenario-option"]:checked').value);

    inbox.innerHTML = `
        <h3>${scenario.title} – Feedback</h3>
        <div style="padding:15px; border:1px solid #ccc; border-radius:8px; background:#fafafa; margin-bottom:15px;">
            <p style="font-weight:600; font-size:16px;">${scenario.feedback[selected]}</p>
        </div>
        <div style="line-height:1.6; margin-bottom:15px;">
            <p>Pretexting occurs when an attacker invents a story or identity to gain your trust and obtain sensitive information.</p>
            <p>Verify every request through official channels. Do not be pressured by urgency or authority. Never give out passwords or financial information without verification.</p>
        </div>

        <button style="margin-top:10px; padding:10px 18px; cursor:pointer; background:#4B0082; color:#fff; border:none; border-radius:6px;" onclick="loadScenario(${index})">Back to Scenario</button>
        <button style="margin-top:10px; margin-left:8px; padding:10px 18px; border:none; border-radius:6px; cursor:pointer; background:#ccc;" onclick="loadInbox()">Back to Scenarios</button>
        <button style="margin-top:10px; margin-left:8px; padding:10px 18px; border:none; border-radius:6px; cursor:pointer; background:#007ACC; color:#fff;" onclick="goHome()">Back to Homepage</button>
    `;
};

// =======================
// INIT
// =======================
document.addEventListener("DOMContentLoaded", () => {
    window.loadInbox();
});
