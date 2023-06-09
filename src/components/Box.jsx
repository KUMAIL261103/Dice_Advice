

import icon from "./icon.svg"
import design from "./design.svg"
import { useState } from "react";
import Remember from "./Remember";
const Box = () => {
    const [number,setnumber]= useState(1);
    
    const [quote, setQuote] = useState("Roll The Die in the game of destiny and unveil the divine guidance ");
     const TextToSpeech = () => {
    const synth = window.speechSynthesis;

    const speak = () => {
      if (synth.speaking) {
        console.error('SpeechSynthesisUtterance is already speaking');
        return;
      }

      if (quote !== '') {
        const utterance = new SpeechSynthesisUtterance(quote);
        synth.speak(utterance);
      }
    };

    return speak;
  };

    const [isExpanded, setIsExpanded] = useState(false);
    const fetchData = ()=>{
        setnumber(number+1);
        setIsExpanded(true);
        fetch(`https://api.adviceslip.com/advice/${number}`)
        .then((response) => response.json())
        .then((data) => {
           
            setQuote(data.slip.advice);
            
        })
        .catch((error) => {
            console.log("Error fetching quote:", error);
        });
         setTimeout(() => {
         setIsExpanded(false);
         
    },300 );
    }
    
    const imgStyle = {
    transform: isExpanded ? "scale(1.5) rotate(360deg)" : "scale(1)",
    transition: "transform 1s ease",
  };
    
    return ( 
        <div className="container" id="main_box"  style={{ overflow: "auto" }}>
            
                <p className="heading">Advice #{number-1}</p>
           
            
                <p className="text">{quote}</p>
           
            <img src={design} alt="------" className="designDash"/>

            <img src={icon} alt="$" className="button" style={imgStyle} onClick={fetchData}/>
            <button onClick={TextToSpeech({quote})} className="speak">Speak</button>
            <Remember id={number-1} quote={quote}/>
            
            
        </div>
     );
}
 
export default Box;