import { useState } from "react"
import Page from "../baseElements/page"
import { mainMenu } from "../assets/pages";
import { pageToArray } from "../assets/pages";
import { generateLineStyle, generateCharStyles } from "../assets/styles";
import { createInitGameState } from "../../game/gameState";


function MainMenu( {setCurrentPage, gameState} ) {
    // STATIC DEFINITIONS OF THE INITIAL STATE VARIABLES
    const initPageState = {
        "menuPosition": "startGame",
    };
    const initPageContent = {
        "pageArray": pageToArray(mainMenu),
        "pageStyles": {},
        "lineStyles": generateLineStyle("17", {"color": "limegreen"}),
        "charStyles": generateCharStyles("17_0,17_82", {"color": "white"}),
    };

    // HOOKS
    const [pageState, setPageState] = useState(initPageState);        // POSSIBLY REFACTOR INTO ONE ENTITY LATER
    const [pageContent, setPageContent] = useState(initPageContent);  
    
    // CUSTOM PAGE FUNCTIONS - e.g. EVENT HANDLERS
    function handleKeyDown(e) {
        console.log(e.key);

        // handle the navigation in the main menu
        switch(e.key) {
            case "ArrowUp":
                if (pageState.menuPosition === "endGame") {
                    setMenuState("startGame");
                }
                break;

            case "ArrowDown":
                if (pageState.menuPosition == "startGame") {
                    setMenuState("endGame");
                }
                break;

            case "Enter": 
            case " ":
                // START THE GAME
                if (pageState.menuPosition == "startGame") {
                    // initialize a new game state ref
                    // TODO: warning if overwriting an old game state here

                    gameState.current = createInitGameState(
                        "Player Name",
                        "THE INTERCEPTOR",
                        1000
                    );
                    setCurrentPage("introduction");
                    console.log(gameState.current);
                }
                else if (pageState.menuPosition == "endGame") {
                    window.close();
                }

                break;

            default:
                break;
        }
    }
    function setMenuState(menuPosition) {
        /*
        set both the pageContent and the pageState according to the menuPosition
        */
        const GREEN = {"color": "limegreen"};
        const WHITE = {"color": "white"};

        switch (menuPosition) {
            case "startGame":
                setPageContent({
                    "pageArray":  pageContent["pageArray"],
                    "pageStyles": {},
                    "lineStyles": generateLineStyle("17", GREEN),
                    "charStyles": generateCharStyles("17_0,17_82", WHITE),
                });
                setPageState({
                    "menuPosition": "startGame"
                })
                break;

            case "endGame":
                setPageContent({
                    "pageArray":  pageContent["pageArray"],
                    "pageStyles": {},
                    "lineStyles": generateLineStyle("18", GREEN),
                    "charStyles": generateCharStyles("18_0,18_82", WHITE),
                });
                setPageState({
                    "menuPosition": "endGame"
                })
                break;
            }
    }
    

    return (
        <Page pageContent={pageContent} handleKeyDown={handleKeyDown} />
    )
}


export default MainMenu;