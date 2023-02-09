import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent implements OnInit {
  message: string = 'Vous êtes déconnecter. (pikachu/pikachu)';
  name:string;
  password: string;
  auth: AuthService;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth = this.authService;
  }

  setMessage() {
    if(this.auth.isLoggedIn) {
      this.message = 'Vous êtes onnecté';
    } else {
      this.message = 'Identifiant ou mot de passe incorrect.';
    }
  }

  login() {
    this.message = 'Tentative de connexion';
    this.auth.login(this.name, this.password)
        .subscribe((isLoggedIn: boolean) => {
          this.setMessage();
          if (isLoggedIn) {
            this.router.navigate(['/pokemons']);
          } else {
            this.password = '';
            this.router.navigate(['/login']);
          }
        })
  }

  logout() {
    this.auth.logout();
    this.message = 'Vous est déconnecté';
  }
}
