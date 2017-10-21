/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, Input, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'cloukit-tooltip',
  template: `
  <ng-template #tooltip>
    <div style="background-color:#333; padding:4px; color:#fff; font-family: sans-serif">
      {{tooltipText}}
    </div>
  </ng-template>
  `,
})
export class CloukitTooltipComponent {

  @Input()
  public tooltipText: string;

  @ViewChild('tooltip')
  public tooltipTemplate: TemplateRef<any>;

}

