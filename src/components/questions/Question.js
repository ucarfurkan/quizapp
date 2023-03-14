import React from "react"
import { nanoid } from 'nanoid'

function Question(props) {
    const { question } = props
    const [options, setOptions] = React.useState([])

    React.useEffect(() => {
        // shuffle options
        const optionList = [question.correctAnswer, ...question.incorrectAnswers]
        for (let i = optionList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [optionList[i], optionList[j]] = [optionList[j], optionList[i]];
        }
        setOptions(optionList)
    }, [question])

    const getOptions = options.map(option => {
        return(
            <div className="form-check" key={nanoid()}>
                <input className="form-check-input" type="radio" id={option} />
                <label className="form-check-label" htmlFor={option}>{option}</label>
            </div>
        )
    })

    return (
        <div className="card border-dark mt-2 ">
            <div className="card-header category">
                {question.category}
            </div>
            <div className="card-body">
                <p className="card-text question">{question.question}</p>
                {getOptions}
            </div>
        </div>
    )
}

export default Question;