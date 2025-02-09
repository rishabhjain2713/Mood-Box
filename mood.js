document.addEventListener("DOMContentLoaded", function() {
    const moodRoot = document.getElementById("moodRoot");

    const urlParams = new URLSearchParams(window.location.search);
    const mood = urlParams.get("mood");

    const moodTasks = {
        Happy: [
            "Watch Friends – 'The One Where Everybody Finds Out' (S05E14)",
            "Listen to a happy playlist (E.g., 'Good Vibes Only' on Spotify)",
            "Write down 3 things you’re grateful for today",
            "Go for a short walk and enjoy the fresh air",
            "🎶 Listen to a happy playlist (E.g., 'Good Vibes Only' on Spotify).",
            "📝 Write down 3 things you’re grateful for today.",
            "🏞️ Go for a short walk and enjoy the fresh air."
        ],
        Angry: [
            "Try to Breathe and Calm Down",
            "Listen to Others Without Reacting",
            "Play a stress-relief mobile game (E.g., Color Match, Fruit Ninja)",
            "Scream into a pillow or sing loudly",
            "🧊 Hold an ice cube in your hand for 30 seconds—this can reset your mind.",
            "🎮 Play a stress-relief mobile game (E.g., Color Match, Fruit Ninja).",
            "🎤 Scream into a pillow or sing loudly—release emotions in a fun way!"
        ],
        Sad: [
            "Look in the Mirror and Motivate Yourself",
            "Write down your feelings in a journal—let it all out!",
            "Do a quick workout to boost endorphins",
            "Watch funny pet videos to feel instantly better",
            "📔 Write down your feelings in a journal—let it all out!",
            "🏋️ Do a quick workout to boost endorphins (e.g., 5 pushups or a dance session).",
            "🐶 Watch funny pet videos to feel instantly better."
        ],
        Stressed: [
            "Relax and Meditate",
            "Read 2 pages of an inspiring book (E.g., Atomic Habits)",
            "Make a cup of herbal tea—calms the mind",
            "Walk barefoot on grass for 5 minutes (Science-backed stress relief!)",
            "📖 Read 2 pages of an inspiring book (E.g., Atomic Habits).",
            "🍵 Make a cup of herbal tea—calms the mind.",
            "🌱 Touch a plant—nature reduces stress instantly.",
            "🚶‍♀️ Walk barefoot on grass for 5 minutes (Science-backed stress relief!)."
        ],
        Bored: [
            "Read Something Motivational",
            "Try a new language for fun (Duolingo challenge for 5 minutes)",
            "Create a digital vision board (Pinterest / Canva)",
            "Try a random online puzzle or trivia game (E.g., Akinator, GeoGuessr)",
            "🎧 Try a new language for fun (Duolingo challenge for 5 minutes).",
            "🖼️ Create a digital vision board (Pinterest / Canva).",
            "🚀 Try a random online puzzle or trivia game (E.g., Akinator, GeoGuessr)."
        ],
        Irritated: [
            "Meditate and Breathe",
            "Do 5 minutes of stretching or yoga (Tension release)",
            "Write a random kind message to someone (Shifts mindset to positive)",
            "Color something (Even a quick doodle helps!)",
            "🔥 Do 5 minutes of stretching or yoga (Tension release).",
            "💌 Write a random kind message to someone (Shifts mindset to positive).",
            "🌈 Color something (Even a quick doodle helps!)."
        ],
        IDontKnow: [
            "Join a Video Call and Talk it Out: <a href='https://meet.google.com/etk-hfpd-voh' target='_blank'>Join Now</a>",
            "Roll an online dice (1-6, whatever number you get, do something different)",
            "Click on a 'Random' Wikipedia page and learn something new",
            "Go outside and take a different route than usual (Breaks routine)"
        ]
    };

    if (mood && moodTasks[mood]) {
        moodRoot.innerHTML = `
            <div class="container">
                <h1>Your Mood: ${mood} 🎭</h1>
                <h2>Suggestions to Try:</h2>
                <ul>
                    ${moodTasks[mood].map(task => `<li>${task}</li>`).join('')}
                </ul>
                <button id="backBtn">⬅️ Back to Mood Selection</button>
            </div>
        `;

        document.getElementById("backBtn").addEventListener("click", () => {
            window.location.href = "index.html#moodSelection";
        });
    } else {
        moodRoot.innerHTML = `<h1>Invalid Mood Selection</h1>`;
    }
});
