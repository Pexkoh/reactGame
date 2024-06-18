import { useState } from "react"
import Page from "./page"
import { pageToArray } from "../assets/pages";
import { introduction } from "../assets/pages";
import { generateLineStyle, generateCharStyles } from "../assets/styles";


function Introduction( {setCurrentPage} ) {
    const initPageState = {};
    const initPageContent = {
        "pageArray": pageToArray(introduction),
        "pageStyles": {},
        "lineStyles": generateLineStyle("23", {"color": "limegreen"}),
        "charStyles": generateCharStyles("23_0,23_82", {"color": "white"}),
    };

    const [pageState, setPageState] = useState(initPageState);        
    const [pageContent, setPageContent] = useState(initPageContent);

    function handleKeyDown(e) {
        console.log(e.key);
        
        // spot to handle any page input

        switch(e.key) {
            case " ":
            case "Enter":
                setCurrentPage("fight");
                break;
        }
    }
    

    return (
        <Page pageContent={pageContent} handleKeyDown={handleKeyDown} />
    )
}

export default Introduction;