# 1. Authentification

- [1. Authentification](#1-authentification)
  - [1.1. Angular guards](#11-angular-guards)

## 1.1. Angular guards

[Milestone 5: Route guards](https://angular.io/guide/router-tutorial-toh#milestone-5-route-guards)

Un Guard est un mécanisme de protection utilisé par Angular pour mettre en place l'authentification mais pas seulement

- **CanActivate**
  - To mediate navigation to a route
- **CanActivateChild**
  - To mediate navigation to a child route
- **CanDeactivate**
  - To mediate navigation away from the current route
- **Resolve**
  - To perform route data retrieval before route activation
- **CanLoad**
  - To mediate navigation to a feature module loaded asynchronously
- **CanMatch**
  - To control whether a Route should be used at all, even if the path matches the URL segment.

```bash
ng generate guard auth --dry-run

? Which interfaces would you like to implement? CanActivate
CREATE src/app/auth.guard.ts (457 bytes)

ng generate service auth --dry-run


```
