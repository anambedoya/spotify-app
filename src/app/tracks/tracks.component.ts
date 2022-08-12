import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  artistId: string | null = localStorage.getItem('artistId');
  tracks!: any;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getArtistTopTracks(this.artistId).subscribe(resp => {
      this.tracks = resp.tracks;
      console.log('tracks' ,this.tracks);
    });

  }

}
