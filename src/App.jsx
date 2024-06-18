import { useState, useRef } from 'react';
import MainMenu from './UI/mainMenu';
import TestPage from './UI/testPage';
import Fight from './UI/fight';
import Introduction from './UI/introduction';
import GameOver from './UI/gameOver';
import ToBeContinued from './UI/toBeContinued';
import Victory from './UI/victory';
import SecondFight from './UI/secondFight';
import Ambush from './UI/ambush';

function Game() {
    const [currentPage, setCurrentPage] = useState("mainMenu");
    const gameState = useRef(null);  // 

    let pageElement;
    switch (currentPage) {
        /*
        trivial routing implementation
        */
        case "mainMenu":
            pageElement = <MainMenu setCurrentPage={setCurrentPage} gameState={gameState} />;
            break;
            
        case "introduction":
            pageElement = <Introduction setCurrentPage={setCurrentPage} />;
            break;        
        
        case "gameOver":
            pageElement = <GameOver setCurrentPage={setCurrentPage} />;
            break;        

        case "testPage":
            pageElement = <TestPage setCurrentPage={setCurrentPage} />;
            break;

        case "toBeContinued":
            pageElement = <ToBeContinued setCurrentPage={setCurrentPage} />;
            break;
        
        case "victory":
            pageElement = <Victory setCurrentPage={setCurrentPage} gameState={gameState.current} />;
            break;

        case "ambush":
            pageElement = <Ambush setCurrentPage={setCurrentPage} />;
            break;    

        case "fight":
            pageElement = <Fight setCurrentPage={setCurrentPage} gameState={gameState.current} />;
            break;    

        case "secondFight":
            pageElement = <SecondFight setCurrentPage={setCurrentPage} gameState={gameState.current} />;
            break;    
    }
            

    function handleKey(e) {
        /*
        handle global game key press events here
        */

        e.stopPropagation();
    }

    return (

        <div className='Game' onKeyDown={handleKey} tabIndex={-1} >
            {pageElement}
        </div>
    )

}

export default Game;
