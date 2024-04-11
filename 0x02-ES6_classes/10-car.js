/* eslint-disable */
import Car from './10-car';

export default class EVCar extends Car {
    constructor(brand, motor, color, range) {
        super(brand, motor, color);
        this._range = range;
    }

    cloneCar() {
        /* Create a new instance of Car with the same attributes as the current instance */
        return new Car(this._brand, this._motor, this._color);
    }
}
