document.addEventListener("DOMContentLoaded", function() {
    const root = document.getElementById("root");

    function renderWelcomeScreen() {
        root.innerHTML = `
            <div class="container">
                <h1>Welcome Gracy, Let's Play! 🎉</h1>
                <p>Let's See How We Can Enlighten Your Mood.</p>
                <button id="startBtn">Let's Start</button>
            </div>
            <footer>You Can Call Me Anytime You Want</footer>
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
            <footer>You Can Call Me Anytime You Want</footer>
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
