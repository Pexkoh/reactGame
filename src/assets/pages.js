"use strict";
// WANT TO IMPLEMENT AS TXT FILES LATER
// USING JS STRINGS AS A TEMPORARY SOLUTION

export let mainMenu = (
`###################################################################################
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#      ███████╗██████╗  █████╗  ██████╗███████╗     █████╗ ██████╗ ██╗   ██╗      #
#      ██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝    ██╔══██╗██╔══██╗██║   ██║      #
#      ███████╗██████╔╝███████║██║     █████╗      ███████║██║  ██║██║   ██║      #
#      ╚════██║██╔═══╝ ██╔══██║██║     ██╔══╝      ██╔══██║██║  ██║╚██╗ ██╔╝      #
#      ███████║██║     ██║  ██║╚██████╗███████╗    ██║  ██║██████╔╝ ╚████╔╝       #
#      ╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝╚══════╝    ╚═╝  ╚═╝╚═════╝   ╚═══╝        #
#                                                                                 #
#                                                                                 #
#                                 > start game <                                  #
#                                 > end game   <                                  #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
###################################################################################`
)


export let testPage = (
`###################################################################################
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                      ████████╗███████╗███████╗████████╗                         #
#                      ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝                         #
#                         ██║   █████╗  ███████╗   ██║                            #
#                         ██║   ██╔══╝  ╚════██║   ██║                            #
#                         ██║   ███████╗███████║   ██║                            #
#                         ╚═╝   ╚══════╝╚══════╝   ╚═╝                            #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
###################################################################################`
);

export let myPage2 = (
`###################################################################################
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                         ___ _ __   __ _  ___ ___                                #
#                        / __| '_ \\ / _\` |/ __/ _ \\                               #
#                        \\__ \\ |_) | (_| | (_|  __/                               #
#                        |___/ .__/ \\__,_|\\___\\___|                               #
#                            |_|                                                  #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
#                                                                                 #
###################################################################################`
);

export let playerShip = (
`##################################################
#             > THE INTERCEPTOR <                #
#                                                #
#                                                #
#      ##############                            #        
#        #     #      #                          #        
#          #     #      ##                       #        
#           #      #       ##                    #        
#            #       #        ########           #        
#           ##--  #    ######+         #         #        
#       ....##+#++#+++      ++++    +++- #       #        
#      ..   ##                  #  #    # #      #        
#       ....##+#++#+++      ++++    +++- #       #        
#           ##--  #    ######+         #         #        
#            #       #        ########           #        
#           #      #       ##                    #        
#          #     #      ##                       #        
#        #     #      #                          #        
#      ##############                            #        
#                                                #
#                                                #
##################################################`
);

export let shipBar = (
`#########################
#                       #
#                       #
#   Shield:  xx/zz      #
#   Fuel:    xx/zz      #
#   Hull:    xx/zz      #
#                       #
#                       #
#########################`
);


export let myElem = `#`;


export let enemyShip = (
`##################################################
#                > THE BUTCHER <                 #
#                                                #
#                                                #
#      ##############                            #        
#        #     #      #                          #        
#          #     #      ##                       #        
#           #      #       ##                    #        
#            #       #        ########           #        
#           ##--  #    ######+         #         #        
#       ....##+#++#+++      ++++    +++- #       #        
#      ..   ##                  #  #    # #      #        
#       ....##+#++#+++      ++++    +++- #       #        
#           ##--  #    ######+         #         #        
#            #       #        ########           #        
#           #      #       ##                    #        
#          #     #      ##                       #        
#        #     #      #                          #        
#      ##############                            #        
#                                                #
#                                                #
##################################################`
)


export let fightInput = (
`##################################################
#                                                #
#                                                #
#              > Attack            <             #
#              > Charge Shield     <             #
#              > Charge Hyperdrive <             #
#                                                #
#                                                #
##################################################`
)


export function pageToCoordinate(pageString) {
    // transform the string into a JS Object {coordinate: char} e.g. {'12,3': '#'}
    let coordinates = {}
    let pageLines = pageString.split("\n");
    for (let i = 0; i < pageLines.length; i++) {
        let lineChars = pageLines[i].split("");  // extract the chars contained in a line
        for (let j = 0; j < lineChars.length; j++) {
            // add the coordinate - charater pairs to the coordinates object
            let key = `_${i}_${j}`;
            coordinates[key] = lineChars[j]; 
        }
    }
    // console.log(coordinates);
    return coordinates;
}


export function pageToArray(pageString) {
    // transform the string into a JS Array [[coordinate: char], ..] e.g. [['12,3': '#'], ..]
    let pageArray = [];
    let pageLines = pageString.split("\n");
    for (let i = 0; i < pageLines.length; i++) {
        pageArray.push([]);
        let lineChars = pageLines[i].split("");  // extract the chars contained in a line
        for (let j = 0; j < lineChars.length; j++) {
            // add the coordinate - charater pairs to the pageArray
            let charElement = [`_${i}_${j}`, lineChars[j]];
            pageArray[i].push(charElement);
        }
    }
    // console.log(pageArray);
    return pageArray;
}