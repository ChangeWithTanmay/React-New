function add(obj) {
    return obj.a + obj.b;
}
var r = add({
    a: 1, 
    b: 2,
    // c: 3  // This will throw an error as 'c' is not present in the interface
});
