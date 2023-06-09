import { useState } from "react";
const Display = (props) => {
    
    const [textdisplay,settextdisplay]=useState("Show");
    const data = props.data;
    const [isClicked, setIsClicked] = useState(false);
    const [count, setCount] = useState(0);
    const displayFunction = ()=>{
            setCount((count) => count + 1);
            if(count===-1){
                
                console.log(",");
            }
            setIsClicked((prevIsClicked) => !prevIsClicked);
            if(isClicked===false){
                settextdisplay("Hide");
            }else{
                settextdisplay("Show")
            }
            
         
  }
    return (
        <>
        <button onClick={displayFunction} className="display">{textdisplay} My favourite</button>
        {isClicked &&
         <ul>
        {data.map((obj, index) => (
          <li key={index}>
            ID: {obj.id}<br/>
            Quote: {obj.quote}
            <hr/>
          </li>
        ))}
      </ul>}
        </>
      );
}
 
export default Display;