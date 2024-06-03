/*
IDEA BEHIND THE CSS STYLING OF THE GAME PAGES:

THERE ARE 3 ELEMENTS THAT GET STYLES ATTACHED TO THEM:
1. The whole page
2. A single line
3. A single character

CSS REACT STATE:
- pageStyles: { } <- contains the style object directly
- lineStyles: { locator <'int'>: style <{}> }    <- locator functions as key, value contains style object
- charStyles: { locator <'int_int'>: style {} }  <- locator functions as key, value contains style object

FUNCTIONS TO MAKE CSS STATE CREATION EASY:
- create multiple chars by locator: charsByLocator( 'int-int_int-int', style: {} )


*/


export let mainMenuStyle = {
    "color": "red",
};


export let mainMenuStyles = {
    "color": "limegreen",
    "background-color": "#100f0f",
};


export function generateCharStyles(locators, style) {
    /*
    the locators string is used to declare the positions of the characters to apply the <style> to
    the function converts the locators string into a valid object of charStyles 

    EXAMPLE:
    generateCharStyles("5_7-12", {"color": "black"});
    generateCharStyles("5_7,1_12,1_1", {"color": "black"});

    charStyles: { locator <'int_int'>: style {} }  <- locator functions as key, value contains style object
    */

    // check for locators string for valid pattern usage
    const validLocator1 = /^\d+-{0,1}\d*_\d+-{0,1}\d*$/;  // the regex matches the whole line
    const validLocator2 = /^(\d+_\d+)(,\d+_\d+)*$/;      // -||-
    
    const charStyles = {};  // array to be generated

    if (!(locators.match(validLocator1) || (locators.match(validLocator2)))) {
        throw new SyntaxError(`locators: ${locators} doesn't match the required locators pattern`);
    }
    if (locators.match(validLocator1)) {
        // extract the row and column parts of the locator string
        const [rows, cols] = locators.split("_");
        
        const row_start = +rows.split("-")[0];  // convert the string to numbers using the + operator
        const row_stop  = +rows.split("-")[1] || rows.split("-")[0];  // assign stop to start if stop doesn't exist

        const col_start = +cols.split("-")[0];
        const col_stop  = +cols.split("-")[1] || cols.split("-")[0];  // assign stop to start if stop doesn't exist

        for (let m = row_start; m <= row_stop; m++) {
            for (let n = col_start; n <= col_stop; n++) {
                charStyles[`_${m}_${n}`] = style;
            }
        }
        
    } else if (locators.match(validLocator2)) {
        // extract the row and column parts of the locator string
        const seperateLocators = locators.split(",");
        seperateLocators.map( (locator) => {
            charStyles["_" + locator] = style;
        })

    }
    return charStyles;
    // console.log("charStyles =", charStyles);
}



export function generateLineStyle(locators, style) {
    /*
    the locators string is used to declare the positions of the characters to apply the <style> to
    the function converts the locators string into a valid object of lineStyles 

    EXAMPLE:
    generateLineStyle("5-12", {"color": "black"});
    generateLineStyle("5,1,2", {"color": "black"});

    lineStyles: { locator <'int'>: style <{}> }    <- locator functions as key, value contains style object
    */

    // check for locators string for valid pattern usage
    const validLocator1 = /^\d+(-\d+){0,1}$/;  // the regex matches the whole line
    const validLocator2 = /^\d+(,\d+)*$/;    // -||-
    
    const lineStyles = {};  // array to be generated

    if (!(locators.match(validLocator1) || (locators.match(validLocator2)))) {
        throw new SyntaxError(`locators: ${locators} doesn't match the required locators pattern`);
    }
    if (locators.match(validLocator1)) {
        // extract the row and column parts of the locator string
        const line_start = +locators.split("-")[0];  // convert the string to numbers using the + operator
        const line_stop  = +locators.split("-")[1] || locators.split("-")[0];  // assign stop to start if stop doesn't exist

        for (let i = line_start; i <= line_stop; i++) {
            lineStyles[`${i}`] = style;
        }
        
    } else if (locators.match(validLocator2)) {
        // extract the row and column parts of the locator string
        const seperateLocators = locators.split(",");
        seperateLocators.map( (locator) => {
            lineStyles[locator] = style;
        })

    }
    return lineStyles;
    // console.log("lineStyles =", lineStyles);
}


/*
generateCharStyles("5_7-12", {"color": "black"});
generateCharStyles("5_7,1_12,1_1", {"color": "black"});

generateLineStyle("5-12", {"color": "black"});
generateLineStyle("5,1,2", {"color": "black"});
*/