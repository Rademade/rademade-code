import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html'
})

export class ContentTabComponent {
  @Input() title: string;
  active: boolean;

  constructor() {
    this.active = false;
  }
}
