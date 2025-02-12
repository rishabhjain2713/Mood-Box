document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById("root");
    const urlParams = new URLSearchParams(window.location.search);
    const mood = urlParams.get("mood");

    const moodOptions = {
        Happy: [
            { text: "Watch Friends S05E14", link: "https://www.netflix.com" },
            { text: "Watch The Big Bang Theory S02E11", link: "https://www.netflix.com" },
            { text: "Start Learning Something Motivating", action: "timer" }
        ],
        Angry: [
            { text: "Try to Breathe", action: "timer" },
            { text: "Listen Without Reacting", action: "timer" },
            { text: "Go to the Gym or Exercise", link: "https://www.google.com/maps?rlz=1C1CHBD_enIN1136IN1137&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KdeygX34_Qw5MZIAKUFRAeGE&daddr=1st+Floor,+No+B/4/8,+Model+Town+Phase+I,+Block+B,+Model+Town+Phase+I,+Model+Town,+New+Delhi,+Delhi,+110009" },
            { text: "Take a Shower", action: "timer" }
        ],
        Sad: [
            { text: "Order Tevaro Coffee", link: "https://www.zomato.com" },
            { text: "Call Me (Let's Go to Timezone)", action: "call" },
            { text: "Visit CP Hanuman Mandir", action: "map", location: "Hanuman Mandir, CP" }
        ],
        Stressed: [
            { text: "Relax & Meditate", action: "timer" },
            { text: "Listen to Podcast", link: "https://open.spotify.com/show/706hylM6zaDW8LrrYxcggQ" },
            { text: "Listen to Hanuman Chalisa", link: "https://open.spotify.com/track/6H7fLdt0AeWpuxUKXuXWrx" },
            { text: "Read 'The Magic' Book", link: "https://books.google.com" }
        ],
        Bored: [
            { text: "Read Something Motivating", action: "timer" },
            { text: "Go to DIY for Shopping", action: "map", location: "DIY Store" },
            { text: "Discuss Business Ideas", action: "timer" }
        ],
        Irritated: [
            { text: "Try to Meditate", action: "timer" },
            { text: "Talk to Akshat", action: "timer" },
            { text: "Watch Think School on YouTube", link: "https://www.youtube.com/c/ThinkSchool" }
        ],
        IDontKnow: [
            { text: "Join Google Meet", link: "https://meet.google.com/etk-hfpd-voh" }
            { text: "Zindagi mein agar kuch banna ho, kuch haasil karna ho, kuch jeetna ho ... toh hamesha dil ki suno ... aur agar dil bhi koi jawab na de toh aankhen band karke apni maa aur papa ka naam lo ... phir dekhna har manzil paar kar jaoge, har mushkil aasaan ho jayegi ... jeet tumhari hogi, sirf tumhari ...", link: "https://youtu.be/YW1ZZTpSIf8?si=iGKGUBMIQbAaLe4Q" }
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
            } else if (option.action === "timer") {
                button.onclick = () => window.location.href = `timer.html?activity=${encodeURIComponent(option.text)}`;
            } else if (option.action === "call") {
                button.onclick = () => window.location.href = "tel:+919170483615";
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
