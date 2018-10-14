import {Component, OnInit} from '@angular/core';
import { User } from '../../interface/User';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User ;

  constructor(private router: Router, private loginService: LoginService) {
    // @ts-ignore
    this.user = {};
  }

  login(): void {
    console.log('Will Call Loging >>> ');
    console.log(this.user);
    this.loginService.doLogin(this.user).subscribe(loggedUser => {
      console.log(loggedUser);
      this.loginService.setUserLogin(loggedUser);
      console.log('saved user ');
      this.router.navigate(['log']);
    });
  }

  ngOnInit() {}

}
