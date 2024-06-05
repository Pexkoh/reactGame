import SpaceShip from "./ship"
import { Shield, Hull, EnergyGenerator, WeaponSystem } from "./shipModules"


export function createInitGameState(playerName, shipName, startMoney) {
    
    const gameState = {
        name: playerName,
        money: startMoney,
        playerShip: new SpaceShip(
            shipName,
            Shield.createShield_MKI(),
            WeaponSystem.createWeaponSystem_MKI(),
            EnergyGenerator.createEnergyGenerator_MKI(),
            Hull.createHull_MKI(),
            undefined,
            undefined,
            undefined
        )
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


