import { useState } from "react"
import BaseElement from "./baseElement";
import { pageToArray } from "../assets/pages";
import { playerShip, enemyShip, shipBar, fightInput } from "../assets/pages";


function Fight( {setCurrentPage, gameState, enemyShip} ) {
    

    return (
        <div>
            <PlayerShip />
            <PlayerBar />
            
            <EnemyShip />
            <EnemyBar />
            
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
        "pageArray": pageToArray(enemyShip),
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


function PlayerBar() {
    const initPageState = {};
    const initPageContent = {
        "pageArray": pageToArray(shipBar),
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


function EnemyBar() {
    const initPageState = {};
    const initPageContent = {
        "pageArray": pageToArray(shipBar),
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
    const initPageState = {};
    const initPageContent = {
        "pageArray": pageToArray(fightInput),
        "pageStyles": {
            width: "468.75px",

            position: "fixed",
            bottom: "46.875px",
            left: "346.875px",
        },
        "lineStyles": {},
        "charStyles": {},
    };

    const [pageState, setPageState] = useState(initPageState);        
    const [pageContent, setPageContent] = useState(initPageContent);  
    

    function handleKeyDown(e) {
        console.log(e.key);

        switch(e.key) {
            case "Backspace":
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
            isFocused={true}
            cssClass={"FightInput"}
        />
    )
}


export default Fight;