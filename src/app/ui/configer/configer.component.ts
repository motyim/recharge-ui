import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-configer',
  templateUrl: './configer.component.html',
  styleUrls: ['./configer.component.css']
})
export class ConfigerComponent implements OnInit {

  constructor(private login: LoginService) {
    login.isLoggedIn();
  }

  ngOnInit() {
  }

}
