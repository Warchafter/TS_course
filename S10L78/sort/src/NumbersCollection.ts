export class NumbersCollection {
    // data: number[];

    // constructor(data: numbers[]) {
    //     this.data = data;
    // }
    /* This lines above are the exact same thing as the one below */
    constructor(public data: number[]) {}
    get length(): number{
        return this.data.length
    }


    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex]
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftHandTemp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHandTemp;
    }
}
