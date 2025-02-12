document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById("root");

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
            <button onclick="selectMood('Gift')">GIFT ❤</button>
        </div>
    `;

    document.querySelectorAll("button[data-mood]").forEach(button => {
        button.addEventListener("click", function () {
            window.location.href = `mood.html?mood=${button.dataset.mood}`;
        });
    });
});
