export class ShipModule {
    _maxIntegrity;
    _curIntegrity;
    _name;

    constructor(name, maxIntegrity) {
        this.name = name;
        this.maxIntegrity = maxIntegrity;
        this.curIntegrity = maxIntegrity;  // POSSIBLY CHANGE LATER
    }
    
    // GETTER & SETTER
    getMaxIntegrity() {
        return this._maxIntegrity
    }
    setMaxIntegrity(newMaxIntegrity) {
        this._maxIntegrity = newMaxIntegrity;
    }
    getCurIntegrity() {
        return this._curIntegrity
    }
    setCurIntegrity(newCurIntegrity) {
        this._curIntegrity = newCurIntegrity;
    }
    setName(newName) {
        this._name = newName;
    }
    getName() {
        return this._name;
    }

    isDestroyed() {
        // returns true if the module integrity > 0
        if (this._curIntegrity > 0) {
            return true;
        } else {
            return false;
        }
    }
}

export class Shield extends ShipModule {
    _level;
    _maxShieldPoints;
    _curShieldPoints;
    _conversionRate;  // Rate for energy to shield point conversion

    constructor(name, maxIntegrity, maxShieldPoints, level) {
        super(name, maxIntegrity);
        
        this.level = level;
        this.maxShieldPoints = maxShieldPoints;
        this.curShieldPoints = maxShieldPoints;
    }

    // GETTER & SETTER
    getMaxShieldPoints() {
        return this._maxShieldPoints;
    }
    setMaxShieldPoints(newMaxShieldPoints) {
        this._maxShieldPoints = newMaxShieldPoints;
    }
    getLevel() {
        return this._level;
    }
    setLevel(newLevel) {
        this._level = newLevel;
    }
    getCurShieldPoints() {
        return this._curShieldPoints;
    }
    setCurShieldPoints(newCurShieldPoints) {
        this._curShieldPoints = newCurShieldPoints;
    }
    getConversionRate() {
        return this._conversionRate;
    }
    setConversionRate(newConversionRate) {
        this._conversionRate = newConversionRate;
    }

    generateShield(energy) {
        // Calculate the max amount of shield generated with the given amount of energy
        
        // SP = ShieldPoints
        let potentialSP = energy * this.conversionRate;
        let missingSP = this.maxShieldPoints - this.curShieldPoints;

        let restoredSP = Math.min(potentialSP, missingSP);
        let usedEnergy = restoredSP / this.conversionRate;

        this.curShieldPoints += restoredSP;

        return usedEnergy;
    }
    blockDamage(damage) {
        // calculate the damage left over after using available shield points to reduce the damage
        
        // damage only unblocked when damage > curSP
        let unblockedDamage = - Math.min(0, this.curShieldPoints - damage);  
        let usedSP = Math.min(this.curShieldPoints, damage);  // can only block max curSP
        
        this.curShieldPoints -= usedSP;  // reduce shield by blocked amount
        return unblockedDamage;
    }
    static createShield_MKI() {
        return new Shield(
            "Shield Mark I",
            100,
            25,
            1
        );
    }
}


export class WeaponSystem extends ShipModule {
    _level;
    _type;
    _energyCost;
    _maxEnergy;  // per attack
    _damage;     // per shot|bullet

    constructor(name, maxIntegrity, type, level, energyCost, damage, maxEnergy) {
        super(name, maxIntegrity);
        
        this.type   = type;
        this.level  = level;
        this.damage = damage;
        this.energyCost = energyCost;
        this.maxEnergy = maxEnergy;
    }

    // GETTER & SETTER
    getType() {
        return this._type;
    }
    setType(newType) {
        this._type = newType;
    }
    getLevel() {
        return this._level;
    }
    setLevel(newLevel) {
        this._level = newLevel;
    }
    getEnergyCost() {
        return this._energyCost;
    }
    setEnergyCost(newEnergyCost) {
        this._energyCost = newEnergyCost;
    }
    getDamage() {
        return this._damage;
    }
    setDamage(newDamage) {
        this._damage = newDamage;
    }
    getMaxEnergy() {
        return this._maxEnergy;
    }
    setMaxEnergy(newMaxEnergy) {
        this._maxEnergy = newMaxEnergy;
    }

    fireWeaponSystem(energy) {
        let potentialEnergy = Math.min(this.maxEnergy, energy);
        let firedShots  = Math.round(potentialEnergy/this.energyCost);
        let usedEnergy  = firedShots * this.energyCost;
        let totalDamage = firedShots * this.damage;

        return [usedEnergy, totalDamage];
    }
    static createWeaponSystem_MKI() {
        return new WeaponSystem(
            "WeaponSystem Mark I",
            100,
            "Laser",
            1,
            2,
            5,
            10
        );
    }
}


export class Hull extends ShipModule {
    constructor(name, maxIntegrity) {
        super(name, maxIntegrity);
    }
    static createHull_MKI() {
        return new Hull(
            "Hull Mark I",
            100
        );
    }

}


export class EnergyGenerator extends ShipModule {
    _level;
    _energyRate;
    _fuelCost;

    constructor(name, maxIntegrity, level) {
        super(name, maxIntegrity);
        this.level = level;
    }

    // GETTER & SETTER
    getType() {
        return this._type;
    }
    setType(newType) {
        this._type = newType;
    }
    getLevel() {
        return this._level;
    }
    setLevel(newLevel) {
        this._level = newLevel;
    }
    static createEnergyGenerator_MKI() {
        return new EnergyGenerator(
            "Energy Generator Mark I",
            100,
            1
        )
    }
}


export class FuelTank extends ShipModule {
    _maxCapacity;
    _curFuel;

    constructor(name, maxIntegrity, maxCapacity, curFuel) {
        super(name, maxIntegrity);
        
        this.maxCapacity = maxCapacity;
        this._curFuel = curFuel;
    }

    getMaxCapacity() {
        return this._maxCapacity;
    }
    setMaxCapacity(newMaxCapacity) {
        this._maxCapacity = newMaxCapacity;
    }
    getCurFuel() {
        return this._curFuel;
    }
    setCurFuel(newCurFuel) {
        this._curFuel = newCurFuel;
    }

    refillTank(amount) {
        // refill the tank by the max amount without overflow and return the used amount

        let missingFuel = this.maxCapacity - this.curFuel;
        let usedAmount  = Math.min(amount, missingFuel);
        
        this.curFuel += usedAmount;
        return usedAmount;
    }
    drainTank(amount) {
        let drainedAmount = Math.min(amount, this.curFuel);
        this.curFuel -= drainedAmount;

        return drainedAmount;
    }
}


export class HyperDrive extends ShipModule {
    _chargeTime;
    _chargeProgress;
    
    constructor(name, maxIntegrity, chargeTime) {
        super(name, maxIntegrity);

        this.chargeTime = chargeTime;
        this.chargeProgress = 0;
    }

    getChargeTime() {
        return this._chargeTime;
    }
    setChargeTime(newChargeTime) {
        this._chargeTime = newChargeTime;
    }
    getChargeProgress() {
        return this._chargeProgress;
    }
    setChargeProgress(newChargeProgress) {
        this._chargeProgress = newChargeProgress;
    }
    
}

