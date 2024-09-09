class HoldAnything<Type> {
    data: Type;

    add(a: Type): Type {
        return a;
    }
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 123;

const holdString = new HoldAnything<string>();
holdString.data = 'lakjsf';