/* Hier connecten wir an die API (immer: async function, da wir auf die respond der API warten müssen -> nicht alles gleichzeitig)

 */

export async function getQuestions(amount) {
  //1. die entry url zur API, die in const url gespeichert wird
  const url = `https://opentdb.com/api.php?amount=${amount}&type=multiple`;
  //2. keine ahnung, fetchen aber die url
  const response = await fetch(url);
  /* 3. speichern alle Daten zu einer question in const questions (z.B:{
    "response_code": 0,
    "results": [
    {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What is the last letter of the Greek alphabet?",
    "correct_answer": "Omega",
    "incorrect_answers": [
    "Mu",
    "Epsilon",
    "Kappa"
    ]
    }
    ]
    }) */
  const questions = await response.json();

  //4. wir speichern in der const formattedQuestions jetzt die Daten, die wir benötigen (z.B. const answers=incorrect_answers + correct_answer)
  const formattedQuestions = questions.results.map((question) => {
    const answers = [...question.incorrect_answers];

    //5. hier returnen wir alle Daten, die wir weiterverwenden noch mal in einer einfacheren variable
    return {
      category: question.category,
      type: question.type,
      difficulty: question.difficulty,
      question: question.question,
      correct_answer: question.correct_answer,
      answers: answers,
    };
  });

  return formattedQuestions;
}
