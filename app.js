function showCards(mood) {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ''; // Clear previous cards

    let tasks = {
        happy: ["Watch a funny video", "Listen to happy music"],
        angry: ["Take deep breaths", "Do a 5-minute meditation"],
        sad: ["Watch an uplifting video", "Write down your feelings"]
    };

    tasks[mood].forEach(task => {
        let card = document.createElement('div');
        card.className = 'card';
        card.innerText = task;
        cardContainer.appendChild(card);
    });
}
