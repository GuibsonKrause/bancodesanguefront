import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidatoService {
  private apiUrl = 'http://localhost:8080/api/candidatos/import';

  constructor(private http: HttpClient) {}

  importarCandidatos(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(this.apiUrl, formData, {
      headers: new HttpHeaders({
        Accept: 'application/json',
      }),
      responseType: 'json',
    });
  }
}
