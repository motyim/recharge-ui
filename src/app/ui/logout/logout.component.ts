import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private login: LoginService , private router: Router) {
    console.log('Cleaaaaaaaaaaaaaaaaaaaaaaaaaaaaar');
    login.setLogout();
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}
