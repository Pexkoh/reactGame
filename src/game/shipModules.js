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