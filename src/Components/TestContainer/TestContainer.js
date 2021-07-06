// import TryAgain from "../TryAgain/TryAgain"
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer"
import "./TestContainer.css"
import TryAgain from "./../TryAgain/TryAgain"

const TestContainer=({selectedPara,timerStarted,timeRemain, words, char, wpm,testInfo,input,startAgain})=>{
   

    return<div className="test-container">
        {
            timeRemain>0?(<div  data-aos="fade-up" className="typing-challenge-container">
            <TypingChallengeContainer  input={input}  selectedPara={selectedPara} timeRemain={timeRemain} timerStarted={timerStarted}  words={words} char={char} wpm={wpm}  testInfo={testInfo}/>

        </div>)
        :
        <div className="try-again-cont">
        <TryAgain  startAgain={startAgain} words={words} char={char} wpm={wpm}/>
    </div> 

        }
       
       

    </div>
}
export default TestContainer;