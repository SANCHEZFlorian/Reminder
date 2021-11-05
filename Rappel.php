<?php // <=== Permet de dire à l'interpreteur que la suite du fichier est du code PHP

//? ====================================================================================
//? ====================================================================================
//? ====================================================================================
//! COMMENTAIRES

// Ceci est un commentaire en ligne

/**
 * Ceci est un commentaire en bloc
 * Ligne
 * Ligne
 * Etc...
 */

//? ====================================================================================
//? ====================================================================================
//? ====================================================================================
//! ECHO

// L'instruction echo permet d'afficher du texte 
// On met le texte entre "" ou ''
// On termine par un ;
// PHP_EOL permet de faire un retour à la ligne SEULEMENT EN CLI
// Pour faire un retour à la ligne dans un .php => echo '<br>'
//  => Il est possible d'écrire du HTML qui va être interprete grace à l'instruction echo !
echo "Salut les Wonderland !";
echo PHP_EOL;
echo '<br>';
echo 'Salut les Wonderland !';
echo PHP_EOL;
echo '<br>';
echo "<h1>blablabla</h1>";

//affichage d'un tableau
echo '<pre>';
print_r($coordonnees);
echo '</pre>';


//? ====================================================================================
//? ====================================================================================
//? ====================================================================================
//! VARIABLES & CONCATENATION

// Une variable est un tiroir dans lequel on va ranger une valeur (:donnée)
// On peut regarder son contenu mais aussi le remplacer
// On peut construire un texte avec une variable : On parle de concaténation
// Il existe 2 façons d'écrire une concaténation
$promo = "La promo Wonderland";
echo $promo;
echo '<br>';
$promo = "Wonderland";
echo 'Salut la promo : ' . $promo . ' ! <br>';
echo "Salut la promo : $promo !!! <br>";

//? ====================================================================================
//? ====================================================================================
//? ====================================================================================
//! TYPES VARIABLES

// Les variables peuvent contenir autre chose que du texte (string, int, float, bool)
// L'instruction var_dump() permet de voir le type et est souvent utilisé pour le debug 
$firstname = "Rémi";
$lastnamle = "Sulpice";
$age = 42;
$size = 2.10;
$isHappy = true;
$isBad = false;

var_dump($firstname, $lastnamle, $age, $size, $isHappy, $isBad);

//? ====================================================================================
//? ====================================================================================
//? ====================================================================================
//! CALCULS

// Il est possible de faire des calculs
$somme = 10 + 12;
echo 'Somme : ' . $somme . '<br>'; 

$multiplication = $somme * 2;
echo 'Multiplication : ' . $multiplication . '<br>';

$soustraction = $multiplication - 10;
echo 'Soustraction : ' . $soustraction . '<br>';

$division = $soustraction / 2;
echo 'Division : ' . $division . '<br>';


//? ====================================================================================
//? ====================================================================================
//? ====================================================================================
//! CONDITIONS

// On peut executer des actions en fonction d'une condition
// L'instruction if nous permet de réaliser un test ==> On parle de condition

//! Avec bool
// true : On entre dans le block if
// Et on execute le code présent dans le bloc
if ($isHappy) {
  echo 'Je suis heureux !';
}

// false : On n'est PAS dans le block
// Donc on n'execute pas le code présent
if ($isBad) {
  echo 'Je suis méchant ! ';
}


//! Avec opérateurs de comparaison
//! if...else
// Ai-je 18 ans ou + ?
if ($age > 18) {
  echo 'Je suis majeur';
}
// Sinon
else {
  echo 'Je suis mineur';
}

// Mon prénom est Rémi ?
if ($firstname == "Rémi") {
  echo 'Salut Rémi !';
} else {
  echo 'Bonjour inconnue';
}

// Mon prénom EST DIFFERENT de Sulpice ?
if ($lastnamle != "Sulpice") {
  echo 'Vous n\'etes pas monsieur Sulpice !';
} else {
  echo 'Bonjour monsieur Sulpice';
}

//! if...elseif...else
// Ai-je 17 ans ou + ?
if ($age >= 17) {
    echo "Tu peux passer le permis";
}
// J'ai moins de 17 ans. Mais ai-je 15 ans ou + ?
elseif ($age >= 15) {
    echo "Tu peux passer le permis en conduite accompagnée";
}
// J'ai moins de 15 ans.
else {
    echo "Bon, bah tu prends le bus.";
}

//! Le switch
$note = 10;

switch ($note) // on indique sur quelle variable on travaille
{ 
    case 0: // dans le cas où $note vaut 0
        echo "Tu es vraiment un gros nul !!!";
    break;
    
    case 5: // dans le cas où $note vaut 5
        echo "Tu es très mauvais";
    break;
    
    case 7: // dans le cas où $note vaut 7
        echo "Tu es mauvais";
    break;
    
    case 10: // etc. etc.
        echo "Tu as pile poil la moyenne, c'est un peu juste…";
    break;
    
    case 12:
        echo "Tu es assez bon";
    break;
    
    case 16:
        echo "Tu te débrouilles très bien !";
    break;
    
    case 20:
        echo "Excellent travail, c'est parfait !";
    break;
    
    default:
        echo "Désolé, je n'ai pas de message à afficher pour cette note";
}


//! Comparateur stricte (Compare la valeur et le type)
$toto = 12;
$tata = "12";
var_dump($toto, $tata);

//* Le comparateur === permet de vérifier la valeur ET le TYPE des variables
if ($toto === $tata) { 
  echo 'Mes 2 variables ont la même valeur ET LE MEME TYPE !';
} else {
  echo 'Mes 2 variables ont la même valeur MAIS PAS LE MEME TYPE !';
}


//! Opérateurs logiques
// &&, AND :
// Opérateur qui renvoie true si est seulement si les 2 tests renvoie true
// Sinon renvoie false
if ($size <= 1.00) {
  echo 'Je suis plutot petit';
} elseif ($size > 1.00  &&  $size <= 1.75) {
  echo 'Je suis de taille normale';
} elseif ($size > 1.75  &&  $size <= 2.00) {
  echo 'Je suis plutot grand';
} else {
  echo 'Je suis immense !';
}

// ||, OR : 
// Opérateur qui renvoie true si au moins l'un des 2 tests renvoie true
// Sinon renvoie false
$fruits = 'bananes';
if ($fruits == 'oranges' || $fruits == 'bananes') {
    echo "J'aime les $fruits.";
}
else {
    echo "Ah non, les $fruits, je n'aime pas ça !";
}



//? ====================================================================================
//? ====================================================================================
//? ====================================================================================
//! Le While
$nombre_de_lignes = 1;

while ($nombre_de_lignes <= 100)
{
    echo 'Je ne dois pas regarder les mouches voler quand j\'apprends le PHP.<br />';
    $nombre_de_lignes++; // $nombre_de_lignes = $nombre_de_lignes + 1
}

//! Le For 
for ($nombre_de_lignes = 1; $nombre_de_lignes <= 100; $nombre_de_lignes++) //Première chose l'initialisation, deuxième la condition, troisième l'incrémentation
{
    echo 'Ceci est la ligne n°' . $nombre_de_lignes . '<br />';
}

//! Le Foreach (pour chaque élément du tableau)
foreach($prenoms as $element) // Nom du tableau, index=>valeur ou juste valeur si tableau indexé
{
    echo $element . '<br />'; // affichera $prenoms[0], $prenoms[1] etc.
}
foreach($coordonnees as $cle => $element)
{
    echo '[' . $cle . '] vaut ' . $element . '<br />';
}

//? ====================================================================================
//? ====================================================================================
//? ====================================================================================
//? Tableau indexé
$prenoms = array ('François', 'Michel', 'Nicole', 'Véronique', 'Benoît'); // Fais un tableau dans $prenoms

//! Ajouter à la main chaque valeur
$prenoms[0] = 'François'; // Ajoute la valeur 'François' à l'index 0
$prenoms[1] = 'Michel';
$prenoms[2] = 'Nicole';

//! Ajouter à la fin du tableau une valeur
$prenoms[] = 'François'; // Ajoutera 'François' à la fin du tableau $prenoms
$prenoms[] = 'Michel'; 
$prenoms[] = 'Nicole'; 

//! Affichage d'une valeur du tableau 
$prenoms[0]; // Prends la valeur à l'index 0


//? Tableau associatif 
// On crée notre array $coordonnees
$coordonnees = array (
  'prenom' => 'François', // index => valeur
  'nom' => 'Dupont',
  'adresse' => '3 Rue du Paradis',
  'ville' => 'Marseille');

//! Ajout d'une valeur à un index 
$coordonnees['prenom'] = 'François';
$coordonnees['nom'] = 'Dupont';
$coordonnees['adresse'] = '3 Rue du Paradis';
$coordonnees['ville'] = 'Marseille';

//! Affichage d'une valeur du tableau 
$coordonnees['ville']; // Prends la valeur à l'index donné