import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slidbar',
  templateUrl: './slidbar.component.html',
  styleUrls: ['./slidbar.component.css']
})
export class SlidbarComponent implements OnInit {

  login = true;
  selectPage = 'log';
  constructor() {
  }

  ngOnInit() {
  }

}
