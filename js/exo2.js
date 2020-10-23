// const PI = Math.PI;
/**
 * Fonction constructeur
 * @param {nom} n 
 * @param {rayon} r 
 */
function Cercle(n, r) {
    this.nom = n;
    this.rayon = r;
    this.aire = null;
    // this.pi = Math.PI;

    // this.displayAire = function() {
    //     console.log("L'aire de " + this.nom + " est de " + this.aire + " m²");
    // }

    // this.calculAire = function() {
    //     this.aire = this.pi * Math.pow(this.rayon, 2);
    //     this.displayAire()
    // }
}
Cercle.prototype.pi = Math.PI;
Cercle.prototype.calculAire = function() {
    this.aire = this.pi * Math.pow(this.rayon, 2);
    this.displayAire()
}
Cercle.prototype.displayAire = function() {
    // console.log("L'aire de " + this.nom + " est de " + this.aire + " m²");
    console.log(`L'aire de ${this.nom} est de ${this.aire} m²`);
}

// let petit_cercle = new Cercle("Petit cercle", 2);
// console.log(petit_cercle);
// petit_cercle.calculAire();
// let grand_cercle = new Cercle("Grand cercle", 4);
// grand_cercle.calculAire();


/**
 * La classe Cercle2 permet de gérer la fonction constructor
 * qui sera appelée à chaque instanciation (new).
 * Les propriétés directes et qui changent pour chaque instance
 * sont alors affectées.
 * Ensuite, les méthodes sont directement liées au prototype
 * de Cercle2 (getPi)
 */
class Cercle2 {
    constructor(n, r) {
        this.nom = n;
        this.rayon = r;
        this.aire = null;
        // this.pi = Math.PI;
    }

    getPi() {
        return Math.PI;
    }

    calculAire() {
        // this.aire = this.pi * Math.pow(this.rayon, 2);
        this.aire = this.getPi() * Math.pow(this.rayon, 2);
        this.displayAire()
    }

    displayAire() {
        console.log(`L'aire de ${this.nom} est de ${this.aire} m²`);
    }
}
let petit_cercle2 = new Cercle2("Petit cercle", 2);
console.log(petit_cercle2);
petit_cercle2.calculAire();
let grand_cercle2 = new Cercle2("Grand cercle", 4);
grand_cercle2.calculAire();