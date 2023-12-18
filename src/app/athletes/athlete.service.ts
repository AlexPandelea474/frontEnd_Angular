import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {
  private apiUrl = 'http://localhost:8080/athletes'; // Adjust the URL based on your backend

  constructor(private http: HttpClient) { }

  getAthletes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addAthlete(athlete: any): Observable<any> {
    return this.http.post(this.apiUrl, athlete);
  }

  deleteAthlete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);

  }
  updateAthlete(athlete: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${athlete.id}`, athlete);
  }
}
