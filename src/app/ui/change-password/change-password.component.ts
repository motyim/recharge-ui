import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/User';
import { SessionService } from '../../service/session.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  newPassword: string;
  confirmPassword: string;
  constructor(private sessionService: SessionService) { }

  ngOnInit() {
  }

  change(): void {
    if (this.newPassword !== undefined && this.confirmPassword !== undefined && this.confirmPassword === this.newPassword) {
      this.sessionService.changePassword(this.newPassword);
    }
  }

}
