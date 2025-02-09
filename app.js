document.addEventListener("DOMContentLoaded", function() {
    const root = document.getElementById("root");

    function renderWelcomeScreen() {
        root.innerHTML = `
            <div class="container">
                <h1>Welcome to Mood Box 🎭</h1>
                <p>Click the button to get started!</p>
                <button id="startBtn">Let's See What Your Mood Exactly Is</button>
            </div>
        `;
        document.getElementById("startBtn").addEventListener("click", renderMoodSelection);
    }

    function renderMoodSelection() {
        root.innerHTML = `
            <div class="container">
                <h1>What's Your Mood Today? 🤔</h1>
                <button data-mood="Happy">😃 Happy</button>
                <button data-mood="Angry">😡 Angry</button>
                <button data-mood="Sad">😢 Sad</button>
                <button data-mood="Stressed">😵‍💫 Stressed</button>
                <button data-mood="Bored">😐 Bored</button>
                <button data-mood="Irritated">😠 Irritated</button>
                <button data-mood="IDontKnow">🤷‍♂️ I Don't Know</button>
            </div>
        `;

        document.querySelectorAll("button[data-mood]").forEach(button => {
            button.addEventListener("click", () => renderTaskScreen(button.dataset.mood));
        });
    }

    function renderTaskScreen(mood) {
        const moodTasks = {
            Happy: {
                tasks: [
                    "Watch Friends – 'The One Where Everybody Finds Out' (S05E14)",
                    "Watch The Big Bang Theory – 'The Bath Item Gift Hypothesis' (S02E11)",
                    "Start Learning Something That Motivates You"
                ],
                enhancements: [
                    "🎶 Listen to a happy playlist (E.g., 'Good Vibes Only' on Spotify).",
                    "📝 Write down 3 things you’re grateful for today.",
                    "🏞️ Go for a short walk and enjoy fresh air."
                ]
            },
            Angry: {
                tasks: [
                    "Try to Breathe and Calm Down",
                    "Listen to Others Without Reacting",
                    "Hit the Gym or Do Some Exercise",
                    "Take a Relaxing Shower"
                ],
                enhancements: [
                    "🧊 Hold an ice cube in your hand for 30 seconds—this can reset your mind.",
                    "🎮 Play a stress-relief mobile game (E.g., Color Match, Fruit Ninja).",
                    "🎤 Scream into a pillow or sing loudly—release emotions in a fun way!"
                ]
            },
            Sad: {
                tasks: [
                    "Look in the Mirror and Motivate Yourself",
                    "Eat Something Yummy - Tevaro Coffee, Subway Wrap, or Peri Peri Fries!",
                    "Call a Friend and Go to Timezone for Fun"
                ],
                enhancements: [
                    "📔 Write down your feelings in a journal—let it all out!",
                    "🏋️ Do a quick workout to boost endorphins (e.g., 5 pushups or a dance session).",
                    "🐶 Watch funny pet videos to feel instantly better."
                ]
            },
            Stressed: {
                tasks: [
                    "Relax and Meditate",
                    "Listen to a Podcast: <a href='https://open.spotify.com/show/706hylM6zaDW8LrrYxcggQ' target='_blank'>Click Here</a>",
                    "Read 'The Magic' Book: <a href='https://books.google.co.ls/books?id=EQg37fxM1SwC' target='_blank'>Click Here</a>"
                ],
                enhancements: [
                    "📖 Read 2 pages of an inspiring book (E.g., Atomic Habits).",
                    "🍵 Make a cup of herbal tea—calms the mind.",
                    "🌱 Touch a plant—nature reduces stress instantly.",
                    "🚶‍♀️ Walk barefoot on grass for 5 minutes (Science-backed stress relief!)."
                ]
            },
            Bored: {
                tasks: [
                    "Read Something Motivational",
                    "Go Shopping for Cool Diaries",
                    "Brainstorm Business Ideas"
                ],
                enhancements: [
                    "🎧 Try a new language for fun (Duolingo challenge for 5 minutes).",
                    "🖼️ Create a digital vision board (Pinterest / Canva).",
                    "🚀 Try a random online puzzle or trivia game (E.g., Akinator, GeoGuessr)."
                ]
            },
            Irritated: {
                tasks: [
                    "Meditate and Breathe",
                    "Talk to a Friend About Their Life",
                    "Watch Motivational Videos: <a href='https://www.youtube.com/c/ThinkSchool' target='_blank'>Think School</a>"
                ],
                enhancements: [
                    "🔥 Do 5 minutes of stretching or yoga (Tension release).",
                    "💌 Write a random kind message to someone (Shifts mindset to positive).",
                    "🌈 Color something (Even a quick doodle helps!)."
                ]
            },
            IDontKnow: {
                tasks: [
                    "Join a Video Call and Talk it Out: <a href='https://meet.google.com/etk-hfpd-voh' target='_blank'>Join Now</a>"
                ],
                enhancements: [
                    "🎲 Roll an online dice (1-6, whatever number you get, do something different).",
                    "📺 Click on a 'Random' Wikipedia page and learn something new.",
                    "🚗 Go outside and take a different route than usual (Breaks routine)."
                ]
            }
        };

        const selectedMood = moodTasks[mood];
        root.innerHTML = `
            <div class="container">
                <h2>Your Mood: ${mood} 😃</h2>
                <h3>Here are some activities for you:</h3>
                <ul>
                    ${selectedMood.tasks.map(task => `<li>${task}</li>`).join('')}
                </ul>
                <h3>Suggested Enhancements:</h3>
                <ul>
                    ${selectedMood.enhancements.map(enhancement => `<li>${enhancement}</li>`).join('')}
                </ul>
                <button id="backBtn">Back to Mood Selection</button>
            </div>
        `;

        document.getElementById("backBtn").addEventListener("click", renderMoodSelection);
    }

    renderWelcomeScreen();
});
