export class ShipModule {
    _name;

    constructor(name) {
        this.name = name;
    }
    
    // GETTER & SETTER
    set name(newName) {
        this._name = newName;
    }
    get name() {
        return this._name;
    }
}

export class Shield extends ShipModule {
    _maxShieldPoints;
    _curShieldPoints;
    _chargeRate;  // Rate for energy to shield point conversion

    constructor(name, maxShieldPoints, chargeRate) {
        super(name);
        
        this.maxShieldPoints = maxShieldPoints;
        this.curShieldPoints = maxShieldPoints;
        this.chargeRate = chargeRate;
    }

    // GETTER & SETTER
    get maxShieldPoints() {
        return this._maxShieldPoints;
    }
    set maxShieldPoints(newMaxShieldPoints) {
        this._maxShieldPoints = newMaxShieldPoints;
    }
    get curShieldPoints() {
        return this._curShieldPoints;
    }
    set curShieldPoints(newCurShieldPoints) {
        this._curShieldPoints = newCurShieldPoints;
    }
    get chargeRate() {
        return this._chargeRate;
    }
    set chargeRate(newChargeRate) {
        this._chargeRate = newChargeRate;
    }

    chargeShield() {
        // Calculate the max amount of shield generated with the given amount of energy
        let missingSP = this.maxShieldPoints - this.curShieldPoints;

        let restoredSP = Math.min(this.chargeRate, missingSP);
        this.curShieldPoints += restoredSP;
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
            50,
        );
    }
}


export class WeaponSystem extends ShipModule {
    _damage;     // per shot

    constructor(name, damage) {
        super(name);
        
        this.damage = damage;
    }

    // GETTER & SETTER
    get damage() {
        return this._damage;
    }
    set damage(newDamage) {
        this._damage = newDamage;
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
            20
        );
    }
}


export class Hull extends ShipModule {
    _curIntegrity;
    _maxIntegrity;

    constructor(name, maxIntegrity) {
        super(name);

        this.maxIntegrity = maxIntegrity;
        this.curIntegrity = maxIntegrity;
    }

    // GETTER & SETTER
    get curIntegrity() {
        return this._curIntegrity;
    }
    set curIntegrity(newCurIntegrity) {
        this._curIntegrity = newCurIntegrity;
    }
    get maxIntegrity() {
        return this._maxIntegrity;
    }
    set maxIntegrity(newMaxIntegrity) {
        this._maxIntegrity = newMaxIntegrity;
    }

    takeDamage(damage) {
        this.curIntegrity -= damage;
    }
    isDestroyed() {
        return this.curIntegrity <= 0;
    }
    static createHull_MKI() {
        return new Hull(
            "Hull Mark I",
            100
        );
    }
}


export class FuelTank extends ShipModule {
    _maxCapacity;
    _curFuel;

    constructor(name, maxCapacity) {
        super(name);
        
        this.maxCapacity = maxCapacity;
        this.curFuel = maxCapacity;
    }

    // GETTER & SETTER
    get maxCapacity() {
        return this._maxCapacity;
    }
    set maxCapacity(newMaxCapacity) {
        this._maxCapacity = newMaxCapacity;
    }
    get curFuel() {
        return this._curFuel;
    }
    set curFuel(newCurFuel) {
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
    isEmpty() {
        return this.curFuel === 0;  // assumes no negative fuel levels!
    }
    static createFuelTank_MKI() {
        return new FuelTank(
            "Fuel Tank Mark I",
            10
        );
    }
}


export class Hyperdrive extends ShipModule {
    _chargeTime;
    _chargeProgress;
    
    constructor(name, chargeTime) {
        super(name);

        this.chargeTime = chargeTime;
        this.chargeProgress = 0;
    }

    // GETTER & SETTER
    get chargeTime() {
        return this._chargeTime;
    }
    set chargeTime(newChargeTime) {
        this._chargeTime = newChargeTime;
    }
    get chargeProgress() {
        return this._chargeProgress;
    }
    set chargeProgress(newChargeProgress) {
        this._chargeProgress = newChargeProgress;
    }
    
    charge() {
        this.chargeProgress += 1;
    }
    resetChargeProgress() {
        this.chargeProgress = 0;
    }
    isReady() {
        return this.chargeProgress >= this.chargeTime;
    }
    static createHyperdrive_MKI() {
        return new Hyperdrive(
            "Hyperdrive Mark I",
            1,
        );
    }
}

