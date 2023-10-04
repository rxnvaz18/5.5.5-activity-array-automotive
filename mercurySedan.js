//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass.js")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class A28 extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num) {
        if (this.passengers <= this.maximumPassengers) {
            if ((num + this.passengers) <= this.maximumPassengers) {
                this.passengers = num;
                return this.passengers;

            
            } else if (this.passenger > this.maximumPassengers){
                console.log(this.model + "" + this.make + "has reached capacity.")
            }
    }
    start() {
        if (this.fuel > 0) {
        return this.started = true;
        console.log("car is on");
    } else {
        return this.started = false;
        console.log("empty tank");
        }
    }

    Maintenance() {
        if (this.mileage > 30000) {
            return this.scheduleService = true;
            console.log("time to schedule maintenance")
        }
        else{
            return this.scheduleService = false;
            console.log("no need for servicing")
        }
    }
}








//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
