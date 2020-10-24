import "./app.css";

import Header from "./components/Header";
import { createElement } from "./utils/elements";
import QuizCard from "./components/QuizCard";
import { getQuestions } from "./utils/api";
// import QuestionBox from "./components/QuestionBox";
// import AnswerContainer from "./components/AnswerContainer";

function App() {
  const header = Header();

  const reloadButton = createElement("button", {
    className: "reloadButton",
    innerText: "Next question",
    /* onclick: window.location.reload(), */
  });

  //Quizcard
  const main = createElement("main", {});

  async function loadAllQuestions(amount) {
    const questions = await getQuestions(amount);
    const allQuestions = questions.map((question) => {
      return QuizCard({
        questionText: question.question,
        answers: question.answers,
        correct_answer: question.correct_answer,
      });
    });
    main.append(...allQuestions);
  }

  const container = createElement("div", {
    className: "container",
    children: [header, main, reloadButton],
  });

  loadAllQuestions(1);
  // getQuestions(10);
  return container;
}
export default App;
