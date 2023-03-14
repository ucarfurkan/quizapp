import React from "react"
import Question from "./Question";
import { getQuestions } from "@trivia-api/fetch";

function Questions() {
    const [questions, setQuestions] = React.useState([])
    const [selectedAnswers, setSelectedAnswers] = React.useState([])
    const [score, setScore] = React.useState(null);

    React.useEffect(() => {
        getQuestions({ limit: 5 }).then((questions) => {
            setQuestions(questions)
        });
    }, [])

    const mappedQuestions = questions.map(quest => {
        return <Question key={quest.id} question={quest} selectedAnswers={selectedAnswers} setSelectedAnswers={setSelectedAnswers} />
    })

    function checkAnswers() {
        setScore(0)
        for (let i = 0; i < questions.length; i++) {
            if (selectedAnswers[i].id === questions[i].id) {
                if (selectedAnswers[i].selectedAnswer === questions[i].correctAnswer) {
                    setScore(prev => prev + 1)
                    selectedAnswers[i].isCorrect = true;
                }
                else if (selectedAnswers[i].selectedAnswer === null) {

                }
                else {
                    selectedAnswers[i].isCorrect = false;
                }
            }
        }
    }

    return (
        <div className="question justify-content-center">
            {mappedQuestions}
            <div className="d-flex justify-content-between m-2">
                <button className="btn btn-info submit-button" onClick={checkAnswers}>Submit Questions</button>
                {score !== null && <span className="score bg-secondary">Score : {score}</span>}
            </div>
        </div>
    )
}

export default Questions;