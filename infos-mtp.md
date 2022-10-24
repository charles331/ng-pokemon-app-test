# 1. deploy

- [1. deploy](#1-deploy)
  - [1.1. goal](#11-goal)
  - [1.2. to do](#12-to-do)
  - [refresh](#refresh)

## 1.1. goal

[Firebase](https://firebase.google.com/?hl=en)
[Angular deployment](https://angular.io/guide/deployment)

## 1.2. to do

1. Préparer le projet pour le déploiement
   - Compiler TS to JS pour le navigateur
   - Compresser les fichiers
   - Suppression dépendences inutiles
   - ng serve = dev
   - ng build = production
   - e:\angular2022\ng-pokemon-app\dist\ng-pokemon-app\
2. Créer notre projet sur le site de Firebase
3. Déployer notre application sur Firebase

## refresh

- NgModel
  - Le rôle principal de la directive NgModel est de mettre en place une liaison de données bi-directionnelle pour chacun des champs du formulaire sur lequel elle est appliquée. En plus, la directive s'occupe aussi d'ajouter et de retirer des classes pour chacun des champs du formulaire : ng-touched, ng-valid, etc ... Ainsi, vous pouvez savoir si l'utilisateur a cliqué ou non sur un champ, si la valeur du champ a changé, ou s'il est devenu invalide. En fonction de ces informations, on peut changer l'apparence d'un champ, faire apparaître un message d'erreur ou de confirmation, etc ...
- formulaires
  - Il existe deux modules différents pour créer des formulaires sur Angular: FormsModules ou ReactiveFormsModule. Ils proviennent de la même librairie: @angular/forms. Ces deux modules répondent au même besoin, mais selon un approche différente. Pour faire simple, le premier (FormsModules) développe une partie importante du formulaire dans le template, alors que le ReactiveFormsModule est plus centré sur le développement du formulaire côté composant, on dit qu'il est piloté par le modèle. La bonne réponse était donc ReactiveFormsModule.
- FormBuilder
  - Le FormBuilder, ou constructeur de formulaire, est une classe utilitaire proposé par Angular pour simplifier la déclaration des formulaires pilotés par le modèle.
- RxJs
  - La bibliothèques la plus populaire pour la programmation réactive dans l'écosystème JavaScript, est RxJS. Et c'est également celle qui a été choisie par l'équipe de développement d' Angular, puisqu’elle est incluse dans les dépendances de base d'un projet Angular.
- Promesses vs Observables
  - Les requêtes one-shot, c'est-à-dire celles qui impliquent un résultat unique, sont plus simples à traiter avec des Promesses. De plus, les développeurs JavaScript sont souvent plus à l'aise avec les Promesses que avec les Observables. Mais les requêtes ne sont pas toujours one shot. On peut commencer une requête, puis l'annuler, puis faire une requête différente avant que le serveur ait répondu à la première requête ! Cette séquence requête - annulation - nouvelle requête est difficile à implémenter avec des Promesses. C'est plus adapté de le faire avec des Observables.
- Guard
  - Tous les Guards sont conçus pour interagir avec la navigation, et même s'il en existe des types différents, aucun ne permet de modifier le thème de votre application.
