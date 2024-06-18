import { useState } from "react"
import Page from "../baseElements/page"
import { pageToArray } from "../assets/pages";
import { ambush } from "../assets/pages";
import { generateLineStyle, generateCharStyles } from "../assets/styles";


function Ambush( {setCurrentPage} ) {
    const initPageState = {};
    const initPageContent = {
        "pageArray": pageToArray(ambush),
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
                setCurrentPage("secondFight");
                break;
        }
    }
    

    return (
        <Page pageContent={pageContent} handleKeyDown={handleKeyDown} />
    )
}

export default Ambush;