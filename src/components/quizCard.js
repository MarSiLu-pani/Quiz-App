import { createElement } from "../utils/elements";
import AnswerContainer from "./AnswerContainer";

function QuizCard() {
  const quizCard = createElement("article", {
    className: "quizCard",
    children: [AnswerContainer],
  });
  return quizCard;
}

export default QuizCard;
