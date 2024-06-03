import { useState } from "react"
import BaseElement from "./baseElement";
import { pageToArray } from "../assets/pages";
import { playerShip, enemyShip, shipBar, fightInput } from "../assets/pages";


function Fight( {setCurrentPage} ) {
    
    return (
        <div>
            <PlayerShip setCurrentPage={setCurrentPage} cssClass={"TopLeft"} />
            <PlayerBar setCurrentPage={setCurrentPage} cssClass={"BottomLeft"} />
            
            <EnemyShip setCurrentPage={setCurrentPage} cssClass={"TopRight"} />
            <EnemyBar setCurrentPage={setCurrentPage} cssClass={"BottomRight"} />
            
            <FightInput setCurrentPage={setCurrentPage} cssClass={"Middle"} />
        </div>
    )
}


function EnemyBar( {setCurrentPage, cssClass} ) {
    const initPageState = {};
    const initPageContent = {
        "pageArray": pageToArray(shipBar),
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


function PlayerBar( {setCurrentPage, cssClass} ) {
    const initPageState = {};
    const initPageContent = {
        "pageArray": pageToArray(shipBar),
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




function FightInput( {setCurrentPage, cssClass} ) {
    const initPageState = {};
    const initPageContent = {
        "pageArray": pageToArray(fightInput),
        "pageStyles": {},
        "lineStyles": {},
        "charStyles": {},
    };

    const [pageState, setPageState] = useState(initPageState);        
    const [pageContent, setPageContent] = useState(initPageContent);  
    

    function handleKeyDown(e) {
        console.log(e.key);

        switch(e.key) {
            case "BackSpace":
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
            cssClass={cssClass}
        />
    )
}


export default Fight;