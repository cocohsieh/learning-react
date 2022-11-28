import React, {useState} from "react"
import boxes from "../-boxes"


export default function App(props) {
    const [box, setBox] = useState(boxes)
    

    
    const styles = {
        backgroundColor: props.darkMode? "black" : "pink"
    }
    
    const boxDisplay = box.map(item=>(
        <div style={styles}  className="box-style" key={item.id}></div>
    ))
        
    
    

    return (
        
        <main>
            <h1>Boxes will go here</h1>
            {boxDisplay}
        </main>
    )
}


    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */


  