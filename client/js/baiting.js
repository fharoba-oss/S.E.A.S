// =======================
// BAITING SCENARIOS DATA
// =======================
const baitingScenarios = [
    {
        title: "USB Found in Office",
        preview: "A USB drive labelled 'Confidential Financial Reports' is on your desk.",
        content: "You return from lunch and notice a USB flash drive placed on your desk labelled <strong>Confidential Financial Reports</strong>.<br><br>No one in your department mentioned sending files via USB. The device looks new and professionally labelled. Curiosity kicks in — it might contain important documents. However, attackers sometimes leave infected USB drives in workplaces hoping employees will plug them in.",
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
        title: "Free Software Download",
        preview: "An advertisement offers a free software tool to increase productivity.",
        content: "While browsing online during work, you see an advertisement offering a free software tool that promises to increase productivity.<br><br>The pop‑up claims the program integrates with company systems and offers powerful automation features. The download link is not from the official software website.",
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
        title: "Online Giveaway",
        preview: "You have won a free smartphone from an online giveaway.",
        content: "You receive a message saying you have won a free smartphone from an online giveaway.<br><br>The message asks you to fill in personal details to claim the prize. You do not remember entering any giveaway.",
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
    inbox.innerHTML = ""; // clear

    baitingScenarios.forEach((scenario, index) => {
        const item = document.createElement("div");
        item.classList.add("scenario-item");
        item.style.padding = "12px";
        item.style.border = "1px solid #ccc";
        item.style.borderRadius = "6px";
        item.style.marginBottom = "10px";
        item.style.cursor = "pointer";
        item.style.background = "#f9f9f9";
        item.style.transition = "background 0.2s";

        item.innerHTML = `
            <strong>${scenario.title}</strong>
            <p style="margin:5px 0 0 0; color:#555;">${scenario.preview}</p>
        `;

        item.addEventListener("mouseenter", () => {
            item.style.background = "#f0e6ff";
        });
        item.addEventListener("mouseleave", () => {
            item.style.background = "#f9f9f9";
        });

        item.addEventListener("click", () => loadScenario(index));

        inbox.appendChild(item);
    });
};

// =======================
// LOAD SCENARIO PAGE
// =======================
window.loadScenario = function (index) {
    const inbox = document.getElementById("baiting-inbox");
    const scenario = baitingScenarios[index];
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
    const inbox = document.getElementById("baiting-inbox");
    const scenario = baitingScenarios[index];
    const selected = parseInt(document.querySelector('input[name="scenario-option"]:checked').value);

    inbox.innerHTML = `
        <h3>${scenario.title} – Feedback</h3>
        <div style="padding:15px; border:1px solid #ccc; border-radius:8px; background:#fafafa; margin-bottom:15px;">
            <p style="font-weight:600; font-size:16px;">${scenario.feedback[selected]}</p>
        </div>
        <div style="line-height:1.6; margin-bottom:15px;">
            <p>Baiting lures people into a trap by offering something appealing. Curiosity and the desire for rewards are what baiting exploits.</p>
            <p>Never plug in unknown devices or download software from untrusted sources. Report suspicious items to your IT/security team immediately.</p>
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
