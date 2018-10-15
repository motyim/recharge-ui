import {Component, OnInit} from '@angular/core';
import { User } from '../../interface/User';
import {ConfigTerminalService} from '../../service/config-terminal.service';
import {SessionService} from '../../service/session.service';

@Component({
  selector: 'app-configer',
  templateUrl: './configer.component.html',
  styleUrls: ['./configer.component.css']
})
export class ConfigerComponent implements OnInit {

  terminalConfig: User;
  configered: number ;
  constructor(private configService: ConfigTerminalService, private session: SessionService) {
    // @ts-ignore
    this.terminalConfig = {};
  }

  ngOnInit() {
  }

  submit(): void {
    this.configService.submit(this.terminalConfig).subscribe(ack => {
      // @ts-ignore
      if (ack.data.loggedIn === true) {
        this.session.save(ack.data.user);
        this.configered = 1;
      } else {
        this.configered = -1;
      }
    });
  }
}
