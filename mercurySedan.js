//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

let A28 = new VehicleModule.A28_Mercury("A28 Mercury","Sedan","2023","blue","20,000");
console.log(A28)

//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class A28_Mercury extends Vehicle {
    constructor(maximumPassengers, passengers, numberOfWheels, maximumSpeed, fuel, scheduleService) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger() {

    }
    start() {

    }
    scheduleService() {

    }
}








//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
