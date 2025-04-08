import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string = '';
  mdp: string = '';

  constructor(private router: Router, private userService: UserService) {}

  onSubmit(): void {
    if (this.login.trim() && this.mdp.trim()) {
      this.userService.login({ login: this.login, mdp: this.mdp }).subscribe(
        (response) => {
          alert('Connexion réussie !');
          localStorage.setItem('user', JSON.stringify(response));
          this.router.navigate(['/Accueil']).then(() => {
            window.location.reload(); // Recharger la page après la redirection
          });
        },
        (error) => {
          alert('Identifiants invalides.');
        }
      );
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }

  onLogout(): void {
    localStorage.removeItem('user'); // Supprime les infos de l'utilisateur stockées
    this.login = '';
    this.mdp = '';
    alert('Déconnexion réussie.');
    this.router.navigate(['/']); // Redirection vers la page de connexion
  }
}
