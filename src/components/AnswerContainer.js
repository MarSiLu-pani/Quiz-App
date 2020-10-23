import { createElement } from "../utils/elements";
import "./quizCard.css";

function AnswerContainer(answers, correct_answer) {
  const answer1 = answers[0];
  const answerButton1 = createElement("button", {
    className: "quizCard__answers__button",
    innerHTML: answer1,
  });
  const answer2 = answers[1];
  const answerButton2 = createElement("button", {
    className: "quizCard__answers__button",
    innerHTML: answer2,
  });
  const answer3 = answers[2];
  const answerButton3 = createElement("button", {
    className: "quizCard__answers__button",
    innerHTML: answer3,
  });
  const answer4 = answers[3];
  const answerButton4 = createElement("button", {
    className: "quizCard__answers__button",
    innerHTML: answer4,
  });

  const answerContainer = createElement("div", {
    className: "quizCard__answers",
    children: [answerButton1, answerButton2, answerButton3, answerButton4],
  });
  return answerContainer;
}

export default AnswerContainer;
