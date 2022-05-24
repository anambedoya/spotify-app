import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accessToken!: string;

  constructor(private route: ActivatedRoute) {
    const queryString = window.location.href;
    const params = queryString.split('&');
    const token = params[0].slice(45);
    console.log(token);
  }

  ngOnInit(): void {
  }

}
