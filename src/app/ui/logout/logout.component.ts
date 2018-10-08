import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router ,private session: SessionStorageService) {
    console.log('Cleaaaaaaaaaaaaaaaaaaaaaaaaaaaaar');
    session.clear();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
