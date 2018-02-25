import {
  Component,
  AfterContentInit,
  QueryList,
  ContentChildren
} from '@angular/core';

import { ContentTabComponent } from './tab.component';

@Component({
  selector: 'tabset',
  templateUrl: './tabs.component.html'
})
export class ContentTabsetComponent implements AfterContentInit {
  @ContentChildren(ContentTabComponent) tabs: QueryList<ContentTabComponent>;

  ngAfterContentInit() {
    this.tabs.toArray()[0].active = true;
  }

  setActive(tab: ContentTabComponent) {
    this.tabs.toArray().forEach((t) => t.active = false);
    tab.active = true;
  }

  constructor() { }
}
