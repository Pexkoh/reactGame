import { useState } from "react"
import BaseElement from "./baseElement";
import { pageToArray } from "../assets/pages";
import { playerShip } from "../assets/pages";


function Fight( {setCurrentPage} ) {
    
    return (
        <div>
            <PlayerShip setCurrentPage={setCurrentPage} cssClass={"Left"} />
            <PlayerShip setCurrentPage={setCurrentPage} cssClass={"Right"} />
        </div>
    )
}


function PlayerShip( {setCurrentPage, cssClass} ) {
    const initPageState = {};
    const initPageContent = {
        "pageArray": pageToArray(playerShip),
        "pageStyles": {},
        "lineStyles": {},
        "charStyles": {},
    };

    const [pageState, setPageState] = useState(initPageState);        
    const [pageContent, setPageContent] = useState(initPageContent);  
    

    function handleKeyDown(e) {
        switch(e.target) {
            default:
                setCurrentPage("mainMenu")
                break;
        }
    }
    function state2Sytles() {
        // CALCULATE THE PAGE CSS BASED ON THE PAGE-STATE

        return {};
    }
    

    return (
        <BaseElement 
            pageContent={pageContent} 
            handleKeyDown={handleKeyDown} 
            isFocused={false}
            cssClass={cssClass}
        />
    )
}


export default Fight;