import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<h1>Welcome to {{title}}!</h1>
  <br>My name is {{name}}`
})
export class AppComponent {
  title = 'ng-pokemon-app';
  name ='Charles Meunier'
}
