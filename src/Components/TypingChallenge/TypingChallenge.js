import TestLetter from "../TestLetter/TestLetter"
import "./TypingChallenge.css"

const TypingChallenge=({selectedPara,timerStarted,timeRemain,testInfo,input })=>{
    console.log("testInfo inside Typingchallenge ",testInfo)
  
   
    return <div className="typing-challenge">
        <div className="timer-container">
            <p className="timer">00.
            
            {timeRemain>=10?timeRemain:`0${timeRemain}`}
            </p>
           <p className="timer-info">
           {!timerStarted && "Start typing to start the test"}</p>
                
        </div>

        <div className="textarea-container">
            <div className="textarea-left">
            <div className="textarea  test-para">
                 
                { testInfo.map((singleLetter,index)=>{
                    
                    return(
                        <TestLetter  key={index} singleLetter={singleLetter}/>
                       
                    );
                     
                   
                })} 
                   

                </div>
            </div>
            <div className="textarea-right">
                <textarea className="textarea"  onChange={(e) => input(e.target.value)} placeholder="Start Typing Here">

                </textarea>
            </div>
        </div>
         
    </div>
}
export default TypingChallenge;