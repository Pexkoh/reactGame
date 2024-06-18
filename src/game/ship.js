import { Shield, EnergyGenerator, Hull, WeaponSystem, FuelTank } from "./shipModules.js";


class SpaceShip {
    _name;
    _modules;
    _configuration;  // handles the energy distribution etc.

    constructor(
        name, 
        shield, 
        weaponSystem, 
        energyGenerator, 
        hull, 
        hyperDrive,
        fuelTank,
        additional1, 
        additional2
    ) {
        this.name = name;
        this.configuration = {};

        this._modules = {
            // simple asignment
            hull           : hull,
            shield         : shield,
            fuelTank       : fuelTank,
            hyperDrive     : hyperDrive,
            weaponSystem   : weaponSystem,
            energyGenerator: energyGenerator,
            
            additional1: additional1,
            additional2: additional2,
        };
    }

    // GETTER & SETTER
    getName() {
        return this._name;
    }
    setName(name) {
        this.name = name;
    }
    getFuel() {
        return this.modules["fuelTank"].getFuel();
    }
    setFuel(newFuel) {
        this.modules["fuelTank"].fuel = newFuel;  // using fuelTank internal setter
    }
    getConfiguration() {
        return this._configuration;
    }
    // TODO: IMPLEMENT CHANGE CONFIGURATION METHOD
    setConfiguraion(newConfiguration) {
        this._configuration = newConfiguration;
    }

    getModules() {
        return this._modules;
    }
    setModules(newModules) {
        return;
    }
    getShield() {
        return this._modules["shield"];
    }
    setShield(newShield) {
        this._modules.shield = newShield;
    }
    getWeaponSystem() {
        return this._modules["weaponSystem"];
    }
    setWeaponSystem(newWeaponSystem) {
        this._modules.weaponSystem = newWeaponSystem;
    }
    getPowerGenerator() {
        return this._modules["powerGenerator"];
    }
    setPowerGenerator(newPowerGenerator) {
        this._modules.powerGenerator = newPowerGenerator;
    }
    getAdditional1() {
        return this._modules["additional1"];
    }
    setAdditional1(newAdditional) {
        this._modules.additional1 = newAdditional;
    }
    getAdditional2() {
        return this._modules["additional2"];
    }
    setAdditional2(newAdditional) {
        this._modules.additional2 = newAdditional;
    }

    fireWeaponSystem(target) {
        // TODO: IMPLEMENTATION
    }
    takeHit(damage) {
        // TODO: IMPLEMENTATION
    }
    isDestroyed() {
        if (this.modules["hull"].isDestroyed) {
            return true;
        } else {
            return false;
        }
    }
    static createBasePlayerShip(shipName) {
        return new SpaceShip(
            shipName,
            Shield.createShield_MKI(),
            WeaponSystem.createWeaponSystem_MKI(),
            EnergyGenerator.createEnergyGenerator_MKI(),
            Hull.createHull_MKI(),
            undefined,
            undefined,
            undefined
        );
    }
}
export default SpaceShip;


function createConfiguration() {
    let configuration = {
        shield: 0,
        weaponSystem: 0,
        hyperDrive: 0,
    };

    return configuration;
}


// main call
let myShield = new Shield("shield I", 100, 70, 1);
console.log(myShield);

