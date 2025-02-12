document.addEventListener("DOMContentLoaded", function() {
    const root = document.getElementById("root");

    function renderWelcomeScreen() {
        root.innerHTML = `
            <div class="container">
                <h1>Welcome Gracy! Let's Play 🎭</h1>
                <p>Let's see how we can enlighten your mood.</p>
                <button id="startBtn">Let's Start</button>
            </div>
        `;
        document.getElementById("startBtn").addEventListener("click", renderMoodSelection);
    }

    function renderMoodSelection() {
        root.innerHTML = `
            <div class="container">
                <h1>What's Your Mood Today? 🤔</h1>
                <div class="mood-buttons">
                    <button data-mood="Happy">😃 Happy</button>
                    <button data-mood="Angry">😡 Angry</button>
                    <button data-mood="Sad">😢 Sad</button>
                    <button data-mood="Stressed">😵‍💫 Stressed</button>
                    <button data-mood="Bored">😐 Bored</button>
                    <button data-mood="Irritated">😠 Irritated</button>
                    <button data-mood="IDontKnow">🤷‍♂️ I Don't Know</button>
                    <button data-mood="GIFT">❤ GIFT</button>

                </div>
            </div>
        `;

        document.querySelectorAll("button[data-mood]").forEach(button => {
            button.addEventListener("click", () => navigateToMoodPage(button.dataset.mood));
        });
    }

    function navigateToMoodPage(mood) {
        window.location.href = `mood.html?mood=${mood}`;
    }

    renderWelcomeScreen();
});
