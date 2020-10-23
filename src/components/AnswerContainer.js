import { createElement } from "../utils/elements";

function AnswerContainer() {
  const answerContainer = createElement("div", {
    className: "quizCard__answers",
    children: [answerButton1, answerButton2, answerButton3, answerButton4],
  });
  return answerContainer;
}

export default AnswerContainer;
