import {Component, OnInit} from '@angular/core';
import { User } from '../../interface/User';
import { SessionService } from '../../service/session.service';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-configer',
  templateUrl: './configer.component.html',
  styleUrls: ['./configer.component.css']
})
export class ConfigerComponent implements OnInit {

  terminalConfig: User;

  constructor(private sessionService: SessionService, private login: LoginService) {
    // @ts-ignore
    this.terminalConfig = {};
    login.isLoggedIn();
  }

  ngOnInit() {
  }

  submit(): void {
    console.log('Test config' + this.terminalConfig.terminalId + this.terminalConfig.terminalPIN);
    this.sessionService.submit(this.terminalConfig);
  }
}
