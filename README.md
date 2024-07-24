# Zombie Apocalypse Team Selection!

<aside>⚠️ Prendre le temps de lire en entier cette page avant de commencer !</aside>
<br>
<br>
<aside>💡 Un jeu dans lequel le.a joueur.euse doit constituer une équipe pour survivre à la prochaine invasion de zombies</aside>

## Règles générale

- Le test doit obligatoirement être réalisé avec react.
- Vous pouvez utilisez un framework si vous le souhaitez ou vous pouvez créer votre app avec create-react-app.
- Vous pouvez utiliser un framework css si vous le souhaitez (bootstrap, tailwind, etc), mais ce n'est pas obligatoire.
- L’application ne se repose pas sur une base de donnée mais doit garder la composition de votre équipe
- L’application comporte un header visible partout (cf section Header)
- Lorsqu'on commence l’équipe est vide.
- Il ne peut pas y avoir plus de 3 personnes dans votre équipe.

Ce jeu est constitué de deux pages:

- une page avec la liste des potentiels co-équipiers et co-équipières
- une page pour afficher plus de détails sur un co-équipier ou une co-équipière

## **1 - Affichez vos potentiels co-équipiers**

Affichez une liste de vos potentiels co-équipiers et co-équipières à ajouter à son équipe: 

- Afficher une liste de personnes en vous servant de cette api : https://reqres.in/
- Pour chaque personne, affichez le prénom et la photo.
- Un bouton permet d'ajouter une personne à votre équipe.
- Si une personne est déjà dans votre équipe, un bouton permet de l'en retirer.

## **2 - En savoir plus sur un co-équipier**

Lorsque vous cliquez sur la photo d'une personne, vous êtes redirigé.e sur une nouvelle page.

Sur la page de cette personne, on retrouve:

- sa photo
- son prénom
- son nom
- son adresse email
- un élément permettant de comprendre si cette persone est dans votre équipe
- Un bouton permet d'ajouter cette personne à votre équipe
- Un bouton permet de retirer cette personne de votre équipe

---

## **Header**

- le titre du jeu
- le nombre de personnes actuellement dans votre équipe

---

## Bonus

- Rendre claire la composition de son équipe en différenciant les coéquipiers dans la liste par un élément graphique.
- Navigation entre les deux écrans
- Gestion des potentielles erreurs
- Gestion du responsive
- Documentation pour lancer l’application en local

---

## Démarrage

- Cloner ce projet en local et ajouter un commit vide
- Push le nouveau projet sur github

## Rendu

- Rendre public le nouveau projet
- Communiquer l’url du repo
