/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitDropoutModule } from '@cloukit/dropout';
import { CloukitTooltipDirective } from './tooltip.directive';
import { CloukitTooltipComponent } from './children/tooltip.component';

@NgModule({
  imports: [ CommonModule, CloukitDropoutModule ],
  exports: [ CloukitTooltipDirective ],
  declarations: [ CloukitTooltipDirective, CloukitTooltipComponent ],
  entryComponents: [ CloukitTooltipComponent ],
})
export class CloukitTooltipModule {}
