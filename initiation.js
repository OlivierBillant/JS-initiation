console.log("Hello, world ! from JS")

var nombre = 2;
let nombre2 = 5;
// Difference entre let et var : https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var
// Ajout récent à JS : var variable globale, let : variable locale
console.log(nombre2);
nombre2 = "toto";
console.log(nombre2);

//Operation arithmetiques
let resultat = nombre + 3;
console.log(resultat);

//Concatenations
let prenom = "Adrien";
console.log("Bonjour : " + prenom);

//Operations logiques
console.log(1 > 3);

//Operation de comparaison
let chiffre = 1;
let chiffreString = "1";
console.log(chiffre == chiffreString);
console.log(chiffre === chiffreString);
