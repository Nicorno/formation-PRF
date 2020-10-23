{
    var i = 12; // function scope
}
console.log(i);

function test() {
    var j = 12;
}
// console.log(j);

{
    let k = 45; // block scope
}
// console.log(k);

function test2() {
    var l = 78;
    {
        var m = "Hello";
    }
    console.log(l, m);
}
test2()