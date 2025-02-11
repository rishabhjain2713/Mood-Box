document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById("root");

    const urlParams = new URLSearchParams(window.location.search);
    const mood = urlParams.get("mood");

    const moodTasks = {
        Happy: [
            "Watch <b>Friends</b> – <i>“The One Where Everybody Finds Out” (S05E14)</i>",
            "Watch <b>The Big Bang Theory</b> – <i>“The Bath Item Gift Hypothesis” (S02E11)</i>",
            "Start Learning Something That Motivates You"
        ],
        Angry: [
            "Try to Breathe",
            "Listen to others without reacting—you will feel better later.",
            "Hit the gym or do some exercise at home.",
            "Take a shower—it will lighten your mood."
        ],
        Sad: [
            "Go to the mirror and talk to yourself—this is not the end!",
            "Eat something yummy (Bill is on me 😄) 🍕 <a href='https://www.zomato.com/' target='_blank'>Order Here</a>",
            "Call me and let's go to Timezone for some fun! 📞 <a href='tel:+123456789'>Call Now</a>",
            "Let's visit <b>CP Hanuman Mandir</b> 🚗 <a href='https://maps.google.com?q=Hanuman+Mandir+CP' target='_blank'>Open in Maps</a>"
        ],
        Stressed: [
            "Relax and meditate for a while—leave everything behind.",
            "Listen to this Podcast 🎧 <a href='https://open.spotify.com/show/706hylM6zaDW8LrrYxcggQ' target='_blank'>Click Here</a>",
            "Listen to <b>Hanuman Chalisa</b> 🙏 <a href='https://open.spotify.com/track/6H7fLdt0AeWpuxUKXuXWrx' target='_blank'>Click Here</a>",
            "Read <b>The Magic</b> book 📖 <a href='https://books.google.co.ls/books?id=EQg37fxM1SwC' target='_blank'>Read Now</a>"
        ],
        Bored: [
            "Read something that makes you motivated.",
            "Let's go to <b>DIY</b> for shopping! 🛍️ <a href='https://maps.google.com?q=DIY+store' target='_blank'>Open in Maps</a>",
            "Let's talk about some business ideas and how we can work on them."
        ],
        Irritated: [
            "Try to keep your calm—meditate 🧘",
            "Talk with Akshat and see what's going on in his life. 📞 <a href='tel:+123456789'>Call Now</a>",
            "Don't get angry over little things. Stay strong!",
            "Watch this amazing YouTube channel 📺 <a href='https://www.youtube.com/c/ThinkSchool' target='_blank'>Think School</a>"
        ],
        IDontKnow: [
            "Join a video call with me! 📹 <a href='https://meet.google.com/etk-hfpd-voh' target='_blank'>Join Now</a>"
        ]
    };

    if (mood && moodTasks[mood]) {
        root.innerHTML = `
            <div class="container">
                <h1>Your Mood: ${mood} 😃</h1>
                <ul>
                    ${moodTasks[mood].map(task => `<li>${task}</li>`).join('')}
                </ul>
                <button id="backBtn">⬅️ Back</button>
            </div>
        `;

        document.getElementById("backBtn").addEventListener("click", function () {
            window.location.href = "mood-selection.html";
        });
    } else {
        root.innerHTML = "<h1>Invalid Mood! Please go back and try again.</h1>";
    }
});
