
import React from  "react";
import TestContainer from "../TestContainer/TestContainer";
import "./ChallengeSection.css"
const ChallengeSection=({selectedPara,timerStarted,timeRemain, words, char, wpm,testInfo,input,startAgain})=>{
    console.log("para ",selectedPara)
    return <div className="challenge-section-container">
        
            <h1 className="challenge-section-header">Take a Speed Test Now</h1>

            <TestContainer   startAgain={startAgain} selectedPara={selectedPara} timeRemain={timeRemain} timerStarted={timerStarted}  words={words} char={char} wpm={wpm} testInfo={testInfo} input={input}/>
      

    </div>
}

export default ChallengeSection;