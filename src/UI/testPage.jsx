import { useState } from "react"
import Page from "./page"
import { pageToArray } from "../assets/pages";
import { testPage } from "../assets/pages";


function TestPage( {setCurrentPage} ) {
    const initPageState = {};
    const initPageContent = {
        "pageArray": pageToArray(testPage),
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
            case "Backspace":
                setCurrentPage("mainMenu");
                break;
        }
    }
    

    return (
        <Page pageContent={pageContent} handleKeyDown={handleKeyDown} />
    )
}

export default TestPage;