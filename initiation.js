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

//Conversion
let chiffreCast = Number(chiffreString);
console.log(typeof chiffreString);
console.log(typeof chiffreCast);

//Operations sur les booleans
//Suit les regles d algebre de Bool
// 2 lois principales : ET vs OU
// Inclusifs vs Exclusif
// TRUE : 1
// FALSE : 0
// ET : les deux booleans doivent etre égaux pour TRUE
// OU : au moins 1 des booleans doit etre TRUE
// Attention, en informatique, le OU est inclusif à la difference d'IRL (fromage OU dessert).

console.log(true || false);

console.log("Exercices Booleans")
console.log("exo 1 : " + (true && false));
console.log("exo 2 : " + (true || false));
console.log("exo 3 : " + (false || false));
console.log("exo 4 : " + (false && false));

let drapeau = "vert";
let mer = "calme";
let surveillance = true;

console.log("Dans quel cas peut on aller se baigner ?");
console.log("Si le drapeau n'est pas rouge");
if (drapeau != "rouge") {
    console.log("Le drapeau n'est pas rouge, je peux aller me baigner");
}

console.log("Dans quel cas peut on aller se baigner sous surveillance?");
console.log("Si le drapeau n'est pas rouge ET que la plage est surveillee");
if (drapeau != "rouge" && surveillance) {
    console.log("Le drapeau n'est pas rouge ET la plage est surveillée, je peux aller me baigner");
}

if(surveillance || (mer = "calme" && drapeau != "rouge")){
    console.log("la baignade est autorisée si : la plage est surveillée" 
    +" sans surveillance elle  la mer est calme ET le drapeau est vert");
}

//Boucles et Tableau
let monTableau = ["Printemps", "Ete", "Automne", "Hiver"];

for(let i = 0; i < monTableau.length; i++){
    console.log(monTableau[i]);
}

monTableau.push("toto");
for(let i = 0; i < monTableau.length; i++){
    console.log(monTableau[i]);
}

//Fonctions
function afficherTableau(){
    for(let i = 0; i < monTableau.length; i++){
        console.log(monTableau[i]);
    } 
}

monTableau.push("tata");
afficherTableau();

function direBonjour(prenom){
    console.log("Bonjour "+ prenom +" comment ca va?");
}
direBonjour("Olo");

