import { Component } from '@angular/core';

@Component({
  selector: 'page-404',
  template: `
    <div class='center'>
      <img src="https://media2.giphy.com/media/6uGhT1O4sxpi8/giphy.gif"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a>
    </div>
  `
})
export class PageNotFoundComponent {}
