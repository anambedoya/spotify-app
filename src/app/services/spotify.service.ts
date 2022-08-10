import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Album } from '../interfaces/album';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private apiUrl: string = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) { }

  getProfileInfo() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.get(`${this.apiUrl}/me`, { headers });
  }

  getFollowedArtists() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.get(`${this.apiUrl}/me/following?type=artist`, { headers });
  }

  searchArtist(artistName: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.get<any>(`${this.apiUrl}/search?q=${artistName}&type=artist`, { headers });
  }

  getArtistAlbums(artistId: string | null, limit: number, offset: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.get<Album>(`${this.apiUrl}/artists/${artistId}/albums?limit=${limit}&offset=${offset}`, { headers });
  }

  getArtistTopTracks(artistId: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.get<any>(`${this.apiUrl}/artists/${artistId}/top-tracks`, { headers });
  }

}
