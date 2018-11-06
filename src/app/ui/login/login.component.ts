import {Component, OnInit} from '@angular/core';
import {User} from '../../interface/User';
import {LoginService} from '../../service/login.service';
import {Router} from '@angular/router';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User ;
  error: boolean ;
  constructor(private router: Router, private loginService: LoginService, private logger: NGXLogger) {
    // @ts-ignore
    this.user = {};
    this.error = false ;
  }

  login(): void {
    this.logger.info('Start Loging Proccess' , this.user);
    this.loginService.doLogin(this.user).subscribe(response => {
        this.loginService.setUserLogin(<User>response.body);
        this.logger.info('Save User | ', response, response.headers.get('Authorization'));
        this.router.navigate(['transfer']);
    },
      error => this.error = true );
  }

  ngOnInit() {}

}
