import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AuthService{

  constructor(private http: HttpClient) { }
  access_token!: string;
  token_type!: string;
  expires_in!: number;

  getToken(): Observable <any>{
    const client_id = 'f1364b8948a34a60ad551f8bcc18e886';
    const client_secret = '54893f4a53d14e269537a80ff6f83740';

    const bodyParams = new HttpParams()
.set('grant_type', 'client_credentials');

    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      body: bodyParams.toString()
    };
    return this.http.post(authOptions.url, authOptions.body, { headers: authOptions.headers });
  }
}
