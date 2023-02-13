export default function QuizResult({score, length, handleReset }) {
    return (
        <>
        <h2>Quiz Result</h2>
        <p>You scored {score} out of {length}</p>
        <button onClick={handleReset}>Try Again</button>
        </>
    )
}