const quizData = [
  {
    question: "1/4) Hierakonpolis est l'un des sites archéologiques les plus important d’Egypte. En 2009, on y a découvert quelque chose d'insolite. Mais quoi ?",
    a: 'Un zoo de plus de 3500ans',
    b: 'Une piste de danse de plus de 3500ans',
    c: "Un parc d'accrobranche de plus de 3500ans",
    d: 'Un Jean-Pierre Pernaut en pleine forme',
    correct: 'a'
  }, {
    question: '2/4) Masabumi Hosono était le seul japonais à bord du Titanic, que lui est-il arrivé ?',
    a:'Il a laiisé sa place à plus de 30 personnes avant de trouver une placer et de sauver sa peau. Il a une statue dans son village natal',
    b: "Il a sauté dans le premier canot de sauvetage. Aujourd'hui encore, il est considéré comme un lâche dans son pays",
    c: "Il est resté dans le titanic jusqu'au bout. Il tenait absolument à finir l'écriture d'une chanson",
    d: "La réponse d",
    correct: 'b'
  },{
    question:'3/4) Parmi les animaux suivants, lequel peut se déplacer le plus rapidement ?',
    a: 'Le léopard',
    b: 'Le springbok',
    c: 'Le chevreuil',
    d: "L'autruche",
    correct: 'b'
  }, {
    question: "4/4) Où trouve-t-on le plus de pyramide ?",
    a: 'Au Mexique',
    b: 'En Egypte',
    c: 'Au Saoudan',
    d: 'Au Paraguay',
    correct: 'c'
  }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
          answer = answerEl.id;
      }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
      answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
      if (answer === quizData[currentQuiz].correct) {
          score++;
      }

      currentQuiz++;
      if (currentQuiz < quizData.length) {
          loadQuiz();
      } else {
          quiz.innerHTML = `
              <h2>Vous avez trouvé ${score} réponses sur ${quizData.length}.</h2>

              <center>
              <h3>Réponses :</h3>
              <p>1/4) Un zoo de plus de 3500ans</p>
              <p>2/4) Il a sauté dans le premier canot de sauvetage. Aujourd'hui encore, il est considéré comme un lâche dans son pays</p>
              <p>3/4) Le springbok</p>
              <p>4/4) Au Saoudan </p>
              </center>

              <button onclick="location.reload()">Recommencer</button>
          `;
      }
  }
});
