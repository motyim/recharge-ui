import {Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-slidbar',
  templateUrl: './slidbar.component.html',
  styleUrls: ['./slidbar.component.css']
})
export class SlidbarComponent implements OnInit {

  isLogin: boolean ;

  constructor(private login: LoginService) {}

  ngOnInit() {
    this.login.islogginSubject.subscribe(
      (message) => {
        this.isLogin = message;
      }
    );
  }

}
