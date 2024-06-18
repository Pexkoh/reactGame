import { useState } from "react"
import Page from "./page"
import { pageToArray } from "../assets/pages";
import { victory } from "../assets/pages";
import { generateLineStyle, generateCharStyles } from "../assets/styles";
import { WeaponSystem } from "../game/shipModules";


function Victory( {setCurrentPage, gameState} ) {
    const initPageState = {};
    const initPageContent = {
        "pageArray": pageToArray(victory),
        "pageStyles": {},
        "lineStyles": generateLineStyle("25", {"color": "limegreen"}),
        "charStyles": generateCharStyles("25_0,25_82", {"color": "white"}),
    };

    const [pageState, setPageState] = useState(initPageState);        
    const [pageContent, setPageContent] = useState(initPageContent);

    function handleKeyDown(e) {
        console.log(e.key);
        
        // spot to handle any page input

        switch(e.key) {
            case " ":
            case "Enter":
                console.log(gameState)
                // upgrade the weaponSystem
                gameState.playerShip.weaponSystem = new WeaponSystem(
                    "WeaponSystem Mark II",
                    50
                );
                setCurrentPage("ambush");
                break;
        }
    }
    

    return (
        <Page pageContent={pageContent} handleKeyDown={handleKeyDown} />
    )
}

export default Victory;