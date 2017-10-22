/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitThemeService } from '@cloukit/theme';
import { CloukitTooltipDirective } from './tooltip.directive';
import { CloukitTooltipComponent } from './children/tooltip.component';
import { CloukitTooltipComponentThemeDefault } from './tooltip.theme';

@NgModule({
  imports: [ CommonModule ],
  exports: [ CloukitTooltipDirective ],
  declarations: [ CloukitTooltipDirective, CloukitTooltipComponent ],
  entryComponents: [ CloukitTooltipComponent ],
})
export class CloukitTooltipModule {
  constructor(private themeService: CloukitThemeService) {
    if (this.themeService.getComponentTheme('tooltip') === null) {
      this.themeService.registerComponentTheme('tooltip', new CloukitTooltipComponentThemeDefault());
    }
  }
}
