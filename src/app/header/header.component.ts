import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  // templateUrl: './header.component.html',
  template: '<div class="container-fluid">Welcome to {{ title }}!</div>',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'mai-app-application';

  constructor() { }

  ngOnInit() {
  }

}
