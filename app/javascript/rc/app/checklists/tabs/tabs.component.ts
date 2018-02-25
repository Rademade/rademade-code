import {
  Component,
  QueryList,
  ContentChildren
} from '@angular/core';

import { ContentTabComponent } from './tab.component';

@Component({
  selector: 'tabset',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class ContentTabsetComponent {
  @ContentChildren(ContentTabComponent) tabs: QueryList<ContentTabComponent>;

  setActive(tab: ContentTabComponent) {
    this.tabs.toArray().forEach((t) => t.active = false);
    tab.active = true;
  }

  constructor() { }
}
