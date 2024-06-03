import { useRef, useEffect } from "react";


function Page( {pageContent, handleKeyDown} ) {
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

    const pageRef = useRef(null);
    const {pageArray, pageStyles, lineStyles, charStyles} = pageContent;  // destructure pageContent input
    
    // automatically set the focus on the page element
    useEffect( () => {
        pageRef.current.focus();
    });
    
    return (
        <div 
            className="page" 
            style={pageStyles} 
            onKeyDown={handleKeyDown} 
            tabIndex={-1} 
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


export function PageLine( {lineArray, lineStyle, charStyles} ) {

    return (
        <div className="pageLine" style={lineStyle}> 
            {lineArray.map((arrayElement) => {
                return (
                    <span 
                        style={charStyles[`${arrayElement[0]}`]} 
                        className={`${arrayElement[0]}`} 
                        key={`${arrayElement[0]}`} 
                    >
                        {arrayElement[1]}
                    </span>
                );
            })}
        </div>
    )
}


export default Page;