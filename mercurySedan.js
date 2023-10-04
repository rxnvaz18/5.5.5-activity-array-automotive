//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass").vehicleBaseClass;

//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class A28 extends VehicleModule {
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
let myMerc = new A28("Mercury", "Sedan", "2016", "blue", "20000");


//Create at least two new instances of the Car class and test them here:
console.log(myMerc);
myMerc.loadPassenger(6);
myMerc.start();
myMerc.mileage(25000);