function creerFonction() {
    var nom = "Mozilla";
    function afficheNom() {
        console.log(nom);
    }
    return afficheNom;
}
  
let maFonction = creerFonction(); // à ne pas confondre avec let maFonction = creerFonction;
maFonction();

// context execution global: creerFonction() et maFonction
// context execution creerFonction: nom et afficheNom()
// context execution afficheNom: rien