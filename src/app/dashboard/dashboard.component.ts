import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  name!: string;
  profilePicture!: string;
  id!: string;
  getProfileSubs!: Subscription;

  constructor(private spotifyService: SpotifyService) {
    const queryString = window.location.href;
    const params = queryString.split('&');
    const token = params[0].slice(45);
    localStorage.setItem('token', token);
  }

  ngOnInit() {
    this.getProfileSubs = this.spotifyService.getProfileInfo().subscribe(({display_name, images, id}: any) => {
      this.name = display_name;
      this.profilePicture = images[0].url;
      this.id = id;
    });
  }

  ngOnDestroy() {
    this.getProfileSubs.unsubscribe();
  }

}
