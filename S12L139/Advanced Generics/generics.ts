class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {}

    get(index: number): string {
        return this.collection[index];
    }
}

class ArrayOfAnything<Type> {
    constructor(public collection: Type[]) {}

    get(index: number): Type {
        return this.collection[index];
    }
}

new ArrayOfAnything<string>(['a','b','c']);

// Example of generics with functions

function printStrings(arr: string[]): void {
    for (let i=0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printnumbers(arr: number[]): void {
    for (let i=0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printAnything<Type>(arr: Type[]): void {
    for (let i=0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printAnything<string>(['a','b','c']);

// Generic Constraints

class Car1 {
    print() {
        console.log('I am a car');
    }
}

class House {
    print() {
        console.log('I am a hosue');
    }
}

interface Printable {
    print(): void;
}

function printHousesOrCars<Type extends Printable>(arr: Type[]): void {
    for (let i=0; i<arr.length; i++) {
        arr[i].print();
    }
}

// printHousesOrCars([1,2,3,4]);
printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car1>([new Car1(), new Car1()]);