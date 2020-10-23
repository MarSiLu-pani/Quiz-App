import { createElement } from "../utils/elements";
import AnswerContainer from "./AnswerContainer";
import QuestionBox from "./QuestionBox";
import "./quizCard.css";

function QuizCard({ questionText, answers, correct_answer }) {
  const quizCard = createElement("article", {
    className: "quizCard",
    children: [
      QuestionBox(questionText),
      AnswerContainer(answers, correct_answer),
    ],
  });
  return quizCard;
}

export default QuizCard;
