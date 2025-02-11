document.addEventListener("DOMContentLoaded", function() {
    const root = document.getElementById("root");
    const urlParams = new URLSearchParams(window.location.search);
    const mood = urlParams.get("mood");

    const moodOptions = {
        Happy: [
            { text: "Watch Friends S05E14", link: "https://www.netflix.com" },
            { text: "Watch The Big Bang Theory S02E11", link: "https://www.netflix.com" },
            { text: "Start Learning Something Motivating", action: "message" }
        ],
        Angry: [
            { text: "Try to Breathe", action: "message" },
            { text: "Listen Without Reacting", action: "message" },
            { text: "Go to the Gym or Exercise", action: "message" },
            { text: "Take a Shower", action: "message" }
        ],
        Sad: [
            { text: "Look in the Mirror & Motivate Yourself", action: "message" },
            { text: "Order Tevaro Coffee", link: "https://www.zomato.com" },
            { text: "Call Me (Let's Go to Timezone)", action: "call" },
            { text: "Visit CP Hanuman Mandir", action: "map", location: "Hanuman Mandir, CP" }
        ],
        Stressed: [
            { text: "Relax & Meditate", action: "message" },
            { text: "Listen to Podcast", link: "https://open.spotify.com/show/706hylM6zaDW8LrrYxcggQ" },
            { text: "Listen to Hanuman Chalisa", link: "https://open.spotify.com/track/6H7fLdt0AeWpuxUKXuXWrx" },
            { text: "Read 'The Magic' Book", link: "https://books.google.com" }
        ],
        Bored: [
            { text: "Read Something Motivating", action: "message" },
            { text: "Go to DIY for Shopping", action: "map", location: "DIY Store" },
            { text: "Discuss Business Ideas", action: "message" }
        ],
        Irritated: [
            { text: "Try to Meditate", action: "message" },
            { text: "Talk to Akshat", action: "message" },
            { text: "Watch Think School on YouTube", link: "https://www.youtube.com/c/ThinkSchool" }
        ],
        IDontKnow: [
            { text: "Join Google Meet", link: "https://meet.google.com/etk-hfpd-voh" }
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
        moodOptions[mood].forEach(option => {
            let button = document.createElement("button");
            button.textContent = option.text;
            
            if (option.link) {
                button.onclick = () => window.location.href = option.link;
            } else if (option.action === "message") {
                button.onclick = () => alert("Nice Choice, Gracy! 😊");
            } else if (option.action === "call") {
                button.onclick = () => window.location.href = "tel:+919876543210";
            } else if (option.action === "map") {
                button.onclick = () => window.location.href = `https://www.google.com/maps/search/${option.location}`;
            }

            optionsDiv.appendChild(button);
        });

        document.getElementById("backBtn").addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    renderMoodOptions();
});
