import { Component } from '@angular/core';
import { DemoComponent } from '../demo.component';

@Component({
  selector: 'story-01-trigger-element-destroyed',
  templateUrl: './story-01-trigger-element-destroyed.html',
  styles: [
    '.item { padding:10px 20px 10px 20px; border:1px solid rgb(164, 227, 254); }',
  ].concat(DemoComponent.sharedStyles),
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
