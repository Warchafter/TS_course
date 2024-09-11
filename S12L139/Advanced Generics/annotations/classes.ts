class Vehicle {
    constructor(public color: string) {}

    protected honk(): void {
        console.log('beep');
    }
}

// protected class methods can only be accessed within the class itself by
// other methods inside of the class definition or within any of its children.
const vehicle = new Vehicle('orange');
// vehicle.honk();
console.log(vehicle.color);

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }

    private drive(): void {
        console.log('vroom');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car(4, 'red');
car.startDrivingProcess();