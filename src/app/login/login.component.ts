import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  scopes: string = '';

  constructor() {}

  ngOnInit(): void {
    this.scopes = 'user-follow-read'
  }

  login() {
    window.open(`https://accounts.spotify.com/authorize?client_id=${environment.clientId}&response_type=token&redirect_uri=${environment.url}&scope=${this.scopes}`, "_self");
  }

}
