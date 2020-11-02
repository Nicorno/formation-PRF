// // Récupération d'un élément du DOM
// const h1 = document.getElementById('h1');
// console.log('h1',h1);

// for(let key in h1) {
//     console.log('key',key, '- type:', typeof(h1[key]));
// }

// // Modification d'un élément du DOM
// h1.textContent = "Autre titre";

// // Création d'un élément du DOM en 3 étapes
// const section = document.createElement('section');
// document.body.appendChild(section);
// section.textContent = "Texte de ma section";
// section.setAttribute('id', 'section1');

// EXO
// Écrire une fonction qui permet de créer un élément du DOM
// Le plasser dans l'arborescence du DOM
// Écrire du texte dans l'élément créé

const createElem = (tagName, parent, text) => {
    const elem = document.createElement(tagName);
    elem.textContent = text;
    document[parent].appendChild(elem);
}
createElem("p", "body", "Un beau paragraphe");
