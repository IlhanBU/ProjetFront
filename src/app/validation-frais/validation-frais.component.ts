import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-validation-frais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './validation-frais.component.html',
  styleUrl: './validation-frais.component.css'
})
export class ValidationFraisComponent {

  fraisEnAttente = [
    { id: 1, nom: 'Fiche 1', montant: 120 },
    { id: 2, nom: 'Fiche 2', montant: 340 }
  ];

  validerFiche(id: number) {
    alert(`Fiche ${id} validée !`);
  }

  rejeterFiche(id: number) {
    alert(`Fiche ${id} rejetée !`);
  }

}