import { useState, useRef } from 'react';
import MainMenu from './UI/mainMenu';
import TestPage from './UI/testPage';
import Fight from './UI/fight';

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
            
        case "testPage":
            pageElement = <TestPage setCurrentPage={setCurrentPage} />;
            break;

        case "fight":
            pageElement = <Fight setCurrentPage={setCurrentPage} gameState={gameState.current} />;
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
