export class CharactersCollection {
    constructor(public data: string) {}

    get length() {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    }
}