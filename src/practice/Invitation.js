import React, { useState } from "react";





export default function Invitation() {
    const [answer, setAnswer] = useState(false)
    const [show, setShow] = useState(false)

 
    function handleChange(event){
       
        setAnswer()
        
    }
   
    
  return (
    <>
      <input 
      type="checkbox"
      checked={answer}
    onChange={handleChange}
       />
       <label> 你願意跟我一起去看聖誕樹並尋找聖誕koya嗎？</label>
       {/* {show? <h1>讚讚</h1>:<h1>oh no</h1> } */}
       {show && <h1>讚讚</h1>}
       {!show && <h1>hate</h1>}
       </>

  );
}
