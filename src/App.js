import React, { useState,useContext } from "react";
import EndScreen from "./EndScreen";
import MainMenu from "./MainMenu";
import Quiz from "./Quiz";
import QuizContext from "./Context";
import './App.css'


const App=()=>{
    const[gameState,setGameState]=useState('menu')
    const[score,setScore]=useState(0)

    return(
        <div className="App">
        <h1>Quiz App</h1>
        <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
        {gameState==='menu' && <MainMenu />}
        {gameState==='quiz' && <Quiz />}
        {gameState==='endScreen' && <EndScreen />}

        </QuizContext.Provider>
        
        </div>
    )
}

export default App