import { createElement } from "../utils/elements";
import "./quizCard.css";

function AnswerContainer(answers, correct_answer) {
  const allAnswers = [...answers];

  allAnswers.push(correct_answer);

  function randomizeAnswers(arr) {
    arr.sort(() => Math.random() - 0.5);
  }

  randomizeAnswers(allAnswers);
  console.log(allAnswers);

  // function changeCorrectColor() {
  //   const button = document.querySelector(".quizcard__answer__buttons");
  //   button.classList.toggle("correct__answer__button");
  // }

  // function changeIncorrectColor() {
  //   const button = document.querySelector(".quizcard__answer__buttons");
  //   button.classList.toggle("incorrect__answer__buttons");
  // }

  let allAnswersRandom = allAnswers.map((element) =>
    createElement("button", {
      className: "quizcard__answer__buttons",
      innerHTML: element,
      onclick: function () {
        if (element === correct_answer) {
          const button = document.querySelector(".quizcard__answer__buttons");
          button.classList.add("correct__answer__button");
        }
        //  else {
        //   const button = document.querySelector(".quizcard__answer__buttons");
        //   button.classList.add("incorrect__answer__buttons");
        // }
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
