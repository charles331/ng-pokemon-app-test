# 1. HTTP

- [1. HTTP](#1-http)
  - [1.1. app.module.ts](#11-appmodulets)
  - [1.2. setup](#12-setup)
  - [1.3. new service à la racine](#13-new-service-à-la-racine)
  - [1.4. new component with external html](#14-new-component-with-external-html)

## 1.1. app.module.ts

import { HttpClientModule } from '@angular/common/http'
HttpClientModule

## 1.2. setup

npm install angular-in-memory-web-api --save-dev

verif: package.json
"angular-in-memory-web-api": "^0.14.0",

[in-memory-web-api.git](https://github.com/angular/in-memory-web-api.git)

## 1.3. new service à la racine

- ng generate service in-memory-data --dry-run
  - CREATE src/app/in-memory-data.service.ts (141 bytes)
- adapt in-memory-data.service.ts

## 1.4. new component with external html

ng generate component pokemon/search-pokemon --inline-template=false --dry-run
