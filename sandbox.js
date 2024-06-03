import { useState } from "react"
import Page from "./src/cli/page";
import MainMenu from "./src/cli/mainMenu";


export function Dummy() {
    const [currentPage, setCurrentPage] = useState("mainMenu");
    const [gameState, setGameState] = useState("");

    function handleGameKeyDown(e) {
        if (e.target == "Escape") {
            // change to options
        }
    }
    let myVar = <MainMenu />;

    switch (currentPage) {
        case "mainMenu":
            return <MainMenu />

        case "gameStart":
            return <Page pageArray={page} pageStyleInit={mainMenuStyle} />

        case "newGame":
            // implement new game page
            return <Page />;

        case "shop":
            // implement and write shop page
            return <></>

        case "event":
            // implement generic event page
            return <></>
        
    }
    return (
        <div className='Game' onKeyDown={handleKey} tabIndex={-1} >
            {myVar}
        </div>
    )
}