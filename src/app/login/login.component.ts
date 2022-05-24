import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  login() {
    window.open(`https://accounts.spotify.com/authorize?client_id=${environment.clientId}&response_type=token&redirect_uri=${environment.url}`, "_self");
  }

}
