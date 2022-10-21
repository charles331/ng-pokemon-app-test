# 1. Mes informations

- [1. Mes informations](#1-mes-informations)
  - [1.1. Programmation réactive](#11-programmation-réactive)
  - [1.2. Voir les flux](#12-voir-les-flux)
  - [1.3. type de réponses](#13-type-de-réponses)
  - [1.4. RxJS](#14-rxjs)
  - [1.5. Obersvable](#15-obersvable)
  - [1.6. Promesse](#16-promesse)
  - [Résumé](#résumé)

## 1.1. Programmation réactive

- programmation réactive = programmation avec des flux de données asynchrones

## 1.2. Voir les flux

- [rxmarbles.com](https://rxmarbles.com/)

## 1.3. type de réponses

- succes - valeur de réponse
- error - cas d'erreur
- signal de fin

## 1.4. RxJS

- librairie deprogrammation réactive

## 1.5. Obersvable

```js
// Pour tous ce qui est asynchrone

Observable.fromArray([1, 2, 3, 4, 5])
    .filter(x => x > 2)                 // 3, 4, 5
    .map(x => x * 2)                    // 6, 8, 10
    .subscribe(x => console.log(x));    // Affiche les résultats (succès)

```

## 1.6. Promesse

```js
import 'rxjs/add/operator/toPromise';

function giveMePromiseFromObservale() {

    Observable.fromArray([1, 2, 3, 4, 5])
        .filter(x => x > 2)
        .map(x => x * 2)
        .toPromise();
    
    // a utiliser avec .then

    }
```

## Résumé

- Les promesses sont natives en **JavaScript** depuis l'arrivée de la norme **ES6**.
- La programmation **réactive** implique de gérer des flux de données **asynchrones**.
- Un **flux** est une séquence d'**événements** ordonnés dans le **temps**.
- On peut appliquer différentes **opérations** sur les flux : regroupements, filtrages, troncatures, etc.
- Un flux peut émettre **trois types de réponses** : la valeur associée à un événement, une erreur ou une notification de complétion pour mettre fin au flux.
- La librairie **RxJS** est la librairie la plus populaire pour implémenter la programmation réactive en JavaScript.
- Dans RxJS les flux d'événements sont représentés par un objet appelé **Observable**.
