const questionEl = document.getElementById("question");
const resultEl = document.getElementById("result");

const questions = [
  { text: "Do llamas spit when angry?", answer: true },
  { text: "Are llamas native to Australia?", answer: false },
  { text: "Can llamas be trained as pack animals?", answer: true },
];

let current = 0;

function showQuestion() {
  if (current >= questions.length) {
    questionEl.textContent = "Quiz complete!";
    return;
  }
  questionEl.textContent = questions[current].text;
}

function answer(userAnswer) {
  if (userAnswer === questions[current].answer) {
    resultEl.textContent = "✅ Correct!";
  } else {
    resultEl.textContent = "❌ Nope!";
  }
  current++;
  setTimeout(() => {
    resultEl.textContent = "";
    showQuestion();
  }, 1000);
}

showQuestion();
