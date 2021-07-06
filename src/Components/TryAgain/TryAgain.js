import "./TryAgain.css"

const TryAgain=(props)=>{

   const  tweetHanlder=()=>{
console.log("click tweet ")
    }
    return <div className="try-again-container">
<h1>Test Results</h1>
<div className="result-container">
<p>
    <b>Words  : </b>{props.words}
</p>

<p>
    <b>Char : </b>{props.char}
</p>

<p>
    <b>Wpm  :</b>{props.wpm} wpm
</p>


</div>
<div className="buttons">
    <button onClick={()=>props.startAgain()} className="end-buttons  start-again">Try Again</button>
    <button  onClick={tweetHanlder} className="end-buttons  tweet-btn">Tweet</button>
    
</div>
    </div>
}
export default TryAgain;