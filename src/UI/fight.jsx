import { useState } from "react"
import BaseElement from "./baseElement";
import { pageToArray } from "../assets/pages";
import { playerShip, enemyShipPage, shipBar, fightInput } from "../assets/pages";
import { generateLineStyle, generateCharStyles } from "../assets/styles";
import SpaceShip from "../game/ship";
import { format3Digits } from "../utility";


function Fight( {setCurrentPage, gameState} ) {
    const enemyShipInit = SpaceShip.createBaseEnemyShip();
    const [enemyShip, setEnemyShip] = useState(enemyShipInit);

    console.log("Player Ship:", gameState.playerShip);
    console.log(gameState.playerShip.status);
    console.log("Enemy Ship:", enemyShip);
    console.log(enemyShip.status);

    return (
        <div>
            <PlayerShip />
            <PlayerBar shipStatus={gameState.playerShip.status} />
            
            <EnemyShip />
            <EnemyBar shipStatus={enemyShip.status} />
            
            <FightInput setCurrentPage={setCurrentPage} />
        </div>
    )
}


function PlayerShip() {
    const initPageState = {};
    const initPageContent = {
        "pageArray": pageToArray(playerShip),
        "pageStyles": {
            width: "468.75px",
            height: "281.25px",
            
            position: "fixed",
            top: "46.875px",
            left: "46.875px",
        },
        "lineStyles": {},
        "charStyles": {},
    };
    
    const [pageState, setPageState] = useState(initPageState);        
    const [pageContent, setPageContent] = useState(initPageContent);  
    
    return (
        <BaseElement 
        pageContent={pageContent} 
        isFocused={false}
        cssClass={"FightPlayerShip"}
        />
    )
}


function EnemyShip() {
    const initPageState = {};
    const initPageContent = {
        "pageArray": pageToArray(enemyShipPage),
        "pageStyles": {
            width: "468.75px",
            height: "281.25px",
            
            position: "fixed",
            top: "46.875px",
            right: "46.875px",
        },
        "lineStyles": {},
        "charStyles": {},
    };
    
    const [pageState, setPageState] = useState(initPageState);        
    const [pageContent, setPageContent] = useState(initPageContent);  
    
    return (
        <BaseElement 
        pageContent={pageContent} 
        isFocused={false}
        cssClass={"FightEnemyShip"}
        />
    )
}


function PlayerBar({ shipStatus }) {
    console.log("in player", shipBar);
    // unpack ship status values
    const {maxShield, curShield, maxFuel, curFuel, maxIntegrity, curIntegrity} = shipStatus;  
    let PlayerShipBar = shipBar  // insert variables into the page
        .replace("maxS", format3Digits(maxShield))
        .replace("curS", format3Digits(curShield))
        .replace("maxF", format3Digits(maxFuel))
        .replace("curF", format3Digits(curFuel))
        .replace("maxH", format3Digits(maxIntegrity))
        .replace("curH", format3Digits(curIntegrity))

    console.log("in player", PlayerShipBar);
    const initPageState = {};
    const initPageContent = {
        "pageArray": pageToArray(PlayerShipBar),
        "pageStyles": {
            width: "234.375px",
            
            position: "fixed",
            bottom: "46.875px",
            left: "46.875px",
        },
        "lineStyles": {},
        "charStyles": {},
    };
    
    const [pageState, setPageState] = useState(initPageState);        
    const [pageContent, setPageContent] = useState(initPageContent);  
    
    return (
        <BaseElement 
        pageContent={pageContent} 
        isFocused={false}
        cssClass={"FightPlayerBar"}
        />
    )
}


function EnemyBar( { shipStatus } ) {
    console.log("in enemy", shipBar);
    // unpack ship status values
    const {maxShield, curShield, maxFuel, curFuel, maxIntegrity, curIntegrity} = shipStatus;  
    
    let EnemyShipBar = shipBar  // insert variables into the page
        .replace("maxS", format3Digits(maxShield))
        .replace("curS", format3Digits(curShield))
        .replace("maxF", format3Digits(maxFuel))
        .replace("curF", format3Digits(curFuel))
        .replace("maxH", format3Digits(maxIntegrity))
        .replace("curH", format3Digits(curIntegrity))

    console.log("in enemy", EnemyShipBar);
    const initPageState = {};
    const initPageContent = {
        "pageArray": pageToArray(EnemyShipBar),
        "pageStyles": {
            width: "234.375px",

            position: "fixed",
            bottom: "46.875px",
            right: "46.875px",
        },
        "lineStyles": {},
        "charStyles": {},
    };

    const [pageState, setPageState] = useState(initPageState);        
    const [pageContent, setPageContent] = useState(initPageContent);  

    return (
        <BaseElement 
            pageContent={pageContent}  
            isFocused={false}
            cssClass={"FightEnemyBar"}
        />
    )
}


function FightInput( {setCurrentPage} ) {
    // STATIC DEFINITIONS OF THE INITIAL STATE VARIABLES
    const initPageState = {
        "menuPosition": 1,  // position 1 == top most position in the menu -> "Attack"
    };
    const initPageContent = {
        "pageArray": pageToArray(fightInput),
        "pageStyles": {
            width: "468.75px",

            position: "fixed",
            bottom: "46.875px",
            left: "346.875px",
        },
        "lineStyles": generateLineStyle("3", {"color": "limegreen"}),
        "charStyles": generateCharStyles("3_0,3_49", {"color": "white"}),
    };

    // HOOKS
    const [pageState, setPageState] = useState(initPageState);        
    const [pageContent, setPageContent] = useState(initPageContent);  
    

    // CUSTOM PAGE FUNCTIONS - e.g. EVENT HANDLERS
    function handleKeyDown(e) {
        console.log(e.key);

        // handle the navigation in the main menu
        switch(e.key) {
            case "ArrowUp":
                if (pageState.menuPosition === 2 || pageState.menuPosition === 3) {
                    setMenuState(pageState.menuPosition - 1);
                }
                break;

            case "ArrowDown":
                if (pageState.menuPosition === 1 || pageState.menuPosition === 2) {
                    setMenuState(pageState.menuPosition + 1);
                }
                break;

            case "Enter": 
            case " ":
                // EXECUTE THE FIGHT ACTION
                if (pageState.menuPosition === 1) {  // ATTACK

                }
                else if (pageState.menuPosition === 2) {  // Charge Shield
                    
                }
                else if (pageState.menuPosition === 3) {  // Charge Hyperdrive
                
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
            case 1:
                setPageContent({
                    "pageArray":  pageContent["pageArray"],
                    "pageStyles": pageContent["pageStyles"],
                    "lineStyles": generateLineStyle("3", GREEN),
                    "charStyles": generateCharStyles("3_0,3_49", WHITE),
                });
                setPageState({
                    "menuPosition": 1,
                })
                break;

            case 2:
                setPageContent({
                    "pageArray":  pageContent["pageArray"],
                    "pageStyles": pageContent["pageStyles"],
                    "lineStyles": generateLineStyle("4", GREEN),
                    "charStyles": generateCharStyles("4_0,4_49", WHITE),
                });
                setPageState({
                    "menuPosition": 2,
                })
                break;

            case 3:
                setPageContent({
                    "pageArray":  pageContent["pageArray"],
                    "pageStyles": pageContent["pageStyles"],
                    "lineStyles": generateLineStyle("5", GREEN),
                    "charStyles": generateCharStyles("5_0,5_49", WHITE),
                });
                setPageState({
                    "menuPosition": 3,
                })
                break;
            }
    }

    return (
        <BaseElement 
            pageContent={pageContent} 
            handleKeyDown={handleKeyDown} 
            isFocused={true}
            cssClass={"FightInput"}
        />
    )
}


export default Fight;