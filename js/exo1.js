function main(firstname, lastname) {
    function displayFullName(firstname, lastname) {
        console.log(firstname +' '+ lastname);
    }
    return displayFullName;
}
let func = main("Nicolas", "Caumont");
console.log(func);
