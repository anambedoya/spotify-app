import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name!: string;
  profilePicture!: string;
  id!: string;
  getProfileSubs!: Subscription;
  image!: string;
  artistName!: string;

  constructor(private spotifyService: SpotifyService) {
    const queryString = window.location.href;
    const params = queryString.split('&');
    const token = params[0].slice(45);
    localStorage.setItem('token', token);
  }

  ngOnInit() {
  }

  searchArtist(artistName: string) {
    this.spotifyService.searchArtist(artistName).subscribe((resp) => {
      const artist = resp?.artists.items[0];
      console.log(artist);

      this.image = artist.images[0].url;
      this.artistName = artist.name;
      console.log(this.artistName);
    });
  }

  keyEnter(e: any) {
    this.searchArtist(e.target.value);
  }

}
