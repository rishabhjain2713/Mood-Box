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
            <div class="container" id="moodSelection">
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
            button.addEventListener("click", () => navigateToMoodPage(button.dataset.mood));
        });
    }

    function navigateToMoodPage(mood) {
        window.location.href = `mood.html?mood=${mood}`;
    }

    // Check if the user came back to the mood selection screen
    if (window.location.hash === "#moodSelection") {
        renderMoodSelection();
    } else {
        renderWelcomeScreen();
    }
});
