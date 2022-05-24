import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl: string = 'https://accounts.spotify.com/authorize';

  constructor(private http: HttpClient) { }

  login() {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/xml');

    return this.http.get(`${this.apiUrl}`, { headers: headers,params: {
      client_id: environment.clientId,
      response_type: 'token',
      redirect_uri: environment.url
    }})
  }

}
