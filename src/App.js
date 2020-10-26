import "./app.css";

import Header from "./components/Header";
import { createElement } from "./utils/elements";
import QuizCard from "./components/QuizCard";
import { getQuestions } from "./utils/api";

function App() {
  const header = Header();
  const button = createElement("button", {
    innerText: "Next question",
    className: "nextButton",
    onclick: () => loadAllQuestions(1),
  });

  const quizContainer = createElement("div", {
    className: "quizContainer",
  });

  const main = createElement("main", {});

  async function loadAllQuestions(amount) {
    const questions = await getQuestions(amount);
    const questionCard = questions.map((question) => {
      return QuizCard({
        questionText: question.question,
        answers: question.answers,
        correct_answer: question.correct_answer,
      });
    });
    quizContainer.innerHTML = "";
    quizContainer.append(...questionCard);
  }
  main.append(quizContainer, button);

  const container = createElement("div", {
    className: "container",
    children: [header, main],
  });

  loadAllQuestions(1);

  return container;
}
export default App;
