document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById("root");
    const urlParams = new URLSearchParams(window.location.search);
    const mood = urlParams.get("mood");

    const moodOptions = {
        Happy: [
            { text: "Watch Friends S05E14", link: "https://www.netflix.com/in/title/70153404?s=a&trkid=13747225&trg=wha&vlang=en&clip=81722277" },
            { text: "Watch The Big Bang Theory S02E11", link: "https://www.netflix.com/in/title/70143830?s=a&trkid=13747225&trg=wha&vlang=en&clip=81722874" },
            { text: "Start Learning Something Motivating", action: "timer" }
        ],
        Angry: [
            { text: "Try to Breathe", action: "timer" },
            { text: "Listen Without Reacting", action: "timer" },
            { text: "Go to the Gym or Exercise", action: "timer" },
            { text: "Take a Shower", action: "timer" }
        ],
        Sad: [
            { text: "Order Tevaro Coffee (Bill is On Me)", link: "https://www.zomato.com" },
            { text: "Call Me (Let's Go to Timezone)", action: "call" },
            { text: "Visit Timezone Vasant Kunj", link: "https://www.google.com/maps/dir//timezone+vasant+kunj/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390d1d6dbfae8c8b:0xaa6084cc038718c1?sa=X&ved=1t:3061&ictx=111" },
            { text: "Visit CP Hanuman Mandir", link: "https://www.google.com/maps/search/Hanuman+Mandir+CP" }
        ],
        Stressed: [
            { text: "Relax & Meditate", action: "timer" },
            { text: "Listen to Podcast", link: "https://open.spotify.com/show/706hylM6zaDW8LrrYxcggQ" },
            { text: "Listen to Hanuman Chalisa", link: "https://open.spotify.com/track/6H7fLdt0AeWpuxUKXuXWrx" },
            { text: "Read 'The Magic' Book", link: "http://roadtonation.com/wp-content/uploads/2016/07/Rhonda-Byrne-The-Magic.pdf" }
        ],
        Bored: [
            { text: "Read Something Motivating", action: "timer" },
            { text: "Go to DIY for Shopping", link: "https://www.google.com/maps?rlz=1C1CHBD_enIN1136IN1137&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyDAgCECMYJxiABBiKBTINCAMQABiRAhiABBiKBTINCAQQABiRAhiABBiKBTIMCAUQABhDGIAEGIoFMgwIBhAAGEMYgAQYigUyDAgHEAAYQxiABBiKBTIMCAgQABhDGIAEGIoFMgoICRAAGLEDGIAE0gEIMjg3N2owajeoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KTvAd75T_Qw5MYDBDa8DL6ge&daddr=3+%26+4,+Ground+Floor,+Unit+No.2,+32,+Bungalow+Rd,+Kamla+Nagar,+New+Delhi,+Delhi+110007" },
            { text: "Discuss Business Ideas", link: "https://meet.google.com/etk-hfpd-voh" }
        ],
        Irritated: [
            { text: "Try to Meditate", action: "timer" },
            { text: "Talk to Akshat", action: "timer" },
            { text: "Watch Think School on YouTube", link: "https://www.youtube.com/c/ThinkSchool" }
        ],
        IDontKnow: [
            { text: "Zindagi mein agar kuch banna ho, kuch haasil karna ho, kuch jeetna ho ... toh hamesha dil ki suno ... aur agar dil bhi koi jawab na de toh aankhen band karke apni maa aur papa ka naam lo ... phir dekhna har manzil paar kar jaoge, har mushkil aasaan ho jayegi ... jeet tumhari hogi, sirf tumhari ...", link: "https://youtu.be/YW1ZZTpSIf8?si=iGKGUBMIQbAaLe4Q" },
            { text: "Join Google Meet", link: "https://meet.google.com/etk-hfpd-voh" }
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

        if (moodOptions[mood]) {
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
