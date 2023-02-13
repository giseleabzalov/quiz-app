import { useState } from 'react';
import QuizResult from "../components/QuizResult.js";
import QuizCard from "../components/QuizCard.js";
import { data } from "../data/data.js"

export default function Quiz() {

    const [questionId, setQuestionId] = useState(0)
    const [ score, setScore ] = useState(0)
    const length = data.length;

    const handleReset = () => {
        setShowScore(false)
        setScore(0)
        setQuestionId(0)
    }

    const handleQuestion = (isCorrect) => {
        if ( isCorrect === true ) setScore( score + 1 )
        
        const newQuestionId = questionId + 1;
        (newQuestionId < length)
        ? (setQuestionId(newQuestionId))
        : (setShowScore(true))
       
    }

    const [ showScore, setShowScore ] = useState(false);

    return(
        <>
        <h1>Quiz</h1>
        {showScore
        ? ( <QuizResult
            length={length}
            score={score}
            handleReset={handleReset} /> )

        : ( <QuizCard
            data={data}
            length={length} 
            questionId={questionId} 
            handleQuestion={handleQuestion}/>)
    }
        </>
    )
}