import {Shield, Hull, EnergyGenerator, WeaponSystem } from "./shipModules.js";


class SpaceShip {
    _name;
    _modules;
    _configuration;  // handles the energy distribution etc.

    constructor(name) {
        this.name = name;
        this.configuration = {};

        this._modules = {
            shield: new Shield(
                "Shield Mark I",
                40,
                1
            ),
            weaponSystem: new WeaponSystem(
                "Laser Mark I",
                15,
                "Laser",
                1,
                0,
                10
            ),
            energyGenerator: new EnergyGenerator(
                "Energy Generator Mark I",
                20,
                1
            ),
            hull: new Hull(
                "Hull Mark I",
                100
            ),
            hyperDrive: {}, 
            
            additional1: {},
            additional2: {},
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
        this.modules["fuelTank"].fuel = newFuel;
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
}


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

