const Car = (make, model, year) => {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

const Motorcycle = (make, model, year) => {
    Car.call(this, make, model, year);
    this.numWheels = 2;
}

const MotorcycleArgs = (make, model, year) => {
    Car.call(this, arguments);
    this.numWheels = 2;
}