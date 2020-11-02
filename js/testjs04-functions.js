// fonctionne grace au hoisting
console.log(ajoute(2, 7));

/**
 * Fonction qui attend 2 paramètres et qui renvoie leur somme
 * @param {number} a 
 * @param {number} b
 * @return {number}
 */

function ajoute(a, b) { // paramètres
    console.log('a', a); // les variables sont "function scope"
    return a + b;
}
console.log(ajoute(1,3)); // appel de ajoute avec les arguments 1 et 3
// console.log('i', i); // undefined

// hoisting (hisse la déclaration, cad qu'on peut appeler la func avant la func que si l'on déclare la func avec function name() et pas let name = function...)

let ajout = function(i,j) {
    return i + j;
}
ajout(1,3);

console.log('############ arrow functions #########');
const ajouter = (i, j) => {
    return i + j;
}
const ajouter2 = (i, j) => (i + j);
console.log(ajouter(5, 6));
console.log(ajouter2(5, 6));

const multiply = i => i*2;
console.log(multiply(2));