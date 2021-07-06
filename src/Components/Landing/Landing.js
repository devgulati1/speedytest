import flash from "./../../assets/flash.png"
import Typewriter from 'typewriter-effect';
import "./Landing.css";
const Landing=()=>{
    return<div  className="landing-container">
        <div  data-aos="fade-right" className="landing-left">
        
            <h1 className="landing-header">Can You Type..</h1>
            <div className="type-writer-container">

           
<Typewriter
options={{
  strings: ['FAST ?', 'CORRECT ?','QUICK ?'],
  autoStart: true,
  loop: true,
}}
/>
</div>
           
        </div>
        

        <div  data-aos="fade-left" className="landing-right">
            <img src={flash}  height="500px" width="500px" alt="img-flash"></img>
        </div>


    </div>
}
export default Landing;