import React from "react"
import Question from "./Question";
import { getQuestions } from "@trivia-api/fetch";

function Questions() {
    const [questions, setQuestions] = React.useState([])
    const [selectedAnswers, setSelectedAnswers] = React.useState([])
    const [score, setScore] = React.useState(null);
    const [isOver, setIsOver] = React.useState(false);

    React.useEffect(() => {
        getQuestions({ limit: 10 }).then((questions) => {
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
            selectedAnswers[i].isChecked = true;
        }
        setIsOver(true);
    }

    function resetGame() {
        setQuestions([]);
        setSelectedAnswers([]);
        setScore(null);
        setIsOver(false);
        getQuestions({ limit: 10 }).then((questions) => {
            setQuestions(questions)
        });
    }

    return (
        <div className="question justify-content-center">
            {mappedQuestions}
            <div className="d-flex justify-content-between m-2">
                {!isOver ? (
                    <button className="btn btn-info submit-button" onClick={checkAnswers}>Submit Questions</button>
                ) : (
                    <button className="btn btn-primary reset-button" onClick={resetGame}>Reset Game</button>
                )}
                {score !== null && <span className="score bg-secondary">Score : {score}</span>}
            </div>
        </div>
    )
}

export default Questions;