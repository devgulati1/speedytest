import "./TestLetter.css"

const TestLetter=({singleLetter})=>{
    console.log("single letter in  ",singleLetter.testLetter)
    const {status} =singleLetter;

    const statusClass={
        correct:"test-letter-correct",
        incorrect:"test-letter-incorrect",
        notAttempted:"test-letter-not-attempted",
    }[status];
  
    return(
        <span className={`test-letter ${statusClass}`}>
        {singleLetter.testLetter}
    </span>
    );
}
export default TestLetter;