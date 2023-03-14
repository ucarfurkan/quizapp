import React from "react"
import { getQuestions } from "@trivia-api/fetch";

function Questions() {
    const [questions, setQuestions] = React.useState([])

    React.useEffect(() => {
        getQuestions({ limit: 5 }).then((questions) => {
            setQuestions(questions)
          });
    }, [])

    console.log(questions)

    return (
        <div className="question justify-content-center">
            
        </div>
    )
}

export default Questions;