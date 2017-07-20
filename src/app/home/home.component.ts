import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { AppConfig } from './../app.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clientId: string;
  domain: string = window.location.href;

  constructor(public auth: AuthService, public appConfig: AppConfig) { }

  ngOnInit() {
    this.clientId = this.appConfig.config.AUTH0_CLIENT_ID;
  }

}
