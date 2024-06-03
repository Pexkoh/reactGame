import Page from './UI/page'
import { mainMenuStyle } from "./assets/styles";
import { useState } from 'react';
import MainMenu from './UI/mainMenu';
import TestPage from './UI/testPage';
import Fight from './UI/fight';

function Game() {
    const [currentPage, setCurrentPage] = useState("mainMenu");

    let pageElement;
    switch (currentPage) {
        /*
        trivial routing implementation
        */
        case "mainMenu":
            pageElement = <MainMenu setCurrentPage={setCurrentPage} />;
            break;
            
        case "testPage":
            pageElement = <TestPage setCurrentPage={setCurrentPage} />;
            break;

        case "fight":
            pageElement = <Fight setCurrentPage={setCurrentPage} />;
            break;
        }
            

    function handleKey(e) {
        /*
        handle global game key press events here
        */

        e.stopPropagation();

        /*
        OLD -> TO REMOVE

        let key = e.key;
        console.log(key);
    
        if (key == 'ArrowLeft') {
            setPage(pageToArray(myPage2));
        } else if (key == 'ArrowRight') {
            setPage(pageToArray(myPage));
        } else if (key == 'ArrowDown') {
            setPage(pageToArray(myPage3));
        }
        */
    
    }

    return (
        /*
        <div className='Game' onKeyDown={handleKey} tabIndex={-1} >
            <Page pageArray={page} pageStyleInit={mainMenuStyle} />
        </div>
        */
        
        <div className='Game' onKeyDown={handleKey} tabIndex={-1} >
            {pageElement}
        </div>
        

    )

}

export default Game;
