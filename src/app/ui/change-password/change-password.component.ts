import { Component, OnInit } from '@angular/core';
import {PasswordService} from '../../service/password.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changed: number;
  newPassword: string;
  confirmPassword: string;
  constructor(private passwordService: PasswordService, private logger: NGXLogger) { }

  ngOnInit() {
  }

  change(): void {
    if (this.newPassword !== undefined && this.confirmPassword !== undefined && this.confirmPassword === this.newPassword) {
      this.passwordService.changePassword(this.newPassword).subscribe(ack => {
        this.logger.info('ChangePassword Component', ack);
        if (ack.data.loggedIn === true) {
          this.changed = 1 ;
        } else {
          this.changed = -1 ;
        }
      });
    } else {
      this.changed = -2 ;
    }
  }

}
