import React from "react"
import { nanoid } from 'nanoid'

function Question(props) {
    const { question, setSelectedAnswers, selectedAnswers } = props
    const [options, setOptions] = React.useState([])
    const [answer, setAnswer] = React.useState({ id: question.id, selectedAnswer: null, isCorrect: null })

    console.log(question)

    React.useEffect(() => {
        // shuffle options
        const optionList = [question.correctAnswer, ...question.incorrectAnswers]
        for (let i = optionList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [optionList[i], optionList[j]] = [optionList[j], optionList[i]];
        }
        setOptions(optionList)
    }, [])


    React.useEffect(() => {
        const index = selectedAnswers.findIndex(a => a.id === answer.id)
        if (index === -1) {
            setSelectedAnswers(prev => [...prev, answer])
        } else {
            const updatedAnswers = [...selectedAnswers]
            updatedAnswers[index] = answer
            setSelectedAnswers(updatedAnswers)
        }
    }, [answer.selectedAnswer])

    const getOptions = options.map(option => {
        return (
            <div className="form-check" key={nanoid()}>
                <input
                    className="form-check-input"
                    type="radio"
                    id={option}
                    name={question.id}
                    value={option}
                    checked={answer.selectedAnswer === option}
                    onChange={e => {
                        const newAnswer = { ...answer, selectedAnswer: e.target.value }
                        setAnswer(newAnswer)
                    }}
                />
                <label className="form-check-label" htmlFor={option}>{option}</label>
            </div>
        )
    })

    const cardClassName = "card border-dark mt-2" + (answer.isCorrect === true ? " bg-success" : (answer.isCorrect === false ? " bg-danger" : ""))

    return (
        <div className={cardClassName} id={nanoid()}>
            <div className="card-header category">
                {question.category}
            </div>
            <div className="card-body">
                <p className="card-text question">{question.question}</p>
                {getOptions}
                 {answer.isCorrect === false && <div>Correct Answer: {question.correctAnswer}</div>}
            </div>
        </div>
    )
}

export default Question;