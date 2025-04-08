import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FraisService {
  private apiUrl = 'http://localhost:8080/api/fraisForfait'; // ✅ Endpoint confirmé

  constructor(private http: HttpClient) {}

  addFrais(frais: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, frais);
  }
  getFrais(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  deleteFrais(fraisId: number): Observable<void> {
    console.log('Suppression du frais avec ID :', fraisId);
    return this.http.delete<void>(`${this.apiUrl}/${fraisId}`);
  }
}
