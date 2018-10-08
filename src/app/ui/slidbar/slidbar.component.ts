import {Component, OnInit , OnChanges, Input , SimpleChange } from '@angular/core';
import {SessionStorageService} from 'ngx-webstorage';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-slidbar',
  templateUrl: './slidbar.component.html',
  styleUrls: ['./slidbar.component.css']
})
export class SlidbarComponent implements OnInit , OnChanges  {

  isLogin: boolean ;

  constructor(private login: LoginService) {
    console.log('Slider ::' + this.isLogin);
  }

  ngOnInit() {
    this.login.islogginSubject.subscribe(
      (message) => {
        this.isLogin = message;
      }
    );
    // console.log('slider init');
    // const user = this.session.retrieve('user');
    // this.isLogin = user !== null && user.hasOwnProperty('password');
    // console.log('Slider- init ::' + this.isLogin);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log('CHAAAAAAAAAAAAAAAAAAANG');
  }

}
