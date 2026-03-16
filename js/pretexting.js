// =======================
// PRETEXTING SCENARIOS DATA
// =======================

const pretextingScenarios = [

    {
        title: "Phone Call from IT Support",
        preview: "Someone claiming to be IT asks for your password.",
        content: `
You receive a phone call from someone claiming to be from the company's IT department.

The caller says unusual login attempts were detected on your account and asks for your password so they can "secure the system."

The caller sounds professional and insists the issue must be resolved immediately.
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
        title: "HR Information Request",
        preview: "An email from someone claiming to be HR asks for personal information.",
        content: `
You receive an email from someone claiming to be a new HR employee.

They say they are updating employee records and ask you to send your employee ID, address, and phone number.

The email appears polite but you do not recognise the sender.
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
        title: "Vendor Security Audit",
        preview: "An external auditor asks for temporary login credentials.",
        content: `
An email arrives from someone claiming to be an external security auditor working with your company.

The sender says they need temporary login credentials to test the company system.

The request seems urgent but you were not informed about any audit.
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
    },

    {
        title: "Executive Gift Card Request",
        preview: "An urgent request from the CEO asks you to buy gift cards.",
        content: `
You receive an email claiming to be from your company CEO.

The email asks you to urgently purchase gift cards for a client and send the codes back immediately.

It emphasises confidentiality and creates pressure to act quickly.
`,
        options: [
            "Purchase the gift cards and send the codes",
            "Verify the request with the CEO or your manager",
            "Ignore the email"
        ],
        correct: 1,
        feedback: [
            "❌ This is a common pretexting scam used to steal money.",
            "✅ Correct! Always verify unusual financial requests.",
            "⚠️ Ignoring avoids immediate loss but the attack should be reported."
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

    let html = `<h2>Pretexting Inbox</h2>
<p>Select a scenario below to investigate.</p>`;

    pretextingScenarios.forEach((scenario, index) => {

        html += `
<div class="email-item" style="
padding:12px;
border:1px solid #ccc;
border-radius:6px;
margin-bottom:10px;
cursor:pointer;
background:#fff0f5;
transition: background 0.2s;">

<strong>${scenario.title}</strong>
<p style="margin:5px 0 0 0; color:#555;">${scenario.preview}</p>

</div>
`;

    });

    inbox.innerHTML = html;

    setTimeout(() => {

        const items = document.querySelectorAll("#pretexting-inbox .email-item");

        items.forEach((item, i) => {
            item.addEventListener("click", () => loadScenario(i));
        });

    }, 0);

};

// =======================
// LOAD SCENARIO
// =======================

window.loadScenario = function (index) {

    const inbox = document.getElementById("pretexting-inbox");
    const scenario = pretextingScenarios[index];

    let html = `
<div class="scenario-progress">
Scenario ${index + 1} of ${pretextingScenarios.length}
</div>

<div class="scenario-card">

<div class="scenario-title">
${scenario.title}
</div>

<div class="attack-type">
Attack Type: <strong>PRETEXTING</strong>
</div>

<div class="email-box">
${scenario.content}
</div>
`;

    scenario.options.forEach((option, i) => {

        html += `
<label class="option-card">
<input type="radio" name="scenario-option" value="${i}">
${String.fromCharCode(65 + i)}) ${option}
</label>
`;

    });

    html += `
</div>

<button id="submit-btn" class="submit-btn" disabled>
Submit Answer
</button>
`;

    inbox.innerHTML = html;

    const submitBtn = document.getElementById("submit-btn");
    const radios = document.querySelectorAll('input[name="scenario-option"]');

    radios.forEach(radio => {

        radio.addEventListener("change", () => {

            submitBtn.disabled = false;

            radios.forEach(r => r.parentElement.style.background = "#fff8dc");

            radio.parentElement.style.background = "#FFF59D";
            radio.parentElement.style.transform = "scale(1.02";

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
<h2>${scenario.title} – Feedback</h2>

<div class="feedback-card">

<p>${scenario.feedback[selected]}</p>

<p>
Pretexting attacks occur when attackers create a false identity or scenario
to manipulate victims into revealing sensitive information.
</p>

<p>
Attackers often pretend to be trusted individuals such as IT staff,
executives, vendors, or HR employees.
</p>

<p>
Always verify requests through official channels before sharing
sensitive information or taking action.
</p>

</div>

<br>

<button class="sim-btn" onclick="loadScenario(${index})">
Back to Scenario
</button>

<button class="sim-btn" onclick="loadInbox()">
Back to Inbox
</button>

<button class="sim-btn" onclick="goHome()">
Back to Homepage
</button>
`;

};

// =======================
// INIT
// =======================

document.addEventListener("DOMContentLoaded", () => {
    window.loadInbox();
});