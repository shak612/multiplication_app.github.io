const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const formEl = document.getElementById("form");
const questionEl = document.getElementById("question");
questionEl.innerHTML = `What is ${num1} multiply by ${num2}?`;
const correctAns = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  screen = 0;
}

scoreEl.innerText = `score : ${score}`;

formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
