// let age = 18;
// if(age < 18) {
//     console.log("Vous êtes mineur");
// } else if(age === 18) {
//     console.log("Vous êtes tout juste majeur");
// } else {
//     console.log("Vous êtes majeur");
// }
// console.log("À la prochaine");


// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log('fin de la boucle for');

// let i = 2;
// let j = i;
// if(i === j) console.log('i est identique à j');
// i = 3;
// console.log('i:',i);
// console.log('j:',j);

// const p1 = {name: 'Bob'};
// const p2 = p1;
// if(p1 == p2) console.log('p1 et p2 sont identiques');
// else console.log('p1 et p2 sont différents');
// p1.name = 'Toto';
// console.log('p1.name', p1.name);
// console.log('p2.name', p2.name);
// p2.firstname = 'Dylan';
// console.log('p1.firstname', p1.name);
// console.log('p2.firstname', p2.name);
// const p3 = {name: "Toto", firstname: "Dylan"};
// if(p1 == p3) {
//     console.log('p1 et p3 sont identiques');
// } else {
//     console.log('p1 et p3 sont différents');
// }


const p1 = {name: 'Bob'};
p1.firstname = 'Toto';
// console.log(p1);
// console.log(p1.firstname);
for(let key in p1) console.log('key:',key, 'value:',p1[key]);

// Parcours d'un tableau à index
const fruits = ["cerise", "pomme"];
for (let [i,fruit] of fruits.entries()) console.log(fruit,i);