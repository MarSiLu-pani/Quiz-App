import "./app.css";

import Header from "./components/Header";
import { createElement } from "./utils/elements";
import QuizCard from "./components/QuizCard";
import { getQuestions } from "./utils/api";

//die Hauptfunktion (funtion App), die in der index.js an das HTML-Dokument appended wird

function App() {
  // A. hier bilden wir den Header (ausgelagert in Header.js),den "next question"-button und das Main-Element
  const header = Header();
  const button = createElement("button", {
    innerText: "Next question",
    className: "nextButton",
  });

  const main = createElement("main", {});

  //B. hier bilden eine neue Funktion (loadAllQuestions), mit der wir auf die Daten aus der API zugreifen (bisher in api.js). In const questionCard speichern
  //wir das value von der QuizCard Funktion (in quizCard.js) und appenden es an main
  async function loadAllQuestions(amount) {
    const questions = await getQuestions(amount);
    const questionCard = questions.map((question) => {
      return QuizCard({
        questionText: question.question,
        answers: question.answers,
        correct_answer: question.correct_answer,
      });
    });
    main.append(...questionCard);
  }

  //C. hier bilden wir das div, in das alles appended wird - header, main (mit unserer quizCard) und der next question button
  const container = createElement("div", {
    className: "container",
    children: [header, main, button],
  });

  //D. hier rufen wir die funktion loadAllQuestions auf, wordurch wir eine/"1" question laden und die gefilterten Daten
  // in die QuizCard appenden

  loadAllQuestions(1);

  return container;
}
export default App;
