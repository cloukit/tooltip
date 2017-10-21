import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { CloukitTooltipModule } from '../index';
import { CloukitDropoutModule } from '@cloukit/dropout';

@NgModule({
  declarations: [ DemoComponent ],
  exports: [ DemoComponent ],
  imports: [ CommonModule, CloukitTooltipModule, CloukitDropoutModule ],
  providers: [ ],
  bootstrap: [ ]
})
export class DemoModule {
}
