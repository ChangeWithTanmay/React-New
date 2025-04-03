interface MyCustomObj{
    a: number;
    b: number
}

function add(obj: MyCustomObj){
    return obj.a + obj.b;
}

const r=add({
    a: 1,
    b: 2,
    // c: 3  // This will throw an error as 'c' is not present in the interface
})