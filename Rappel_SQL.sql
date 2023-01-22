/* Les différents type de champs : */

/* Numériques : */
/*
  |---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  |------------------------------------------------------------------------  Numériques  -------------------------------------------------------------------------------|
  |---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  |    Type    | Deuxième Nom | Codage en octet | Valeur minimum avec négatif | Valeur maximum avec négatif | Valeur minimum sans négatif | Valeur maximum sans négatif |
  |---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  |   TINYINT  |              |         1       |            -128             |            127              |            0                |            255              |
  |---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  |  SMALLINT  |              |         2       |           -32768            |           32767             |            0                |           65535             |
  |---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  |  MEDIUMINT |              |         3       |          -8388608           |          8388607            |            0                |         16777215            |
  |---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  |   INTEGER  |     INT      |         4       |         -2147483648         |         2147483647          |            0                |        4294967295           |
  |---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  |    BIGINT  |              |         8       |            -2e63            |          (2e63)-1           |            0                |          (2e64)-1           |
  |---------------------------------------------------------------------------------------------------------------------------------------------------------------------|



  |-------------------------------------------------------------------------------------------------------------------------------------------------------|
  |---------------------------------------------------------  Caractères et chaînes  ---------------------------------------------------------------------|
  |-------------------------------------------------------------------------------------------------------------------------------------------------------|
  |    Type    | Deuxième Nom | Codage en bits |                                            Stockage                                                      |
  |-------------------------------------------------------------------------------------------------------------------------------------------------------|
  | VARCHAR(n) |              |                | Stocke une chaîne de caractère variable avec une longueur max de 8000 caractères (avec n caractères max) |
  |-------------------------------------------------------------------------------------------------------------------------------------------------------|

*/

/* Les différentes options : */
/*
  |------------------------------------------------------------------------------------------------------------------------------------------------------|
  |      Option    |                                                Effet                                                                                |
  |------------------------------------------------------------------------------------------------------------------------------------------------------|
  |   PRIMARY KEY  | Champ OBLIGATOIRE dans toutes les tables. Indique que ce champs sera l'identifiant permettant d'identifier les objets               |
  |------------------------------------------------------------------------------------------------------------------------------------------------------|
  |   FOREIGN KEY  | Indique que ce champs sera l'identifiant permettant d'identifier les objets d'une table de liaison                                  |
  |------------------------------------------------------------------------------------------------------------------------------------------------------|
  |    NOT NULL    | Ce champ ne peut pas être vide                                                                                                      |
  |------------------------------------------------------------------------------------------------------------------------------------------------------|
  |      NULL      | Ce champ peut être vide                                                                                                             |
  |------------------------------------------------------------------------------------------------------------------------------------------------------|
  | AUTO_INCREMENT | Ce champ sera créé et géré par MySQL automatiquement. Il va prendre l'id précédante et ajouter 1 lors de l'ajout d'un nouvel objet  |
  |------------------------------------------------------------------------------------------------------------------------------------------------------|
  |     UNIQUE     | Ce champ ne peut pas avoir la même valeur en double                                                                                 |
  |------------------------------------------------------------------------------------------------------------------------------------------------------|
  |    BOOLEAN     | Ce champ ne peut être que VRAI ou FAUX (true, false)                                                                                |
  |------------------------------------------------------------------------------------------------------------------------------------------------------|
  |    DEFAULT     | Spécifie la valeur par défaut du champ                                                                                              |
  |------------------------------------------------------------------------------------------------------------------------------------------------------|



*/

CREATE DATABASE nomdelabase; /* Créer la base de donnée avec le nom "nomdelabase" */
USE nomdelabase; /* Va dans la base de donnée "nomdelabase" */
SHOW DATABASES; /* Montre toutes les BDD présentes */
SHOW tables; /* Montre toutes les tables d'une BDD */
SHOW COLUMNS FROM utilisateurs; /* Montre le schéma de la table "utilisateurs" */

/* Créer une table dans une BDD */
CREATE TABLE utilisateur ( /* Créer la table au nom de "utilisateur"*/
id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
nom VARCHAR(100),
prenom VARCHAR(100),
email VARCHAR(255) NOT NULL UNIQUE,
age INTERGER NOT NULL,
langue_id VARCHAR(100)
);

CREATE TABLE langue (
id INTEGER NOT NULL PRIMARY KEY,
langue VARCHAR(100) NOT NULL
)

/* Gestion des données par CRUD */
/* CRUD = Create, Read, Update, Delete, soit Ajout, Lecture, Mise à jour, Suppression */
/* Mettre entre backtick les noms des tables ou champs, entre guiillement les noms des champs ou des chaînes de caractères, pas besoin pour les nombres */

/* AJOUT */
INSERT INTO `utilisateur` ('nom', 'prenom', 'email', 'age', 'langue_id') /* Ajoute dans la table 'utilisateur', un utilisateur. Il faut remettre les champs demandés. Pas besoin de mettre les champs en AUTO_INCREMENT. On peut aussi ne pas mettre les champs avec une valeur par défaut */
VALUES /* Permet de mettre les valeurs pour les champs mis juste au dessus */
('DUPONT', 'Maxime', 'dupont@gmail.com', '10', 1); /* On met la valeur des champs à la suite */
/* On peut ajouter plusieurs utilisateurs en séparant les VALUES par une virgule */
INSERT INTO `utilisateur` ('nom', 'prenom', 'email', 'age', 'langue_id')
VALUES
('DUPOND', 'MAURICE', 'dupond@gmail.com', '20', 1),
('SMITH', 'Agent', 'smith@gmail.com', '30', 1),
('ELU', 'Néo', 'elu@gmail.com', '40', 1),
('BOUTON', 'Marie', 'bouton@gmail.com', '28', 1),
('GMAIL', 'Google', 'gmail.com@gmail.com', '54', 2),
('TEST', 'Complete', 'test@hotmail.com', '26', 2),
('SQL', 'My', 'sql@gmail.com', '18', 2),
('SQL', 'No', 'nosql@gmail.com', '18', 2);
/* Par contre, ne pas oubliez le point-virgule à la fin de la commande */

INSERT INTO `langue` ('id', 'langue')
VALUES
('1', 'Français'),
('2', 'anglais');

/* LECTURE */
SELECT * FROM utilisateur; /* Cela va sélectionner tout les champs (* = tout) de la table 'utilisateur' */
SELECT 'nom', 'prenom', 'email' FROM utilisateur; /* On peut sélectionner seulement les champs voulu en les séparant par une virgule */

/* MISE À JOUR */
UPDATE `utilisateur` SET `email` = 'email1@email.com' WHERE `id` = '1';
/* On modifie dans la table 'utilisateur' l'email où l'identifiant est égal à 1 */
/* On peut modifier plusieurs champs en même temps en les séparant d'une virgule, et ajouter d'autres filtres */

/* SUPPRESSION */
DELETE FROM `utilisateur` WHERE `id`= '4';
/* On supprime l'utilisateur ayant l'id 4 de la table 'utilisateur' */
/* Quand on supprime un utilisateur, même si c'était le dernier, l'ID AUTO_INCREMENT continuera après. Par exemple, je supprime le 5, je recréai un utilisateur, il va mettre 6 en ID, et on aura dans la table l'ID 4 et 6 mais plus le 5 */


/* FILTRER UN OBJET */
/* Peut s'appliquer à chaque élément du CRUD */
/* Pour filtrer plus précisément, on peut utiliser WHERE avec tout les champs et bien plus : */

/* Va rechercher les objets dont le nom a pour valeur 'Maxime' */
SELECT * FROM `utilisateur` WHERE `nom` = 'Maxime';

/* Va rechercher les objets dont l'âge est supérieur à 20.
   On peut utiliser tout les opérateurs de comparaison (>, <, >=, <=, =) */
SELECT * FROM `utilisateur` WHERE `age` > 20;

/* Va rechercher tout les objets ayant un fin de mail se terminant par 'gmail.com' et commençant par 'gmail.com'
   Le % sert à ignorer ce qu'il y a avant (ou après)*/
SELECT * FROM `utilisateur` WHERE `email` LIKE '%gmail.com';
SELECT * FROM `utilisateur` WHERE `email` LIKE 'gmail.com%';


/* ORDONNER LES OBJETS */
/* On peut ordonner les objets trouvés par ordre croissant ou décroissant */
SELECT * FROM `utilisateur` ORDER BY `nom` ASC; /* Va afficher tout les objets ayant un nom, et les trier par ordre croissant*/
SELECT * FROM `utilisateur` WHERE `age` < 30 ORDER BY `age` DESC; /* Va affichier tout les objets ayant un âge inférieur à 30 et trier par ordre décroissant*/


/* COMPTER LE NOMBRE D'OBJETS RÉCUPÉRÉS */
/* On peut compter le nombre d'objet retourné, mais il va uniquement nous retourner le nombre obtenu */
SELECT COUNT(*)FROM utilisateur; /* Va compter dans toute la table des utilisateurs le nombre d'utilisateur */
SELECT COUNT(nom) FROM utilisateur; /* Va compter dans toute la table des utilisateurs le nombre d'utilisateur ayant un nom */
SELECT COUNT(DISTINCT nom) FROM utilisateur; /* Va compter dans toute la table des utilisateurs le nombre d'utilisateur ayant un nom différent. Ceux portant le même nom seront compté comme 1 (même s'il y en a 10) */
SELECT COUNT(*) FROM `utilisateur` WHERE `age` > 20; /* Va compter dans toute la table le nombre d'utilisateur ayant plus de 20 ans */


/* OPÉRATION SUR LES DONNÉES CHIFFRÉES */
/* On peut faire des sommes, moyennes, ou encore nous donner le maximum ou minimum d'un champs, pour cela :
   - AVG pour la moyenne
   - SUM pour la somme du champ
   - MAX pour nous donner le maximum
   - MIN pour nous donner le minimum */
SELECT AVG (`age`) FROM `utilisateur`; /* Va nous donner l'âge moyen de tout les utilisateurs */
SELECT SUM (`age`) FROM `utilisateur`; /* Va nous donner la somme de tout les âges des utilisateurs */
SELECT MAX (`age`) FROM `utilisateur`; /* Va nous donner l'âge le plus grand de tout les utilisateurs */
SELECT MIN (`age`) FROM `utilisateur`; /* Va nous donner l'âge le plus petit de tout les utilisateurs */


/* SAUVEGARDER UNE COMMANDE SQL*/
/* Pour sauvegarder une commande SQL dans le but de la réutiliser souvent, on peut créer une "vue" */
CREATE VIEW utilisateurs_gmail_vw AS SELECT * FROM `utilisateur` WHERE `email` LIKE '%gmail.com'; /* Créer la commande "utilisateurs_gmail_vw" pour sélectionner tout les utilisateur ayant une adresse mail se terminant par "gmail.com" */

/* Pour utiliser la commande : */
SELECT * FROM utilisateurs_gmail_vw;

/* Pour mettre à jour une vue : */
REPLACE VIEW utilisateurs_gmail_vw AS SELECT * FROM `utilisateur` WHERE `email` LIKE '%hotmail.com';

/* Pour supprimer une vue : */
DROP VIEW utilisateurs_gmail_vw


/* MODIFICATION DE TABLE */
/* On peut modifier une table déjà créer */
ALTER TABLE `utilisateur` ADD `ville` VARCHAR(255); /* On va modifier la table 'utilisateur' en rajoutant un champ 'ville' qui sera de type VARCHAR(255) */
ALTER TABLE `utilisateur` MODIFY `ville` VARCHAR(100); /* On va modifier le type du champ 'ville' dans la table 'utilisateur' */
ALTER TABLE `utilisateur` CHANGE `ville` 'lieu' VARCHAR(100); /* On va modifier le nom du champ 'ville' par 'lieu' dans la table 'utilisateur'. On est obligé de remettre le type du champ (ou on peut le modifier aussi là) */
ALTER TABLE `utilisateur` DROP `lieu`; /* On va modifier la table 'utilisateur' en supprimant le champ 'lieu' */


/* RELIER DES TABLES ENSEMBLES */
/* On peut joindre des tables entre elles si des informations se croisent (par exemple, les langues) */

/* Relation 1 à plusieurs (ou One-to-Many)(1, N) */
SELECT * FROM `utilisateur` /* On sélectionne tout les utilisateurs */
JOIN `langue` /* On joint la table 'langue' */
ON `utilisateur`.`langue_id` = `langue`.`id`; /* On considère l'id de la langue stocké dans chaque utilisateur dans le champ 'langue_id' */

/* Relation plusieurs à plusieurs (ou Many-to-Many)(N, N) */
SELECT * FROM `utilisateur`
JOIN utilisateur_aliment ON (utilisateur.id = utilisateur_aliment.utilisateur_id)
JOIN aliment ON (aliment.id = utilisateur_aliment.aliment_id);

/* Ajout d'une relation (1, N) */
/* FOREIGN KEY */
/* C'est une clé étrangère, permettant de créer des liaisons entre 2 tables dans une table de liaison */
ALTER TABLE `utilisateur` ADD FOREIGN KEY (`langue_id`) REFERENCES langue(id) ON DELETE RESTRICT;
/* On lie le champ 'langue_id' de la table utilisateur à l'id de la table 'langue'.
   De plus, on ajoute une action quand on supprime la liaison (ON DELETE). Il peut être :
   - RESTRICT ou NO ACTION : MySQL va empêcher la suppression de la liaison tant qu'elle est référencé dans un objet
   - SET NULL : Cela va mettre des valeurs NULL dans les champs de liaison
   - CASCADE : Cela va détruire tout les objets liés par cette liaison */

/* Ajout d'une relation (N, N) */
/* On doit pour cela créer une table reliant les deux, avec la convention de nommage table1_table2 */AscoBot
CREATE TABLE `utilisateur_lieu` (
`utilisateur_id` INT NOT NULL,
`lieu_id` INT NOT NULL,
FOREIGN KEY (utilisateur_id) REFERENCES utilisateur (id) ON DELETE RESTRICT ON UPDATE CASCADE,
FOREIGN KEY (lieu_id) REFERENCES lieu (id) ON DELETE RESTRICT ON UPDATE CASCADE,
PRIMARY KEY (utilisateur_id, lieu_id) /* On indique ici que l'id de la table sera l'association entre les deux id */
);
/* Le ON UPDATE indique comment mettre à jour la BDD en cas de modification du champ. Il peut être :
   - RESTRICT ou NO ACTION : MySQL va empêcher la mise à jour de la liaison tant qu'elle est référencé dans un objet
   - SET NULL : Cela va mettre à jour et remplacer par NULL dans les champs de liaison
   - CASCADE : Cela va mettre à jour tout les objets liés par cette liaison */