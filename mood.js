document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById("root");
    const urlParams = new URLSearchParams(window.location.search);
    const mood = urlParams.get("mood");

    const moodOptions = {
        Happy: [
            { text: "Watch Friends S05E14", link: "https://www.netflix.com/in/title/70153404" },
            { text: "Watch The Big Bang Theory S02E11", link: "https://www.netflix.com/in/title/70143830" },
            { text: "Start Learning Something Motivating", action: "timer" }
        ],
        Angry: [
            { text: "Try to Breathe", action: "timer" },
            { text: "Listen Without Reacting", action: "timer" },
            { text: "Go to the Gym or Exercise", action: "timer" },
            { text: "Take a Shower", action: "timer" }
        ],
        Gift: [
            { text: "🎁 Claim Your Gift (Bill is on Me)", link: "https://www.starbucks.in/ordering" },
            { text: "💳 Get an Amazon Gift Card", link: "https://www.amazon.in/gift-card-store/" }
        ]
    };

    function renderMoodOptions() {
        root.innerHTML = `
            <div class="container">
                <h1>You Selected: ${mood} 😊</h1>
                <p>Here are some things you can do:</p>
                <div id="options"></div>
                <button id="backBtn">⬅ Back to Mood Selection</button>
            </div>
        `;

        const optionsDiv = document.getElementById("options");

        // ✅ Fix: Ensure moodOptions exists before iterating
        if (moodOptions[mood] && moodOptions[mood].length > 0) {
            moodOptions[mood].forEach(option => {
                let button = document.createElement("button");
                button.textContent = option.text;
                button.classList.add("option-btn");

                if (option.link) {
                    button.onclick = () => window.location.href = option.link;
                } else if (option.action === "timer") {
                    button.onclick = () => window.location.href = `timer.html?activity=${encodeURIComponent(option.text)}`;
                } else if (option.action === "call") {
                    button.onclick = () => window.location.href = "tel:+919170483615";
                }

                optionsDiv.appendChild(button);
            });
        } else {
            optionsDiv.innerHTML = "<p>No options available for this mood.</p>";
        }

        document.getElementById("backBtn").addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    renderMoodOptions();
});
