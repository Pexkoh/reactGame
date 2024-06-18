import SpaceShip from "./ship"


export function createInitGameState(playerName, shipName, startMoney) {
    
    const gameState = {
        name: playerName,
        money: startMoney,
        playerShip: SpaceShip.createBasePlayerShip(shipName),
    }

    return gameState;
}


let gameStateTemplate = {
    playerName: "",
    shipInstance: {},  // object containing an instance of a shipState 
    money: 0,
}


let shipStateTemplate = {
    
}


