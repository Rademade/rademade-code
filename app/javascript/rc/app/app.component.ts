import {Component, ViewEncapsulation} from '@angular/core';

import * as sprite from './app.sprite';


@Component({
  selector: 'rc-app',
  encapsulation: ViewEncapsulation.None,
  template: '<router-outlet></router-outlet>',
  styleUrls: ['@shared/styles/_import.css']
})

export class AppComponent {
  constructor() {

  }
}

export default sprite;