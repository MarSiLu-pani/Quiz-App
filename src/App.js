import "./app.css";

import Header from "./components/Header";
import { createElement } from "./utils/elements";
import QuizCard from "./components/quizCard";
import { getQuestions } from "./utils/api";

function App() {
  const header = Header();

  //Quizcard

  const questionBox = createElement("span", {
    className: "quizCard__question",
  });

  const quizCard = QuizCard();

  //

  const main = createElement("main", {
    children: [quizCard],
  });

  const container = createElement("div", {
    children: [header, main],
  });

  getQuestions(10);
  return container;
}

export default App;
