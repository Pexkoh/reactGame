import { useRef, useEffect } from "react";
import { PageLine } from "./page";


function BaseElement( {pageContent, handleKeyDown, isFocused, cssClass} ) {
    /*
    pageContent Object:
    {
        "pageArray": pageArray, <arr>
        "pageStyles": pageStyle, <obj>
        "lineStyles": lineStyle, <obj> 
        "charStyles": charStyle, <obj>
    }
    see styles.js
    */
    const pageRef = useRef(null);  // used for DOM-API focus
    const {pageArray, pageStyles, lineStyles, charStyles} = pageContent;  // destructure pageContent input
    
    // conditioned on isFocused: set the focus on the BaseElement
    useEffect( () => {
        if (isFocused) {
            pageRef.current.focus();
        }
    });
    

    return (
        <div 
            className={cssClass}
            style={pageStyles}
            onKeyDown={isFocused ? handleKeyDown : () => {}}  // only focused elements can handle key input
            tabIndex={isFocused ? -1 : 0}  // only focused elements depatch OnKeyDown events
            ref={pageRef}
        >{   
            pageArray.map((lineArray) => {
                // extract the line number from the first element in the coordinate array
                let lineNumber = lineArray[0][0].split("_")[1];
                // extract the style object for the current pageLine out of the lineStyles state variable
                // let lineStyle = lineStyles.hasOwnProperty(String(lineNumber)) ? lineStyles[String(lineNumber)] : {};
                return (
                    <PageLine 
                        lineStyle={lineStyles[String(lineNumber)]} 
                        charStyles={charStyles}
                        lineArray={lineArray}
                        key={lineNumber} 
                    />
                );
            })
        }
        </div>
    );
}


export default BaseElement;