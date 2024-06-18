import { useState } from "react"
import Page from "./page"
import { pageToArray } from "../assets/pages";


function TemplatePage( {setCurrentPage} ) {
    const initPageState = {};
    const initPageContent = {
        "pageArray": pageToArray("ENTER PAGE VAR"),
        "pageStyles": {},
        "lineStyles": {},
        "charStyles": {},
    };

    const [pageState, setPageState] = useState(initPageState);        
    const [pageContent, setPageContent] = useState(initPageContent);  
    

    function handleKeyDown(e) {
        // spot to handle any page input

        switch(e.key) {
            case "ArrowUp":
                break;

            default:
                break;
        }
    }
    function state2Sytles() {
        // CALCULATE THE PAGE CSS BASED ON THE PAGE-STATE

        return {};
    }
    

    return (
        <Page pageContent={pageContent} /*handleKeyDown={handleKeyDown}*/ />
    )
}

export default TemplatePage;