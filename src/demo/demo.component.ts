import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styles: [
    '.tooltipTrigger { color:#710ECC; cursor: help; }',
    '.label { display:inline-block; width:250px; }',
  ],
})
export class DemoComponent {
  counter = 0;
}
