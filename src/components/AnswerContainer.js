import { createElement } from "../utils/elements";
import "./quizCard.css";

function AnswerContainer(answers, correct_answer) {
  const allAnswers = [...answers];

  allAnswers.push(correct_answer);

  function randomizeAnswers(arr) {
    arr.sort(() => Math.random() - 0.5);
  }

  randomizeAnswers(allAnswers);
  console.log(correct_answer);

  let allAnswersRandom = allAnswers.map((element) =>
    createElement("button", {
      className: "quizcard__answer__buttons",
      innerHTML: element,
      onclick: function () {
        if (element === correct_answer) {
          alert("U r right!");
        } else {
          alert("U r wrong!");
        }
      },
    })
  );

  const answerContainer = createElement("div", {
    className: "quizCard__answers",
    children: [...allAnswersRandom],
  });
  return answerContainer;
}

export default AnswerContainer;
