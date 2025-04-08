import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  menuOpen: boolean = false;
  userName: string = 'Invité';
  userRole: 'visiteur' | 'comptable' = 'visiteur';
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      this.userName = userData.login || 'Invité';
      this.userRole = userData.role || 'visiteur';
      this.isLoggedIn = true;

      // 🔄 Si la page d'accueil est affichée après connexion, elle se recharge une seule fois
      if (performance.navigation.type === performance.navigation.TYPE_NAVIGATE) {
        setTimeout(() => {
          window.location.reload();
        }, 100);
      }
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  navigateToDashboard() {
    this.router.navigate(['/visiteur-dashboard']);
  }

  navigateToFraisForm() {
    this.router.navigate(['/frais']);
  }

  navigateToFraisList() {
    this.router.navigate(['/liste-frais']);
  }

  navigateToValidation() {
    if (this.userRole === 'comptable') {
      this.router.navigate(['/validation']);
    }
  }
}
