import { Component } from '@angular/core';
import { DemoComponent } from '../demo.component';

@Component({
  selector: 'cloukit-story-01-trigger-element-destroyed',
  templateUrl: './story-01-trigger-element-destroyed.html',
  styleUrls: [ '../demo.styles.css' ]
})
export class Story01Component {
  allItems = [ 'chocolate', 'chips', 'Reese\'s Pieces', 'M&M\'s' ];
  items = [].concat(this.allItems);

  removeLastItem() {
    const self = this;
    setTimeout(() => {
      self.items.pop();
    }, 2000);
  }

  resetItems() {
    this.items = [].concat(this.allItems);
  }
}
