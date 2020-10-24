import { createElement } from "../utils/elements";
import "./quizCard.css";

function AnswerContainer(answers, correct_answer) {
  const answer1 = answers[0];
  const answerButton1 = createElement("button", {
    className: "quizCard__answers__button1",
    innerHTML: answer1,
    onclick: function () {
      document.querySelector(".quizCard__answers__button1").style.color = "red";
    },
  });
  const answer2 = answers[1];
  const answerButton2 = createElement("button", {
    className: "quizCard__answers__button2",
    innerHTML: answer2,
    onclick: function () {
      document.querySelector(".quizCard__answers__button2").style.color = "red";
    },
  });
  const answer3 = answers[2];
  const answerButton3 = createElement("button", {
    className: "quizCard__answers__button3",
    innerHTML: answer3,
    onclick: function () {
      document.querySelector(".quizCard__answers__button3").style.color = "red";
    },
  });
  const answer4 = correct_answer;
  const answerButton4 = createElement("button", {
    className: "quizCard__answers__button4",
    innerHTML: answer4,
    onclick: function () {
      document.querySelector(".quizCard__answers__button4").style.color =
        "green";
    },
  });

  const answerContainer = createElement("div", {
    className: "quizCard__answers",
    children: [answerButton1, answerButton2, answerButton3, answerButton4],
  });
  return answerContainer;
}

export default AnswerContainer;
