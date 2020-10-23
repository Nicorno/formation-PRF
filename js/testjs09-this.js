var i = 12;
// console.log('i:', i);
// console.log('i (window):', window.i);
// console.log('i (this):', this.i);
// console.log('window:', window);
// window.alert('Hello world')
// alert('Hello world')
// console.log(navigator.appCodeName);
// console.log('this', this);

function LingotOr(valeur) {
    this.valeur = valeur;
    console.log('this', this);
}
LingotOr.prototype.poids = "12.4kg";

let l1 = new LingotOr(87654)
console.log('l1', l1);
let l2 = new LingotOr(66654)
console.log('l2', l2);
console.log('l2 a valeur:', l2.hasOwnProperty("valeur")); // true
console.log('l2 a poids:', l2.__proto__.hasOwnProperty("poids"))

// Objet littéral ou JSON
let l3 = {
    valeur: 68765
}
l3.__proto__.poids=2;
console.log("e",l3.poids);
console.log('l3', l3.hasOwnProperty("valeur")); // true

let l4 = new Object({
    a: "a"
})
l4.values = 4
console.log(l4);

let y = new Number(6)
let z = Number(6)
console.log(y);
console.log(z);

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))