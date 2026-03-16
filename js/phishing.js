// =======================
// PHISHING SCENARIOS DATA
// =======================
// =======================
// PHISHING SCENARIOS
// =======================
const phishingScenarios = [
    {
        title: "Email Phishing – Account Suspension Warning",
        preview: "Your company email account may be suspended due to unusual activity.",
        content: `
<p><strong>From:</strong> IT Support &lt;support@company.com&gt;<br>
<strong>To:</strong> You<br>
<strong>Subject:</strong> Account Suspension Notice</p>

<p>Dear Employee,</p>

<p>We have detected <strong>unusual activity</strong> on your company email account. As a precaution, your account may be <strong>temporarily suspended</strong> if no action is taken. To ensure continued access, please <strong>verify your identity immediately</strong> by clicking the link below.</p>

<p><a href="#"><strong>[Verify Your Account]</strong></a></p>

<p>Please note that failing to verify your account may result in <strong>restricted access</strong> to your email and other company services.</p>

<p>Thank you for your prompt attention.</p>

<p>Sincerely,<br>
<strong>IT Support Team</strong></p>
        `,
        options: [
            "Delete the email immediately",
            "Click the link and verify your account",
            "Report the email to IT/security"
        ],
        feedbackContent: `
Social engineering attacks manipulate human behaviour rather than technical systems. Attackers often rely on urgency, curiosity, fear, or authority to pressure employees into making quick decisions without verifying the request.

In workplace environments, these attacks commonly appear through suspicious emails, unexpected phone calls, fake system warnings, or physical devices such as unknown USB drives. Employees should always pause and verify requests before taking action.

Best practice is to confirm requests through official communication channels, avoid interacting with unknown devices or links, and report suspicious activity to the appropriate internal authority or IT personnel.
        `
    },
    {
        title: "Email Phishing – Payroll Update",
        preview: "An email claims there is an error in the payroll system.",
        content: `
<p><strong>From:</strong> IT Support &lt;support@company.com&gt;<br>
<strong>To:</strong> You<br>
<strong>Subject:</strong> Payroll Update Required</p>

<p>Dear Employee,</p>

<p>An email appears in your inbox claiming to be from the payroll department. The message says there has been an <strong>error in the payroll system</strong> and employees must <strong>confirm their bank details</strong> through an attached form.</p>

<p>The email looks professional and contains the company logo.</p>

<p>You were not expecting any payroll changes.</p>

<p>Thank you,<br>
<strong>Payroll Department</strong></p>
        `,
        options: [
            "Download and complete the attachment",
            "Contact HR through official channels to verify the request",
            "Forward the email to colleagues"
        ],
        feedbackContent: `
Social engineering attacks manipulate human behaviour rather than technical systems. Attackers often rely on urgency, curiosity, fear, or authority to pressure employees into making quick decisions without verifying the request.

In workplace environments, these attacks commonly appear through suspicious emails, unexpected phone calls, fake system warnings, or physical devices such as unknown USB drives. Employees should always pause and verify requests before taking action.

Best practice is to confirm requests through official communication channels, avoid interacting with unknown devices or links, and report suspicious activity to the appropriate internal authority or IT personnel.
        `
    },
    {
        title: "Email Phishing – System Maintenance",
        preview: "Urgent action required to verify system credentials.",
        content: `
<p><strong>From:</strong> IT Support &lt;support@company-secureteam.com&gt;<br>
<strong>To:</strong> You<br>
<strong>Subject:</strong> System Maintenance – Immediate Action Required</p>

<p>Dear Employee,</p>

<p>You open your email inbox and notice a message marked as urgent. The email claims the company is performing an <strong>emergency security upgrade</strong> and all employees must <strong>verify their credentials</strong>.</p>

<p>The message warns that if you do not act within 24 hours, your <strong>account access may be restricted</strong>.</p>

<p>The email includes a login link labelled <strong>Secure Login Portal</strong>.</p>

<p>However, something feels slightly unusual about the email address and tone of urgency.</p>

<p>Thank you,<br>
<strong>IT Support Team</strong></p>
        `,
        options: [
            "Click the login link and enter your credentials",
            "Ignore the email completely",
            "Report the email to IT/security"
        ],
        feedbackContent: `
Social engineering attacks manipulate human behaviour rather than technical systems. Attackers often rely on urgency, curiosity, fear, or authority to pressure employees into making quick decisions without verifying the request.

In workplace environments, these attacks commonly appear through suspicious emails, unexpected phone calls, fake system warnings, or physical devices such as unknown USB drives. Employees should always pause and verify requests before taking action.

Best practice is to confirm requests through official communication channels, avoid interacting with unknown devices or links, and report suspicious activity to the appropriate internal authority or IT personnel.
        `
    },
    {
        title: "Email Phishing – Security Alert",
        preview: "Unusual login activity detected on your company account.",
        content: `
<p><strong>From:</strong> IT Security &lt;security@company.com&gt;<br>
<strong>To:</strong> You<br>
<strong>Subject:</strong> Unusual Login Activity Detected</p>

<p>Dear Employee,</p>

<p>You receive an email warning that <strong>unusual login activity</strong> was detected on your company account. The message urges you to <strong>click a link immediately</strong> to “secure your account.”</p>

<p>The email uses official logos and a professional tone, but the <strong>sender address looks slightly different</strong> from the real IT domain.</p>

<p>Thank you,<br>
<strong>IT Security Team</strong></p>
        `,
        options: [
            "Click the link and enter your credentials",
            "Ignore the email completely",
            "Report the email to IT/security"
        ],
        feedbackContent: `
Social engineering attacks manipulate human behaviour rather than technical systems. Attackers often rely on urgency, curiosity, fear, or authority to pressure employees into making quick decisions without verifying the request.

In workplace environments, these attacks commonly appear through suspicious emails, unexpected phone calls, fake system warnings, or physical devices such as unknown USB drives. Employees should always pause and verify requests before taking action.

Best practice is to confirm requests through official communication channels, avoid interacting with unknown devices or links, and report suspicious activity to the appropriate internal authority or IT personnel.
        `
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
    inbox.innerHTML = ""; // clear inbox content

    // Only inbox title & instructions appear here
    let html = `<h2>Phishing Inbox</h2><p>Select an email below to investigate the scenario.</p>`;



    phishingScenarios.forEach((scenario, index) => {
        html += `
            <div class="email-item" style="
                padding:12px; 
                border:1px solid #ccc; 
                border-radius:6px; 
                margin-bottom:10px; 
                cursor:pointer; 
                background:#fff3f3; 
                transition: background 0.2s;">
                <strong>${scenario.title}</strong>
                <p style="margin:5px 0 0 0; color:#555;">${scenario.preview}</p>
            </div>
        `;

        // Attach click after adding element
        setTimeout(() => {
            document.querySelectorAll(".email-item")[index].addEventListener("click", () => loadScenario(index));
        }, 0);
    });

    inbox.innerHTML = html;
};

// =======================
// LOAD SCENARIO PAGE
// =======================
window.loadScenario = function (index) {
    const inbox = document.getElementById("phishing-inbox");
    const scenario = phishingScenarios[index];
    inbox.innerHTML = ""; // clear inbox

    // Scenario content styled like your simulations (pastel yellow)
    let html = `
<div class="scenario-progress">
Scenario ${index + 1} of ${phishingScenarios.length}
</div>

<div class="scenario-card">

<div class="scenario-title">
${scenario.title}
</div>

<div class="attack-type">
Attack Type: <strong>PHISHING</strong>
</div>

<div class="email-box">
${scenario.content}
</div>
`;

    // Options as radio buttons styled as cards
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
            // highlight selected
            radios.forEach(r => r.parentElement.style.background = "#fffbe0");
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
    const inbox = document.getElementById("phishing-inbox");
    const scenario = phishingScenarios[index];
    const selected = parseInt(document.querySelector('input[name="scenario-option"]:checked').value);

    let optionFeedback = "";
    switch (index) {
        case 0:
            if (selected === 0) optionFeedback = "✅ Good. Deleting suspicious emails is safe.";
            else if (selected === 1) optionFeedback = "❌ Entering credentials would compromise your account.";
            else optionFeedback = "⚠️ Reporting is correct. Helps IT investigate.";
            break;
        case 1:
            if (selected === 0) optionFeedback = "❌ Opening attachments may spread malware.";
            else if (selected === 1) optionFeedback = "✅ Correct. Always verify through official channels.";
            else optionFeedback = "⚠️ Forwarding may spread the attack.";
            break;
        case 2:
            if (selected === 0) optionFeedback = "❌ Attackers often impersonate IT to steal credentials.";
            else if (selected === 1) optionFeedback = "⚠️ Ignoring avoids risk, but reporting is better.";
            else optionFeedback = "✅ Correct. Reporting helps IT investigate.";
            break;
        case 3:
            if (selected === 0) optionFeedback = "❌ This is a common phishing tactic.";
            else if (selected === 1) optionFeedback = "⚠️ Ignoring avoids the trap but reporting is better.";
            else optionFeedback = "✅ Correct. Reporting protects you and others.";
            break;
    }

    // Feedback page //
    inbox.innerHTML = `
<h2>${scenario.title}</h2>

<div class="feedback-card">

<p><strong>${optionFeedback}</strong></p>

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

<div class="feedback-buttons">

<button class="sim-btn" onclick="loadScenario(${index})">
Back to Scenario
</button>

<button class="sim-btn" onclick="loadInbox()">
Back to Inbox
</button>

<button class="sim-btn" onclick="goHome()">
Back to Homepage
</button>

</div>
`;
};
// =======================
// INIT
// =======================
document.addEventListener("DOMContentLoaded", () => {
    window.loadInbox();
});