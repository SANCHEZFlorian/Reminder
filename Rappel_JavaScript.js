//JavaScript

/*
VARIABLES SCALAIRES (ou primitives) :
String : Généralement du texte, s'écrit entre "" ou '' ou même ``. Si il y a une apostrophe dans le string, mettre un \avant pour ne pas confondre (ex : 'j\'ai mangé')
Number : Nombre qui sécrit sans apostrophe ou autre. Si il y a une virgule dans le nombre, toujours mettre le point (ex : 3.5). Peut être entiers, flottants, positif ou négatif
Boolean : Vrai ou faux
Null : Une valeur nulle 
Undefined : Une valeur indéfini
Symbol

VARIABLES COMPLEXES :
Les objets : Appelez object, est une liste d'éléments ordonnés et qui fonctione en paires clé/valeur
Les tableaux : Appelez array, est une liste d'élément ordonnés
Les set : C'est une liste non-ordonné et qui ne peut pas contenir de doublon
Les map : C'est une liste ordonné de paires clé/valeur. Il est possible de filtrer les éléments

AIDE :
 - L'emplacement de chaque array/objet est prit en compte. Le premier emplacement a la place du 0.
 - Toujours mettre le point-virgule à la fin d'une ligne sauf en cas de fermeture et d'ouverture de block

// Permet de mettre la ligne en commentaire
/*
Permet
de mettre 
ce qu'il y a entre en commentaire
*/



//Variable pour les exemples
var x = 2;
var age = 16;
var ages;
var f = 2.455555555;


var etc = 1; //Définit une variable globale qui reste dans tout le code, peu importe l'emplacement où elle est définit et sa valeur. Peut ne pas initialiser sa valeur.
let lets = 'Nimporte quelle variable'; //Définit une variable uniquement dans le bloc où elle est et est changeable. Peut ne pas initialiser sa valeur.
const constante = 'Nimporte quelle variable'; //Définit une variable uniquement dans le bloc où elle est. DOIT être nommé. Ne peut pas être changer. Les objets ou array contenu peuvent l'être par contre.
var Objet = { a: 1, b: 2, c: 3, etc: 4 }; //Définit un objet contenant plusieurs clé/valeur (une clé = une valeur) 
var Tableau = [1, 2, 3, etc]; //Définit un tableau (array). Les valeurs à l'intérieures peuvent être de tout types. 
var Gabarit = `Modèles de libellés`; //Servent à écrire du string mais permettent d'écrire sur plusieurs lignes et d'incorporer des expressions (${expression}) 
etc++; //Rajoute 1 à la valeur de etc
etc--; //Enlève 1 à la valeur de etc
etc += 100; //Ajoute la valeur de droite à etc
etc -= 51; //Enlève la valeur de droite à etc
etc *= 2; //Multiplie par 2 etc
etc /= 2; //Divise par 2 etc
++etc; //Ajoute 1 à la valeur de etc et permet de l'avoir directement maintenant (pareil pour le -- devant la valeur)
console.log(etc); //Permet d'afficher ce qu'il y a entre parenthèse
etc == '1'; //Demande si la valeur de gauche est égale (faiblement) à la valeur de droite. Ici oui, car il fait une conversition de la valeur numérique en string
etc === '1'; //Demande si la valeur de gauche est STRICTEMENT égale à celle de droite. Ici non car etc est un nombre et '1' est un string
etc != 1; //Demande si etc est différent du nombre 1 (il nous dira 'false' puisqu'il est égale à 1)
etc >= 51; //Comme en math, demande s'il est supérieur ou égale, inférieur ou égale (<=), strictement supérieur (>) ou strictement inférieur (<)
var and = true && false; //le ET. Sert à savoir si a ET b sont quelque chose. Les deux doivent l'être sinon il le considérera comme faux
var or = true || false; //le OU. Sert à savoir si une des valeurs est égale à quelque chose
var xor = true ^ true; //le XOR. Sert à savoir si l'une ou l'autre des valeurs est égale à quelque chose, mais pour être vrai, il ne doit y avoir qu'une valeur égale, pas plusieurs
var nég = !(true ^ true); //Le point d'exclamation ser à exprimer une négation. Le double (!!) sert à transtyper en booléen
age > 17 ? console.log('Vous pouvez entrez') : console.log('Vous ne pouvez pas rentrer'); //Le If rapide. condition ? siVrai : siFaux
return //Permet de mettre fin à une fonction tout en envoyant la valeur à la fonction appelante



//LES OBJETS

//Ce qui concerne les string
lets.length; //Donne le nombre de caractères (y compris les espaces)
lets.trim(); //Permet de supprimer les espaces avant et après la chaîne de caractère
lets.includes(inclue); //Permet de savoir si la chaîne de caractère contient ce qu'il y a entre parenthèse
lets.toLowerCase(); //Permet de formater le string en minuscule
lets.toUpperCase(); //Permet de formater le strinf en majuscule
lets.substr(2, 2); //Permet de garde une portion du string. Le premier paramètre pour l'emplacement du début de la portion, le deuxième pour le nombre de caractères gardés après le début.

//Ce qui concerne les maths
Math.random(); //Permet de choisir un nombre FLOTTANT aléatoire entre 0 et 1
Math.max(0, 10, 20); //Permet de trouver le plus grand nombre dans la liste des paramètres
Math.min(0, 10, 20); //Permet de trouver le plus petit nombre dans la liste des paramètres
Math.round(3.5); //Permet d'arrondir à la supérieur le nombre entre parenthèse
Math.floor(3.5); //Permet d'arrondir à l'inférieur le nombre entre parenthèse

//Ce qui concerne les nombres
f.toFixed(2); //Permet d'arrondir à x chiffres après la virgule (x = entre parenthèse). Le plus devant est là pour transformer le toFixed() pour les nombre 
isFinite(f); //Permet de voir si ce qu'il y a entre parenthèse est un nombre fini.

//Ce qui concerne les tableaux
Tableau.lenght; // Permet de dire les nombres d'éléments
Tableau.push('infini'); //Permet d'ajouter à la fin un nouvel élément dans le array
Tableau.unshift('Début'); // Permet d'ajouter au début du array un élément
Tableau.pop(); //Permet de supprimer le dernier élément du array



//STRUCTURE

//Le If-Else/Si-Sinon
if (age > 17) { //Condition
    console.log('Vous pouvez entrez'); //Instruction si réussi
} else { //Sinon
    console.log('Vous ne pouvez pas rentrer'); //Instruction si faux
} //Fermeture du bloc If

//Le Switch. 
switch (age > 17) { //Evalue déjà la chose
    case true: //Cas 1
        console.log('Vous pouvez rentrer'); //Effectue l'action équivalente au cas 1
        break; //Fait stopper le code dans le switch
    case false: //Cas 2
        console.log('Vous ne pouvez pas rentrer'); //Effectue l'action équivalente au cas 2
        break; //Fait stopper le code dans le switch
    default: //
        console.log('Montrez moi votre pièce d\'identité');
}

//La boucle For
for (ages = 0; ages < 17; ages++) { // for (cas de début; condition à atteindre; ce qu'on va faire à chaque boucle au cas)
    console.log('Vous n\'avez pas encore l\'âge nécessaire'); //instruction qui sera faite entre chaque boucle
}

//La boucle Do-While (faire ... tant que...)
do {
    age++; //rajoute 1 à age
} while (age < 16); //jusqu'à ce que age atteigne l'objectif (ne plus être inférieur à 16)

//La boucle While (tant que....) (attention aux infini ! Mettre un if dans lequel il y a un break si jamais)
while (age < 16) { //si age est inférieur à 16
    age++; //rajouter 1
}

//La boucle For-In (pour les propriétés d'un objet) Ne parcours pas les symbols
for (var prop in Objet) {
    console.log(prop, Objet[prop]);
}

// La boucle For-of (pour les éléments d'un tableau) 
for (var val of Tableau) {
    console.log(val);
}

//La classe (Permet de créer de nouveaux objets à partir d'un "formulaire")
class info { //Définit le nom du "formulaire"
    constructor(prénom, nom) { //Construit le type d'objet avec le nom des clés
        this.prénom = prénom //Assigne la valeur prénom à ce prénom (dans le construtor)
        this.nom = nom //Assigne la valeur nom à ce nom (dans le construtor)
    }
    showPrenom() { //On peut rajouter des fonctions dans les classes (ce sont des méthodes d'instances)
        console.log('Prénom' + this.prénom)
    }
}
let infoFlo = new info('Sanchez', 'Florian') //Commande pour créer un objet avec la classe 
console.log(infoFlo)



//GET (URL)
//Permet de récupérer des variables depuis un URL. Ex:
// j'ai fait une recherche d'appartement de super riche en plein paris
const monURL = new URL('https://www.seloger.com/list.html?projects=2,5&types=1,14&natures=1,2,4&places=[{ci:750108}]&price=NaN/3000000&surface=200/NaN&bedrooms=4&enterprise=0&qsVersion=1.0&m=search_advanced');
let propriete = 'surface';

function ramenepropriete(monURL, propriete) {
    let parametres = monURL.searchParams;
    let p = parametres.get(propriete);
    return p;
}

// ça doit afficher 200 m2
console.log(ramenepropriete(monURL, propriete));



//FONCTIONS (deux manières de l'écrire)

//Avec le function () {}
function add(firstNumber, secondNumber) { //quelles données ont doit avoir
    return firstNumber + secondNumber; //Ce qu'on fait avec ces données
}

//Avec une constante
const fonction = (firstNumber, secondNumber) => {
    const resultat = firstNumber + secondNumber;
    return resultat;
}
const fonction2 = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
}



//DOM
//Recherche/Récupération
let id = document.getElementById() //Recherche un élément via l'ID HTML. Mettre l'ID entre parenthèses et entre "".
let classe = document.getElementsByClassName() //Recherche un/des élément via la class HTML. Mettre la class entre parenthèses et entre "".
let balise = document.getElementsByTagName() //Recherche un/des élément via le type de balise. Mettre le type entre parenthèses et entre "".
let difficile = document.querySelector() //Par exemple,  document.querySelector("#myId p.article > a")  fera une recherche dans l'élément ayant pour id  #myId , 
    //les éléments de type  <p>  qui ont pour classe  article , afin de récupérer le lien (<a>) qui est un enfant direct (pas des enfants de ses enfants).
element.children //: cette propriété nous retourne la liste des enfants de cet élément ;
element.parentElement //: cette propriété nous retourne l'élément parent de celui-ci ;
element.nextElementSibling / element.previousElementSibling //: ces propriétés nous permettent de naviguer vers l'élément suivant / précédent de même niveau que notre élément.

//Modifier
id.innerHTML = "<p>Voici un exemple de contenu pour <strong>innerHTML</strong></p>" //Remplace ce qu'il y a dans id par le texte HTML. Il faut donc le taper
elt.classList.add("nouvelleClasse"); // Ajoute la classe nouvelleClasse à l'élément
elt.classList.remove("nouvelleClasse"); // Supprime la classe nouvelleClasse que l'on venait d'ajouter
elt.classList.contains("nouvelleClasse"); // Retournera false car on vient de la supprimer
elt.classList.replace("oldClass", "newClass"); // Remplacera oldClass par newClass si oldClass était présente sur l'élément
elt.style.color = "#fff"; // Change la couleur du texte de l'élément à blanche
elt.style.backgroundColor = "#000"; // Change la couleur de fond de l'élément en noir
elt.style.fontWeight = "bold"; // Met le texte de l'élément en gras
elt.setAttribute("type", "password"); // Change le type de l'input en un type password
elt.setAttribute("name", "my-password"); // Change le nom de l'input en my-password
elt.getAttribute("name"); // Retourne my-password

//Créer
const newElt = document.createElement("div"); //Créer un nouvel élément div
let elt = document.getElementById("main"); //Recherche l'élément main en id
elt.appendChild(newElt); //ajoute notre nouvel élément en tant qu'enfant de main
elt.removeChild(newElt); // Supprime l'élément newElt de l'élément elt
elt.replaceChild(document.createElement("article"), newElt); // Remplace l'élément newElt par un nouvel élément de type article

//Evènement
const elt = document.getElementById('mon-lien'); // On récupère l'élément sur lequel on veut détecter le clic
elt.addEventListener('click', function() { // On écoute l'événement click
    elt.innerHTML = "C'est cliqué !"; // On change le contenu de notre élément pour afficher "C'est cliqué !"
});
elt.addEventListener('click', function(event) { // On écoute l'événement click, notre callback prend un paramètre que nous avons appelé event ici
    event.preventDefault(); // On utilise la fonction preventDefault de notre objet event pour empêcher le comportement par défaut de cet élément lors du clic de la souris
});
elementInterieur.addEventListener('click', function(event) {
    event.stopPropagation();
    elementAvecMessage.innerHTML = "Message de l'élément intérieur";
});
elt.addEventListener('mousemove', function(event) {
    const x = event.offsetX; // Coordonnée X de la souris dans l'élément
    const y = event.offsetY; // Coordonnée Y de la souris dans l'élément
});
/* il peut y avoir :
clientX  /  clientY  : position de la souris dans les coordonnées locales (contenu du DOM) ;
offsetX  /  offsetY  : position de la souris par rapport à l'élément sur lequel on écoute l'événement ;
pageX  /  pageY  : position de la souris par rapport au document entier ;
screenX  /  screenY  : position de la souris par rapport à la fenêtre du navigateur ;
movementX  /  movementY  : position de la souris par rapport à la position de la souris lors du dernier événement  mousemove*/

var request = new XMLHttpRequest();
request.open("GET", "http://url-service-web.com/api/users");
request.send();
/*Ligne 1 : on crée un nouvel objet de type  XMLHttpRequest  qui correspond à notre objet AJAX. C'est grâce à lui qu'on va créer et envoyer notre requête ;
Ligne 2 : on demande à ouvrir une connexion vers un service web. C'est ici que l'on précise quelle méthode HTTP on souhaite, ainsi que l'URL du service web ;
Ligne 3 : on envoie finalement la requête au service web.*/
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        console.log(response.current_condition.condition);
    }
};
request.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
request.send();
/*UNSENT  (code 0) : l'objet est prêt mais la méthode  open()  n'a pas encore été appelée ;
OPENED  (code 1) :  open()  a été appelé ;
HEADERS_RECEIVED  (code 2) :  send()  a été appelé, les headers et  status  sont disponibles au sein de l'objet ;
LOADING  (code 3) : réception en cours, les données reçues sont partielles ;
DONE  (code 4) : requête terminée.
readyState  : qui contient l'état de la requête ;
status  : qui contient le code de statut de la requête (souvenez-vous, 2xx quand ça s'est bien passé, 3xx pour les redirections, 4xx pour les erreurs...) ;
responseText  : qui contient la réponse du service web au format texte. Ainsi, si le texte que l'on attend est au format JSON, il va falloir le transformer en objet JavaScript avec la fonction  JSON.parse(texteJSON) .*/
setTimeout(function() {
        console.log("I'm here!")
    }, 5000)
    /*setInterval  (doc) : elle fonctionne exactement comme  setTimeout , à ceci près qu'elle exécute la fonction passée en paramètre en boucle à une fréquence déterminée par le temps en millisecondes passé en second paramètre. Il suffira de passer la valeur de retour de  setInterval  à  clearInterval  pour stopper l'exécution en boucle de la fonction ;
    setImmediate  (doc). Cette fonction prend en seul paramètre la fonction à exécuter de façon synchrone.  La fonction en question sera placée dans la file d'attente de l'event loop, mais va passer devant toutes les autres fonctions, sauf certaines spécifiques au Javascript : les événements (les mêmes qu'on a vus au premier chapitre, et qui sont donc exécutés de façon asynchrone  😉), le rendu, et l'I/O. Il existe aussi  nextTick , qui permet, là, de court-circuiter tout le monde. À utiliser avec précaution, donc...*/