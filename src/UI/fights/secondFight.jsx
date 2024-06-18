import { useState, useRef } from "react"
import BaseElement from "../baseElements/baseElement";
import { pageToArray } from "../assets/pages";
import { playerShip, enemyShipPage, shipBar, fightInput } from "../assets/pages";
import { generateLineStyle, generateCharStyles } from "../assets/styles";
import SpaceShip from "../../game/ship";
import { format3Digits } from "../../utility";


function SecondFight( {setCurrentPage, gameState} ) {
    const enemyShip = useRef(SpaceShip.createBaseEnemyShip2());
    const [fightStatus, setFightStatus] = useState({
        "playerStatus": gameState.playerShip.status,
        "enemyStatus": enemyShip.current.status
    });
    console.log(fightStatus);

    // Calculate the bar of the ships
    
    // PLAYER
    const {
        maxShield: playerMaxShield, curShield: playerCurShield, maxFuel: playerMaxFuel, 
        curFuel: playerCurFuel, maxIntegrity: playerMaxIntegrity, curIntegrity: playerCurIntegrity
    } = fightStatus.playerStatus;  

    let playerShipBar = shipBar  // insert variables into the page
        .replace("maxS", format3Digits(playerMaxShield))
        .replace("curS", format3Digits(playerCurShield))
        .replace("maxF", format3Digits(playerMaxFuel))
        .replace("curF", format3Digits(playerCurFuel))
        .replace("maxH", format3Digits(playerMaxIntegrity))
        .replace("curH", format3Digits(playerCurIntegrity))
    console.log(playerShipBar);

    // ENEMY
    const {
        maxShield: enemyMaxShield, curShield: enemyCurShield, maxFuel: enemyMaxFuel, 
        curFuel: enemyCurFuel, maxIntegrity: enemyMaxIntegrity, curIntegrity: enemyCurIntegrity
    } = fightStatus.enemyStatus;  

    let enemyShipBar = shipBar  // insert variables into the page
        .replace("maxS", format3Digits(enemyMaxShield))
        .replace("curS", format3Digits(enemyCurShield))
        .replace("maxF", format3Digits(enemyMaxFuel))
        .replace("curF", format3Digits(enemyCurFuel))
        .replace("maxH", format3Digits(enemyMaxIntegrity))
        .replace("curH", format3Digits(enemyCurIntegrity))
    console.log(enemyShipBar)

    return (
        <div>
            <PlayerShip />
            <PlayerBar pageArray={pageToArray(playerShipBar)} />
            
            <EnemyShip />
            <EnemyBar pageArray={pageToArray(enemyShipBar)} />
            
            <FightInput 
                enemyShip={enemyShip.current}
                playerShip={gameState.playerShip}
                setCurrentPage={setCurrentPage} 
                setFightStatus={setFightStatus}
            />
        </div>
    )
}


function PlayerShip() {
    const pageContent = {
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
    
    return (
        <BaseElement 
        pageContent={pageContent} 
        isFocused={false}
        cssClass={"FightPlayerShip"}
        />
    )
}


function EnemyShip() {
    const pageContent = {
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
    
    return (
        <BaseElement 
        pageContent={pageContent} 
        isFocused={false}
        cssClass={"FightEnemyShip"}
        />
    )
}


function PlayerBar({ pageArray }) {
    const pageContent = {
        "pageArray": pageArray,
        "pageStyles": {
            width: "234.375px",
            
            position: "fixed",
            bottom: "46.875px",
            left: "46.875px",
        },
        "lineStyles": {},
        "charStyles": {},
    };
    
    return (
        <BaseElement 
        pageContent={pageContent} 
        isFocused={false}
        cssClass={"FightPlayerBar"}
        />
    )
}


function EnemyBar( { pageArray } ) {
    const pageContent = {
        "pageArray": pageArray,
        "pageStyles": {
            width: "234.375px",

            position: "fixed",
            bottom: "46.875px",
            right: "46.875px",
        },
        "lineStyles": {},
        "charStyles": {},
    };

    return (
        <BaseElement 
            pageContent={pageContent}  
            isFocused={false}
            cssClass={"FightEnemyBar"}
        />
    )
}


function FightInput( {setCurrentPage, setFightStatus, playerShip, enemyShip} ) {
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
                    playerShip.fireWeaponSystem(enemyShip);  // Player Action
                    enemyShip.fireWeaponSystem(playerShip);  // Enemy Action
                    enemyShip.chargeShield(playerShip);      // Enemy Action
                    setFightStatus({
                        "playerStatus": playerShip.status,
                        "enemyStatus": enemyShip.status
                    })

                    // CHECK FOR EXIT CONDITION - FINISHED FIGHT!
                    if (playerShip.isDestroyed()) {  // GAME OVER
                        setCurrentPage("gameOver");
                    } else if (enemyShip.isDestroyed()) {  // VICTORY
                        setCurrentPage("toBeContinued");
                    }

                }
                else if (pageState.menuPosition === 2) {  // Charge Shield
                    playerShip.chargeShield();  // Player Action
                    enemyShip.chargeShield();   // Enemy Action
                    enemyShip.chargeShield();   // Enemy Action
                    setFightStatus({
                        "playerStatus": playerShip.status,
                        "enemyStatus": enemyShip.status
                    })
                    // CHECK FOR EXIT CONDITION - FINISHED FIGHT!
                    if (playerShip.isDestroyed()) {  // GAME OVER
                        setCurrentPage("gameOver");
                    } else if (enemyShip.isDestroyed()) {  // VICTORY
                        setCurrentPage("toBeContinued");
                    }

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


export default SecondFight;