import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isCollapsed = true; // Navbar fermée par défaut
  isLoggedIn = false; // Vérifie si l'utilisateur est connecté

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  checkLoginStatus(): void {
    this.isLoggedIn = !!localStorage.getItem('user'); // Vérifie si l'utilisateur est connecté
  }

  onLogout(): void {
    localStorage.removeItem('user'); // Supprime les infos utilisateur
    this.isLoggedIn = false;
    this.router.navigate(['/login']); // Redirige vers la page de connexion
  }
}
