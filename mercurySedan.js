//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass");

//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...
// keywords extends and super makes sure that A28 is a subclass of parent class of Vehicle
// super in specific makes sure that properties from parent class are linked and passed to this subclass
class A28 extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    // All properties as displayed on activity chart have been entered
    // BEGIN ENTERING METHODS
    loadPassenger(num) {
        if (this.passengers <= this.maximumPassengers) {
            if ((num + this.passengers) <= this.maximumPassengers) {
                this.passengers = num;
                return this.passengers;
            } else if (this.passenger > this.maximumPassengers) {
                console.log(this.model + "" + this.make + "has reached maximum capacity, no passengers can fit.")
            }
        }
    }
    // if the number of passengers is less than or equal to the maximum amount of passengers able to fit at 5, it will just return the number value of passengers 
    // if number is greater than the max, console log will say "model+make has reached maximum capacity, no passengers can fit" I used an if and else if statement
    // I used else if because then when the first if statement is false, this means the passengers cannot be less than or equal to 5, meaning the car has already the maximumPassengers
    // start() {
    //     if (this.fuel > 0) {
    //         return this.started = true;
    //         console.log("car is on");
    //     } else {
    //         return this.started = false;
    //         console.log("empty tank, failed to start");
    //     }
    // }

    Maintenance() {
        if (this.mileage > 30000) { //You need to console.log before you return, otherwise nothing will be logged 
            console.log("time to schedule maintenance")
            return this.scheduleService = true;
            
        }
        else {
            console.log("no need for servicing")
            return this.scheduleService = false;
           
        }
    }
}
//TO DO: Creating Instances and Testing Them

let myMerc = new A28("Mercury", "Sedan", "2016", "blue", "20000");

//Create at least two new instances of the Car class and test them here:
console.log(myMerc);
myMerc.loadPassenger(6);
myMerc.start();
myMerc.Maintenance(25000);
// keep getting myMerc not defined error messages about code lines that I did not write, that were already on the starter code. the code doesn't understand require command.
