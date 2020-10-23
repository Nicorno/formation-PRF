var i = 12;
var j = 4;
console.log(i + j); // 16 (somme)

i = 'Bonjour';
j = 'Jean-Claude';
console.log(i + j); // (Concaténation)

/**
 * Conclusion: en fonction du type de données, les opérateurs s'adaptent
 * + pour des nombres permet d'additionner
 * + pour des chaînes de caractères permet de concaténer
 */

i = 12;
console.log(i + j); // 12Jean-Claude (Concaténation en transtypage)

j = "4";
console.log(i + j); // 124
