import React from "react"
import Question from "./Question";
import { getQuestions } from "@trivia-api/fetch";

function Questions() {
    const [questions, setQuestions] = React.useState([])

    React.useEffect(() => {
        getQuestions({ limit: 5 }).then((questions) => {
            setQuestions(questions)
          });
    }, [])

    const mappedQuestions = questions.map(quest => {
        return <Question key={quest.id} question={quest} />
    })

    return (
        <div className="question justify-content-center">
            {mappedQuestions}
        </div>
    )
}

export default Questions;