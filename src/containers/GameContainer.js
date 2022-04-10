import React, {useState} from 'react';
import Buttons from '../components/Buttons';

const GameContainer = () => {

    const [buttonsToLight, setButtonsToLight] = useState([])
    const [isActive, setIsActive] = useState("")
    const [nextButton, setNextButton] = useState("")
    const [gameIndex, setGameIndex] = useState(0)
    const [round, setRound] = useState(1)

    const buttons = ["red", "blue", "green", "yellow"]
    let ms = 1000

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
            console.log("Match")
            if (gameIndex+1 !== buttonsToLight.length){
                setGameIndex(gameIndex+1)
               
            } else{
                console.log("You win this time")
                setRound(round+1)
                setGameIndex(0)
                setIsActive("")
            }
           
        } else {
            console.log("fail")
            setButtonsToLight([])
            setIsActive("")
            setGameIndex("")
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
            <h2>Game Container</h2>
            <h3>Round: {round}</h3>
            {/* <Buttons handleButton={handleButton} isActive={isActive} /> */}
            <Buttons setNxtButton={setNxtButton} isActive={isActive} />

            <button onClick={generateGame} value="play"> Play Game</button>
        </div>
    )

}

export default GameContainer;