import { Shield, Hull, WeaponSystem, FuelTank, Hyperdrive } from "./shipModules.js";


class SpaceShip {
    _name;
    _modules;

    constructor(
        name, 
        hull, 
        shield, 
        fuelTank,
        hyperdrive,
        weaponSystem, 
        additional1, 
        additional2
    ) {
        this.name = name;
        this._modules = {
            // simple asignment
            hull           : hull,
            shield         : shield,
            fuelTank       : fuelTank,
            hyperdrive     : hyperdrive,
            weaponSystem   : weaponSystem,
            
            additional1: additional1,
            additional2: additional2,
        };
    }

    // GETTER & SETTER
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    get modules() {
        return this._modules;
    }
    set modules(newModules) {
        return;
    }
    get shield() {
        return this._modules["shield"];
    }
    set shield(newShield) {
        this._modules.shield = newShield;
    }
    get weaponSystem() {
        return this._modules["weaponSystem"];
    }
    set weaponSystem(newWeaponSystem) {
        this._modules.weaponSystem = newWeaponSystem;
    }
    get hyperdrive() {
        return this._modules["hyperdrive"];
    }
    set hyperdrive(newHyperdrive) {
        this._modules.hyperdrive = newHyperdrive;
    }
    get additional1() {
        return this._modules["additional1"];
    }
    set additional1(newAdditional) {
        this._modules.additional1 = newAdditional;
    }
    get additional2() {
        return this._modules["additional2"];
    }
    set additional2(newAdditional) {
        this._modules.additional2 = newAdditional;
    }

    // GENERAL ACTIONS AND INTERACTION WITH SHIP MODULES
    get fuel() {
        return this.modules["fuelTank"].getFuel();
    }
    set fuel(newFuel) {
        this.modules["fuelTank"].fuel = newFuel;  // using fuelTank internal setter
    }
    get status() {
        /*
        returns object describing the current ship status
        */
        return {
            "maxShield": this.modules["shield"].maxShieldPoints,
            "curShield": this.modules["shield"].curShieldPoints,
            "maxFuel": this.modules["fuelTank"].maxCapacity,
            "curFuel": this.modules["fuelTank"].curFuel,
            "maxIntegrity": this.modules["hull"].maxIntegrity,
            "curIntegrity": this.modules["hull"].curIntegrity,
        };
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
            Hull.createHull_MKI(),
            Shield.createShield_MKI(),
            FuelTank.createFuelTank_MKI(),
            Hyperdrive.createHyperdrive_MKI(),
            WeaponSystem.createWeaponSystem_MKI(),
            
            undefined,
            undefined,
        );
    }
    static createBaseEnemyShip(shipName) {
        return new SpaceShip(
            shipName,
            Hull.createHull_MKI(),
            new Shield(
                "Shield Mark 0",
                0,
                0,
            ),
            FuelTank.createFuelTank_MKI(),
            Hyperdrive.createHyperdrive_MKI(),
            new WeaponSystem(
                "Weapon System Mark 0",
                5,
            ),
            
            undefined,
            undefined,
        );
    }
}
export default SpaceShip;