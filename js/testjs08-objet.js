/**
 * Création d'une fonction constructeur d'objet Card 
 * @param {question} String
 * @param {answer} String
 * @param {explanation} String
 */

function Card(question, answer, explanation) {
    // Déclaration et affectation des propriétés
    this.question = question;
    this.answer = answer;
    this.explanation = explanation;

    // Méthodes
    this.moveRight = function() {
        // Code pour déplacer la carte
        console.log("Quand je serais grand je ferais une methode qui déplace la carte vers la droite");
    }

    this.moveLeft = function() {
        // Code pour déplacer la carte
        console.log("Quand je serais grand je ferais une methode qui déplace la carte vers la gauche");
    }

    this.displayCompleteCard = function() {
        console.log("Question: " + this.question);
        console.log("Réponse: " + this.answer);
        console.log("Explication: " + this.explanation);
    }
}
// Instance créée avec des arguments
let tbl = new Card("Inventeur du web ?", "Tim Berners-lee", "Anglais qui travaillait au CERN.");
// Invocation ou appel de la méthode displayCompleteCard
tbl.displayCompleteCard();
tbl.moveLeft();