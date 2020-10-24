import { createElement } from "../utils/elements";
import "./quizCard.css";

function AnswerContainer(answers, correct_answer) {

  let incorrectAnswerButtons = answers.map((element) =>
    createElement("button", {
      className: "quizcard__answer__buttons",
      innerHTML: element,
    })
  );
  let correctAnswerButton = createElement("button", {
    className: "quizcard__answer__buttons",
    innerHTML: correct_answer,
  });

  const answerContainer = createElement("div", {
    className: "quizCard__answers",
    children: [...incorrectAnswerButtons, correctAnswerButton],
  });
  return answerContainer;
}

export default AnswerContainer;
