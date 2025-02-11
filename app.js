document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById("root");

    function renderWelcomeScreen() {
        root.innerHTML = `
            <div class="container">
                <h1>Welcome Gracy! 🎭</h1>
                <p>Let's see how we can enlighten your mood today.</p>
                <button id="startBtn">Let's Start!</button>
            </div>
        `;
        document.getElementById("startBtn").addEventListener("click", function () {
            window.location.href = "mood-selection.html";
        });
    }

    renderWelcomeScreen();
});
