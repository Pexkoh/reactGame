import { ShipModule } from "./shipModules";


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