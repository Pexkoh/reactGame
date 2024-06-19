import { ShipModule } from "./shipModules";


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