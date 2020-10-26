export async function getQuestions(amount) {
  const url = `https://opentdb.com/api.php?amount=${amount}&type=multiple`;

  const response = await fetch(url);

  const questions = await response.json();

  const formattedQuestions = questions.results.map((question) => {
    const answers = [...question.incorrect_answers];

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
