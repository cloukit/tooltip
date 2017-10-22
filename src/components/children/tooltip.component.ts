/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, Input, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { DropoutPlacement } from '@cloukit/dropout';

@Component({
  selector: 'cloukit-tooltip',
  template: `
  <ng-template #tooltip>
    <div [ngStyle]="style">
      {{tooltipText}}
    </div>
  </ng-template>
  `,
})
export class CloukitTooltipComponent implements OnInit {

  @Input()
  public tooltipText: string;

  @ViewChild('tooltip')
  public tooltipTemplate: TemplateRef<any>;

  @Input('cloukitTooltipPlacement')
  cloukitDropoutPlacement: DropoutPlacement;

  public style = {
    backgroundColor: '#333',
    padding: '4px',
    color: '#fff',
    transform: '',
  };

  ngOnInit() {
    console.log('changes');
    if (this.cloukitDropoutPlacement === DropoutPlacement.DOWN_CENTER || this.cloukitDropoutPlacement === DropoutPlacement.UP_CENTER ) {
      this.style.transform = 'translate(-50%, 0)';
    }
    if (this.cloukitDropoutPlacement === DropoutPlacement.LEFT_CENTER || this.cloukitDropoutPlacement === DropoutPlacement.RIGHT_CENTER ) {
      this.style.transform = 'translate(0, -50%)';
    }
  }

}

