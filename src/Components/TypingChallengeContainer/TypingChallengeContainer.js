import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsChard"
import TypingChallenge from "../TypingChallenge/TypingChallenge"
import "./TypingChallengeContainer.css"

const TypingChallengeContainer=({selectedPara,timerStarted,timeRemain, words, char, wpm,testInfo,input})=>{
    return <div className="typing-container">
{/* details  */}

<div className="detail-container">
    
    {/* words */}
  <ChallengeDetailsCard cardName="Words" cardVal={words}/>
    {/* Chars */}
    <ChallengeDetailsCard cardName="Chars" cardVal={char}/>
    {/* Wpm */}
    <ChallengeDetailsCard cardName="Wpm" cardVal={wpm}/>
    
    
</div>

{/* real container */}


<div className="main-type-container">
<TypingChallenge  input={input}  selectedPara={selectedPara}  timeRemain={timeRemain} timerStarted={timerStarted} testInfo={testInfo} />
</div>
    </div>
}
export default TypingChallengeContainer;