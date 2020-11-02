// const ingredients = ["Carottes", "courgettes", "blanc de poulet", "sauce soja", "oignons", "sel"];
// console.log(ingredients);
// console.log(ingredients[1]);
// console.log(ingredients.length);
// console.log(ingredients[ingredients.length-1]);
// ingredients.forEach(function(item, idx, array) { // Callback
//     console.log(idx, item);
// });

// ingredients.push("ail");
// console.log(ingredients);
// // const nous interdit de réassigner la valeur
// // mais on peut le modifier
// // ingredients = [];

// const index_soja = ingredients.indexOf("sauce soja");
// console.log(index_soja);

// const tiret_ingredients = ingredients.map(function(elem) {
//     return `<li>${elem}</li>`;
// })
// console.log(tiret_ingredients);
// const tiret_ingredients2 = ingredients.map(elem => `<li>${elem}</li>`);
// console.log(tiret_ingredients2);

// const filter_ingredients = ingredients.filter(elem => elem.length < 5);
// console.log(filter_ingredients);

// const persons = [
//     {name: "toto", age: 25},
//     {name: "titi", age: 30},
//     {name: "bob", age: 57},
//     {name: "raoul", age: 2},
//     {name: "raymonde", age: 18}
// ];

// const mineurs = persons.filter(p => p.age < 18);
// const majeurs = persons.filter(p => p.age >= 18);
// console.log(mineurs);
// console.log(majeurs);

console.log("############## exo ##############");

class Recette {
    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }

    timer() {

    }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient)
        // console.log(this.ingredients);
    }

    removeIngredient(ingredient) {
        this.ingredients = this.ingredients.filter(ing => ing != ingredient);
        // console.log(this.ingredients);
    }
}

const ingredients = ["Oeuf", "huile", "sel", "poivre", "moutarde"]
const mayonnaise = new Recette("Mayonnaise", ingredients);
console.log(mayonnaise.ingredients);
mayonnaise.removeIngredient("sel");
console.log(mayonnaise.ingredients);
mayonnaise.addIngredient("Sel");
console.log(mayonnaise.ingredients);
