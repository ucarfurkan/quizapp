import React from "react"
import Question from "./Question";
import { getQuestions } from "@trivia-api/fetch";

function Questions() {
    const [questions, setQuestions] = React.useState([])
    const [selectedAnswers,setSelectedAnswers] = React.useState([])
    const [score,setScore] = React.useState(null);

    React.useEffect(() => {
        getQuestions({ limit: 5 }).then((questions) => {
            setQuestions(questions)
          });
    }, [])

    const mappedQuestions = questions.map(quest => {
        return <Question key={quest.id} question={quest} selectedAnswers={selectedAnswers} setSelectedAnswers={setSelectedAnswers} />
    })

    function checkAnswers(){
        console.log(questions)
        setScore(0)
        for(let i=0; i<questions.length;i++){
            if(selectedAnswers[i].selectedAnswer !== null && selectedAnswers[i].id === questions[i].id){
                if(selectedAnswers[i].selectedAnswer === questions[i].correctAnswer){
                    setScore(prev => prev+1)
                }
            }
        }
    }

    return (
        <div className="question justify-content-center">
            {mappedQuestions}
            <button className="btn btn-primary" onClick={checkAnswers}>Click</button>
            {score !== null && <span>Score : {score}</span>}
        </div>
    )
}

export default Questions;