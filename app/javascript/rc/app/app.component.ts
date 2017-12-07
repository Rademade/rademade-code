import {Component, ViewEncapsulation} from '@angular/core';

import * as sprite from './app.sprite';

// require('fonts');

@Component({
  selector: 'rc-app',
  encapsulation: ViewEncapsulation.None,
  template: '<router-outlet></router-outlet>',
  styleUrls: ['app.styles/_import.css']
})

export class AppComponent {
  constructor() {

  }
}

export default sprite;