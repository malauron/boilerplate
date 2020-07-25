import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'TOOLKIT';
  links = [
    { path: '/item', icon: 'devices_other', title: 'Item'},
    { path: '/courses', icon: 'view_list', title: 'Courses'}
  ];

  constructor() {}

}
