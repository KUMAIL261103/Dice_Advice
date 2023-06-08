import { useState } from "react";
import Display from "./display";
const Remember = (props) => {
    const [data, setData] = useState([]);

  const save = () => {
    const obj = {
      id: props.id,
      quote: props.quote,
    };
    // if(obj.id===0 || (obj.id===data[data.length-1].id && data[data.length].id>1)){
    //     return;
    // }
     if (obj.id === 0 || (obj.id === data[data.length - 1]?.id && data[data.length - 1]?.id >= 1)) {
            return;}
   

        setData((prevData) => [...prevData, obj]);
        
    
  };
 
    return (
        <>
        <button onClick={save} className="remember">Remember</button>
        <Display data={data}/>
        </> 
     );
}
 
export default Remember;