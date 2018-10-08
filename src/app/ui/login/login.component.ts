import {Component, OnInit} from '@angular/core';
import { User } from '../../interface/User';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import {SessionStorageService} from 'ngx-webstorage';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User ;

  constructor(private router: Router, private loginService: LoginService, private session: SessionStorageService) {
    // @ts-ignore
    this.user = {};
  }

  login(): void {
    console.log('Will Call Loging >>> ');
    console.log(this.user);
    this.loginService.doLogin(this.user);
    console.log('finish  ' + this.loginService.loggedIn);
    this.router.navigate(['/log']);
  }

  ngOnInit() {
    console.log('cons : loign  : ');
    this.user = this.session.retrieve('user') || {};
    this.loginService.doLogin(this.user);
    console.log('end : cons : login ' + this.loginService.loggedIn);
  }

}
