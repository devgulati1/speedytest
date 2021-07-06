import React from "react"

import Landing from "./Components/Landing/Landing"
import Nav from "./Components/Nav/Nav"
import "./App.css"
import Footer from "./Components/Footer/Footer"
import ChallengeSection from "./Components/ChallengeSection/ChallengeSection"
import { SAMPLE_PARAGRAPHS } from "./Data/SamplePara";


const totalTime=60;
const serviceUrl="http://metaphorpsum.com/paragraphs/1/9";
const DefaultState={
  selectedPara:"",
  timerStarted:false,
  timeRemain:totalTime,
  words:0,
  char:0,
  wpm:0,
  testInfo:[],
}
class App extends  React.Component{
  state= DefaultState;
  // fetchApi call back
  fetchNewParagraphFallback = () => {
    const data =
        SAMPLE_PARAGRAPHS[
            Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
        ];

    const selectedParagraphArray = data.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
        return {
            testLetter: selectedLetter,
            status: "notAttempted",
        };
    });

    this.setState({
        ...DefaultState,
        testInfo,
        selectedParagraph: data,
    });
};


  fetchApi=()=>{
    fetch(serviceUrl).then((res)=>res.text()).then((data)=>{
    


      const selectedParaArr=data.split("");
     
     const testInfo=selectedParaArr.map((selectedLetter)=>{
       return{
         testLetter:selectedLetter,
         status:"notAttempted"
       }
     })
  
     this.setState({...DefaultState,testInfo,selectedPara:data})
      });
  }

  
  componentDidMount(){
    this.fetchNewParagraphFallback();
     

   
    
  }
 
   startTimer=()=>{
     this.setState({timerStarted:true})
     const timer=setInterval(()=>{
          if(this.state.timeRemain>0){
            // CHANGE THE SPEED
            const timeSpent=totalTime-this.state.timeRemain;
            const wpm=timeSpent>0?(this.state.words/timeSpent)*totalTime:0;
            this.setState({
              timeRemain:this.state.timeRemain-1,
              wpm:parseInt(wpm)
            })
          }else{
            clearInterval(timer)
          }
     },1000)
    }

    startAgain=()=>{
     this.fetchNewParagraphFallback();
    }
  userInputHandler=(inputValue)=>{
    if(!this.state.timerStarted){
      this.startTimer();

     
    }

    const char = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = char - 1;

    if (index < 0) {
        this.setState({
            testInfo: [
                {
                    testLetter: this.state.testInfo[0].testLetter,
                    status: "notAttempted",
                },
                ...this.state.testInfo.slice(1),
            ],
            char,
            words,
        });

        return;
    }

    if (index >= this.state.selectedPara.length) {
        this.setState({ char, words });
        return;
    }

    // Make a copy of testInfo
    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedPara.length - 1))
        testInfo[index + 1].status = "notAttempted";

    // Check for the correct typed letter
    const isCorrect = inputValue[index] === testInfo[index].testLetter;

    // Update the testInfo
    testInfo[index].status = isCorrect ? "correct" : "incorrect";

    // Update the state
    this.setState({
        testInfo,
        words,
        char,
    });
};
  
  render(){
    
   
  return( <div>
   
  {/* Navbar */}
  <Nav></Nav>
  
  {/* landing page */}
  <Landing/>
  {/* challenge section */}
  <ChallengeSection  
  
     selectedPara={this.state.selectedPara}
     timerStarted={this.state.timerStarted}
     timeRemain={this.state.timeRemain}
     words={this.state.words}
     char={this.state.char}
     wpm={this.state.wpm}
     testInfo={this.state.testInfo}
     input={this.userInputHandler}
     startAgain={this.startAgain}
  />
  {/* footer */}
 <Footer/>
  </div>
  )
}
}
export default App;
