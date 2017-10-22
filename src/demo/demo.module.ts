import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitDropoutModule } from '@cloukit/dropout';
import { CloukitThemeModule } from '@cloukit/theme';
import { CloukitTooltipModule } from '../index';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [ DemoComponent ],
  exports: [ DemoComponent ],
  imports: [
    CommonModule,
    CloukitThemeModule,
    CloukitTooltipModule,
    CloukitDropoutModule,
  ],
  providers: [ ],
  bootstrap: [ ]
})
export class DemoModule {}
