import { ShipModule } from "./shipModules";


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