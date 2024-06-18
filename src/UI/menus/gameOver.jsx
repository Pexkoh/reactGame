import { useState } from "react"
import Page from "../baseElements/page"
import { pageToArray } from "../assets/pages";
import { gameOver } from "../assets/pages";


function GameOver( {setCurrentPage} ) {
    const initPageState = {};
    const initPageContent = {
        "pageArray": pageToArray(gameOver),
        "pageStyles": {},
        "lineStyles": {},
        "charStyles": {},
    };

    const [pageState, setPageState] = useState(initPageState);        
    const [pageContent, setPageContent] = useState(initPageContent);

    function handleKeyDown(e) {
        console.log(e.key);
        
        // spot to handle any page input

        switch(e.key) {
            case " ":
            case "Enter":
                setCurrentPage("mainMenu");
                break;
        }
    }
    

    return (
        <Page pageContent={pageContent} handleKeyDown={handleKeyDown} />
    )
}

export default GameOver;