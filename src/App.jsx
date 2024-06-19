import { useState, useRef } from 'react';
import MainMenu from './UI/menus/mainMenu';
import FirstFight from './UI/fights/fight';
import Introduction from './UI/events/introduction';
import GameOver from './UI/menus/gameOver';
import ToBeContinued from './UI/events/toBeContinued';
import Victory from './UI/events/victory';
import SecondFight from './UI/fights/secondFight';
import Ambush from './UI/events/ambush';


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

        case "toBeContinued":
            pageElement = <ToBeContinued setCurrentPage={setCurrentPage} />;
            break;
        
        case "victory":
            pageElement = <Victory setCurrentPage={setCurrentPage} gameState={gameState.current} />;
            break;

        case "ambush":
            pageElement = <Ambush setCurrentPage={setCurrentPage} />;
            break;    

        case "firstFight":
            pageElement = <FirstFight setCurrentPage={setCurrentPage} gameState={gameState.current} />;
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
