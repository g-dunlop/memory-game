import React, {useState} from 'react';

const Buttons = ({handleButton, isActive, setNxtButton}) => {

    // const [isActive, setIsActive] = useState("")
    
    const handleClick = (evt) => {
        // handleButton(evt.target.value)
        setNxtButton(evt.target.value)
    }

    return (
        // <div className="button-container">
        //     <button onClick={handleClick} className={isActive === "red" ? "game-button light":"game-button"} value="red" id="red"></button>
        //     <button onClick={handleClick} className={isActive === "blue" ? "game-button light":"game-button"} value="blue" id="blue"></button>
        //     <button onClick={handleClick} className={isActive === "green" ? "game-button light":"game-button"} value="green" id="green"></button>
        //     <button onClick={handleClick} className={isActive === "yellow" ? "game-button light":"game-button"} value="yellow" id="yellow"></button>
        // </div>
    <div className = "button-section">
    <div className="button-container">

        <div id="red"><button onClick={handleClick} className={isActive === "red" ? "game-button lighter":"game-button"} value="red" ></button></div>
        <div id="blue"><button onClick={handleClick} className={isActive === "blue" ? "game-button lighter":"game-button"} value="blue" ></button></div>
        <div id="green"><button onClick={handleClick} className={isActive === "green" ? "game-button lighter":"game-button"} value="green" ></button></div>
        <div id="yellow"><button onClick={handleClick} className={isActive === "yellow" ? "game-button lighter":"game-button"} value="yellow" ></button></div>
    </div>
    </div>
    )
    }
export default Buttons;