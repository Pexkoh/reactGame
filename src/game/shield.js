import { ShipModule } from "./shipModules";


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