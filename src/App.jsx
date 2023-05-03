import React, { useState } from "react";
import Quizcard from "./components/quizcard/QuizCard";
import "./App.css";
import { questions } from "./data";
import QuestionCount from "./components/questionCount/QuestionCount";


export default function App() {

  const [questionOrder, setQuestionOrder] = useState(0);
  const [selectedOption, setSelectedOption] = useState("")
  const [selectedQuestions, setSelectedQuestions] = useState({})

  console.log(selectedQuestions);


  return (
    <div className="container">
      <div className="main-block">
        <Quizcard
          questionNumber={questionOrder}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          selectedQuestions={selectedQuestions}
          setSelectedQuestions={setSelectedQuestions}
          changeQuestion={setQuestionOrder}
          question={questions[questionOrder].question}
          options={questions[questionOrder].options} />
        <QuestionCount
          currentQuestion={questionOrder + 1}
          questionLength={questions.length}
          setQuestionOrder={setQuestionOrder}
        />
      </div>
    </div>
  );
}

