import { createElement } from "../utils/elements";

function QuestionBox(question) {
  const questionBox = createElement("span", {
    className: "quizCard__question",
    innerHTML: question,
  });
  return questionBox;
}
export default QuestionBox;
