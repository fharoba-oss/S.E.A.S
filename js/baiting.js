// =======================
// BAITING SCENARIOS DATA
// =======================
const baitingScenarios = [
    {
        title: "USB Found in Office",
        preview: "A USB flash drive labelled 'Confidential Financial Reports' is on your desk.",
        content: `
You return from lunch and notice a USB flash drive placed on your desk labelled Confidential Financial Reports.

No one in your department mentioned sending files via USB. The device looks new and professionally labelled.

Curiosity kicks in — it might contain important documents. However, attackers sometimes leave infected USB drives in workplaces hoping employees will plug them in.`,
        options: [
            "Plug the USB into your computer to see what files are inside",
            "Take the USB to IT/security for inspection",
            "Leave it on the desk and continue working"
        ],
        correct: 1,
        feedback: [
            "❌ Plugging in unknown USBs can infect your system with malware.",
            "✅ Correct! Submitting the USB to IT ensures safety.",
            "⚠️ Leaving it avoids risk but does not address the threat."
        ]
    },
    {
        title: "Online Giveaway",
        preview: "You receive a message claiming you've won a free smartphone.",
        content: `
You receive a message saying you have won a free smartphone from an online giveaway.

The message asks you to fill in personal details to claim the prize.

You do not remember entering any giveaway.`,
        options: [
            "Provide your information to claim the prize",
            "Reply asking if the giveaway is real",
            "Report the message as suspicious"
        ],
        correct: 2,
        feedback: [
            "❌ Providing information can lead to identity theft.",
            "⚠️ Replying may confirm your email to the attacker.",
            "✅ Correct! Reporting prevents scams."
        ]
    },
    {
        title: "Free Software Download",
        preview: "A pop-up offers free productivity software with company integration.",
        content: `
While browsing online during work, you see an advertisement offering a free software tool that promises to increase productivity.

The pop‑up claims the program integrates with company systems and offers powerful automation features.

The download link is not from the official software website.`,
        options: [
            "Install the software immediately",
            "Report the pop-up to IT/security",
            "Download it and scan later"
        ],
        correct: 1,
        feedback: [
            "❌ Installing unknown software may compromise your system.",
            "✅ Correct! Reporting suspicious downloads protects company systems.",
            "⚠️ Scanning after download is risky and not recommended."
        ]
    },
    {
        title: "Free USB Drive at Office Entrance",
        preview: "You find a USB drive at the office entrance labelled 'Confidential Reports'.",
        content: `
System Notification

While entering the office, you notice a USB drive placed on the entrance table labelled 'Confidential Reports'.

The device looks professionally labelled and official. No one in the office mentioned leaving it there.

Curiosity kicks in — it might contain important company documents. However, attackers sometimes leave infected USB drives in workplaces hoping employees will plug them in.`,
        options: [
            "Plug the USB into your computer to see what files are inside",
            "Take the USB to IT/security for inspection",
            "Leave it on the table and continue working"
        ],
        correct: 1,
        feedback: [
            "❌ Plugging in unknown USBs can infect your system with malware.",
            "✅ Correct! Submitting the USB to IT ensures safety.",
            "⚠️ Leaving it avoids risk but does not address the threat."
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
    const inbox = document.getElementById("baiting-inbox");
    inbox.innerHTML = ""; // clear inbox

    // Inbox title & instructions
    let html = `<h2>Baiting Inbox</h2>
                <p>Select a scenario below to investigate.</p>`;

    baitingScenarios.forEach((scenario, index) => {
        html += `
        <div class="email-item" style="
            padding:12px; 
            border:1px solid #ccc; 
            border-radius:6px; 
            margin-bottom:10px; 
            cursor:pointer; 
            background:#fff0f5; /* pale pink */
            transition: background 0.2s;">
            <strong>${scenario.title}</strong>
            <p style="margin:5px 0 0 0; color:#555;">${scenario.preview}</p>
        </div>
        `;
    });

    inbox.innerHTML = html;

    // Attach click events AFTER HTML is rendered
    setTimeout(() => {
        const items = document.querySelectorAll("#baiting-inbox .email-item");
        items.forEach((item, i) => {
            item.addEventListener("click", () => loadScenario(i));
        });
    }, 0);

    // Update nav text
    const navBand = document.querySelector(".nav-band span");
    if (navBand) navBand.textContent = "Baiting Scenarios";
};

// =======================
// LOAD SCENARIO PAGE
// =======================
window.loadScenario = function (index) {
    const inbox = document.getElementById("baiting-inbox");
    const scenario = baitingScenarios[index];

    inbox.innerHTML = ""; // clear inbox

    let html = `
<div class="scenario-progress">
Scenario ${index + 1} of ${baitingScenarios.length}
</div>

<div class="scenario-card">

<div class="scenario-title">
${scenario.title}
</div>

<div class="attack-type">
Attack Type: <strong>BAITING</strong>
</div>

<div class="email-box">
${scenario.content}
</div>
`;

    // OPTIONS
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

            // highlight selected option
            radios.forEach(r => r.parentElement.style.background = "#fff8dc");

            radio.parentElement.style.background = "#FFF59D";
            radio.parentElement.style.transform = "scale(1.02)";
        });
    });

    submitBtn.addEventListener("click", () => showFeedback(index));
};

// =======================
// SHOW FEEDBACK
// =======================
window.showFeedback = function (index) {
    const inbox = document.getElementById("baiting-inbox");
    const scenario = baitingScenarios[index];
    const selected = parseInt(document.querySelector('input[name="scenario-option"]:checked').value);

    inbox.innerHTML = `
<h2>${scenario.title} – Feedback</h2>

<div class="feedback-card">

<p>${scenario.feedback[selected]}</p>

<p>
Social engineering attacks manipulate human behaviour rather than technical systems.
Attackers often rely on urgency, curiosity, fear, or authority to pressure employees
into making quick decisions without verifying the request.
</p>

<p>
In workplace environments these attacks appear through suspicious emails,
unexpected phone calls, fake warnings, or unknown devices.
</p>

<p>
Best practice is to confirm requests through official channels and report
suspicious activity to IT/security.
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