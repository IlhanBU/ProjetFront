import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/visiteur/login';

  private http = inject(HttpClient);

  login(userData: { login: string; mdp: string }): Observable<any> {
    return this.http.post(this.apiUrl, userData, { withCredentials: true });
  }
}