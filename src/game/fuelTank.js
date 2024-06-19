import { ShipModule } from "./shipModules";


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