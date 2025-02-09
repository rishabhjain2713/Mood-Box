import React, { useState } from "react";

const moods = {
  Happy: [
    "Watch Friends – 'The One Where Everybody Finds Out' (S05E14)",
    "Watch The Big Bang Theory – 'The Bath Item Gift Hypothesis' (S02E11)",
    "Start learning something that makes you motivated!",
  ],
  Angry: [
    "Try to breathe deeply and stay calm.",
    "Listen to others without reacting. You might regret words later!",
    "Go hit the gym or exercise at home.",
    "Take a shower to lighten your mood.",
  ],
  Sad: [
    "Look in the mirror and remind yourself: 'This is not the end, I can do better!'.",
    "Eat something nice: Tevaro Coffee, Subway Wrap, Peri Peri Fries, Hot Water Maggie, or Starbucks Coffee.",
    "Call me! We can go to Timezone and have fun.",
  ],
  Stressed: [
    "Take a break, put your books aside, and meditate.",
    "Listen to this podcast: https://open.spotify.com/show/706hylM6zaDW8LrrYxcggQ",
    "Listen to Hanuman Chalisa for motivation: https://open.spotify.com/track/6H7fLdt0AeWpuxUKXuXWrx?si=fc2cee7ec9154da7",
    "Read 'The Magic': https://books.google.co.ls/books?id=EQg37fxM1SwC&printsec=copyright#v=onepage&q&f=false",
  ],
  Bored: [
    "Read something that makes you motivated.",
    "Go shopping for good diaries at DIY.",
    "Let's discuss business ideas and how to work on them!",
  ],
  Irritated: [
    "Try to stay calm and meditate.",
    "Talk to Akshat about life updates.",
    "Don't get angry over little things!",
    "Watch videos like Think School: https://www.youtube.com/c/ThinkSchool",
  ],
  "I Don't Know": [
    "Join me on Google Meet, and we'll figure it out: https://meet.google.com/etk-hfpd-voh?authuser=0",
  ],
};

const App = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [suggestion, setSuggestion] = useState("");

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
    const randomSuggestion =
      moods[mood][Math.floor(Math.random() * moods[mood].length)];
    setSuggestion(randomSuggestion);
  };

  return (
    <div className="container">
      <h1>Mood Box 🎭</h1>
      <p className="funny-text">
        Hey, you can call me anytime! But first, let's find your mood! 😆
      </p>

      {!selectedMood ? (
        <div className="mood-options">
          {Object.keys(moods).map((mood) => (
            <button key={mood} onClick={() => handleMoodClick(mood)}>
              {mood}
            </button>
          ))}
        </div>
      ) : (
        <div className="result">
          <h2>Your Mood: {selectedMood} 🎉</h2>
          <p>{suggestion}</p>
          <button onClick={() => setSelectedMood(null)}>Try Again</button>
        </div>
      )}
    </div>
  );
};

export default App;
