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
                <div id="taskContainer"></div>
            </div>
        `;

        document.querySelectorAll("button[data-mood]").forEach(button => {
            button.addEventListener("click", () => renderTaskScreen(button.dataset.mood));
        });
    }

    function renderTaskScreen(mood) {
        const moodTasks = {
            Happy: [
                "Watch Friends – 'The One Where Everybody Finds Out' (S05E14)",
                "Watch The Big Bang Theory – 'The Bath Item Gift Hypothesis' (S02E11)",
                "Start Learning Something That Motivates You"
            ],
            Angry: [
                "Try to Breathe and Calm Down",
                "Listen to Others Without Reacting",
                "Hit the Gym or Do Some Exercise",
                "Take a Relaxing Shower"
            ],
            Sad: [
                "Look in the Mirror and Motivate Yourself",
                "Eat Something Yummy - Tevaro Coffee, Subway Wrap, or Peri Peri Fries!",
                "Call a Friend and Go to Timezone for Fun"
            ],
            Stressed: [
                "Relax and Meditate",
                "Listen to a Podcast: <a href='https://open.spotify.com/show/706hylM6zaDW8LrrYxcggQ' target='_blank'>Click Here</a>",
                "Read 'The Magic' Book: <a href='https://books.google.co.ls/books?id=EQg37fxM1SwC' target='_blank'>Click Here</a>"
            ],
            Bored: [
                "Read Something Motivational",
                "Go Shopping for Cool Diaries",
                "Brainstorm Business Ideas"
            ],
            Irritated: [
                "Meditate and Breathe",
                "Talk to a Friend About Their Life",
                "Watch Motivational Videos: <a href='https://www.youtube.com/c/ThinkSchool' target='_blank'>Think School</a>"
            ],
            IDontKnow: [
                "Join a Video Call and Talk it Out: <a href='https://meet.google.com/etk-hfpd-voh' target='_blank'>Join Now</a>"
            ]
        };

        const taskContainer = document.getElementById("taskContainer");
        taskContainer.innerHTML = `
            <div class="card">
                <h2>Your Mood: ${mood} 😃</h2>
                <ul>
                    ${moodTasks[mood].map(task => `<li>${task}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    renderWelcomeScreen();
});
