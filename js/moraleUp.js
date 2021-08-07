const moraleUp = document.querySelector("#todo-form h2:first-child");
const messageArr = [
    "Be brave for your mantra!",
    "Catch your day with your mantra!",
    "Shout out loud your mantra!",
    "Life is so beautiful.",
    "Say NO, and focus on yourself.",
    "No one owes you anything.",
    "Hard choices, easy life. Easy choices, hard life.",
    "Learn more, know less.",
    "What would you do if you were not afraid?"
];

const chosenMessage = messageArr[Math.floor(Math.random() * messageArr.length)];

moraleUp.innerText = chosenMessage;