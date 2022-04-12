import React, {useState} from 'react';
import Buttons from '../components/Buttons';

const GameContainer = () => {

    const [buttonsToLight, setButtonsToLight] = useState([])
    const [isActive, setIsActive] = useState("")
    const [feedback, setFeedback] = useState("")
    const [gameIndex, setGameIndex] = useState(0)
    const [round, setRound] = useState(1)
    //have state gor gameActive ? can press keys : nothing happens when you click buttons

    const buttons = ["red", "blue", "green", "yellow"]
    let ms = 1000

    const winningFeedback = ["Great!!", "Awesome!", "Nailed it!", "You got it!"]
    const losingFeedback = ["Unlucky!", "Fail!", "Not this time!"]

    const generateGame = () => {
        console.log("Let's Play!")
        
        let gameArray = [...buttonsToLight];
        let index;
        for (let i=round; i<round+1; i++){
            index = (Math.round(Math.random()*3));
            // console.log(index)
            gameArray.push(buttons[index])
        } 

        for(let i=0; i<gameArray.length; i++){
            setTimeout(() => {setIsActive(gameArray[i])}, ms)
            ms+=1000  
        }  setButtonsToLight(gameArray)
        // setTimeout(() => {setIsActive(buttons[index])}, ms+1000)
        setTimeout(() => {setIsActive("")}, ms)
    }

    const setNxtButton = (colour) => {
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
            }
           
        } else {
            let index = Math.round(Math.random()*losingFeedback.length-1)
            setFeedback(losingFeedback[index])
            setButtonsToLight([])
            setIsActive("")
            setGameIndex(0)
            setRound(1)

        }
        
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
            <h2>Memory Game</h2>
            <div className="game-info">
                <h3>Round: {round}</h3>
                {/* <Buttons handleButton={handleButton} isActive={isActive} /> */}
                
            </div>
            <Buttons setNxtButton={setNxtButton} isActive={isActive} />
            <h2 id="feedback">{feedback}</h2>

            {round === 1 ? 
                <button id="play-button" onClick={generateGame} value="play"> Play Game</button> : 
                <button id="play-button" onClick={generateGame} value="play"> Play Again</button>}
                
            
        </div>
    )

}

export default GameContainer;