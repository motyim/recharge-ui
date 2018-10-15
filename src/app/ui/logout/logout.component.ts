import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../../service/login.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private login: LoginService , private router: Router , private logger: NGXLogger) {
    this.logger.info('Start Logout proccess');
    login.setLogout();
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}
