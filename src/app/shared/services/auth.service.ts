import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private loginUrl = 'http://localhost:8080/login';

  verifyTwoFactorToken(token: string) {
    return this.http.post<string>('/api/verify-2fa', { token });
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(this.loginUrl, credentials);
  }

}
