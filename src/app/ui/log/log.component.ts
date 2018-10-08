import {Component, OnInit} from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    // this.loginService.isLoggedIn();
  }

}
