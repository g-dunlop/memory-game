import React, {useState} from 'react';
import Buttons from '../components/Buttons';
import ButtonsSix from '../components/ButtonsSix';


const GameContainer = () => {

    const [buttonsToLight, setButtonsToLight] = useState([])
    const [isActive, setIsActive] = useState("")
    const [feedback, setFeedback] = useState("")
    const [gameIndex, setGameIndex] = useState(0)
    const [round, setRound] = useState(1)
    const [speed, setSpeed] = useState("fast")
    const [buttonsActive, setButtonsActive] = useState(false)
    const [buttonsNumber, setButtonsNumber] = useState('4')
    //have state gor gameActive ? can press keys : nothing happens when you click buttons

    let buttons;
    if (buttonsNumber === '4'){
     buttons = ["red", "blue", "green", "yellow"]
    } else {
     buttons = ["red", "blue", "green", "yellow", "orange", "pink"]
    }


    let ms = 1000

    const winningFeedback = ["Great!!", "Awesome!", "Nailed it!", "You got it!"]
    const losingFeedback = ["Unlucky!", "Fail!", "Not this time!"]

    const generateGame = () => {
        console.log("Let's Play!")
        setFeedback("")
        let gameArray = [...buttonsToLight];
        let index;
        for (let i=round; i<round+1; i++){
            index = (Math.round(Math.random()*buttons.length-1));
            // console.log(index)
            gameArray.push(buttons[index])
        } 

        if (speed === "normal"){
            for(let i=0; i<gameArray.length; i++){
                setTimeout(() => {setIsActive("")},ms+450)
                setTimeout(() => {setIsActive(gameArray[i])}, ms)
                ms+=1000  
            }  setButtonsToLight(gameArray)
            setTimeout(() => {setIsActive("")}, ms)

            } else if (speed === "fast"){
                for(let i=0; i<gameArray.length; i++){
                    setTimeout(() => {setIsActive("")},ms+450)
                    setTimeout(() => {setIsActive(gameArray[i])}, ms)
                    ms+=600 
                    
                }  setButtonsToLight(gameArray)
                setTimeout(() => {setIsActive("")}, ms)
            }
            setButtonsActive(true)
}

    const setNxtButton = (colour) => {
        if (buttonsActive === false){
            return
        } else {
        setIsActive(colour)
        if (colour === buttonsToLight[gameIndex]){
            
            if (gameIndex+1 !== buttonsToLight.length){
                setGameIndex(gameIndex+1)
               
            } else{
                console.log("You win this time")
                setRound(round+1)
                setGameIndex(0)
                setIsActive("")
                let index = Math.round(Math.random()*winningFeedback.length-1)
                setFeedback(winningFeedback[index])
                setButtonsActive(false)
            }
           
        } else {
            let index = Math.round(Math.random()*losingFeedback.length-1)
            setFeedback(losingFeedback[index])
            setButtonsToLight([])
            setIsActive("")
            setGameIndex(0)
            setRound(1)
            setButtonsActive(false)
        }
    }
    }

    const handleSpeedButtonClick = (evt) => {
        setSpeed(evt.target.value)
    }

    const handleButtonNumberClick = (evt) => {
        setButtonsNumber(evt.target.value)
    }



    // const handleButton = (colour) => {

    //     for (let i=0; i < buttonsToLight.length; i++){
    //         if (colour === buttonsToLight[i]){
    //            console.log("Match!")
    //         }
    //         else{
    //             console.log("You fucked it!")
    //         }
    //     }

    // }

    return(
        <div className="game-container">
            <div className="left">
                <h2>Memory Game</h2>
                <div className="game-info">
                    <h3>Round: {round}</h3>
                    {/* <Buttons handleButton={handleButton} isActive={isActive} /> */}
                </div>
                
                    <div className="speed-section">
                        <h3>Speed: {speed}</h3>
                        <button onClick={handleSpeedButtonClick} value="normal">Normal</button>
                        <button onClick={handleSpeedButtonClick} value="fast">Fast</button>
                    </div>

                    <div className="button-number-section">
                        <h3>No. of Buttons: {buttonsNumber}</h3>
                        <button onClick={handleButtonNumberClick} value="4">4</button>
                        <button onClick={handleButtonNumberClick} value="6">6</button>
                    </div>
                
                {round === 1 ? 
                    <button id="play-button" onClick={generateGame} value="play"> Play </button> : 
                    <button id="play-button" onClick={generateGame} value="play"> Play Round {round}</button>}
                <h2 id="feedback">{feedback}</h2>  
            </div>
            <div className="right">
                {buttonsNumber === '4' ? <Buttons setNxtButton={setNxtButton} isActive={isActive} /> : <ButtonsSix setNxtButton={setNxtButton} isActive={isActive} /> }
            </div>
            
            

           
            
        </div>
    )

}

export default GameContainer;