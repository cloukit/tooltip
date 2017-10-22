/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, Input, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { DropoutPlacement } from '@cloukit/dropout';
import {
  CloukitComponentTheme, CloukitStatefulAndModifierAwareElementThemeStyleDefinition,
  CloukitThemeService,
} from '@cloukit/theme';

@Component({
  selector: 'cloukit-tooltip',
  template: `
  <ng-template #tooltip>
    <div [ngStyle]="getStyle('wrapper').style">
      <div [ngStyle]="getStyle('tooltip').style">
        {{tooltipText}}
      </div>
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
  public cloukitDropoutPlacement: DropoutPlacement;

  @Input()
  public wrapperMargin: string;

  @Input()
  public theme: string;

  private themeSelected: CloukitComponentTheme;
  private state = {
    uiModifier: 'base',
    uiState: 'init',
    tooltipTransform: '',
  };

  constructor(private themeService: CloukitThemeService) {
    this.themeSelected = this.themeService.getComponentTheme('tooltip');
  }

  public getStyle(element: string): CloukitStatefulAndModifierAwareElementThemeStyleDefinition {
    if (this.themeSelected !== undefined && this.themeSelected !== null) {
      const style = this.themeSelected.getStyle(element, this.state.uiState, this.state.uiModifier);
      if (element === 'tooltip') {
        style.style[ 'transform' ] = this.state.tooltipTransform;
      }
      if (element === 'wrapper') {
        style.style[this.wrapperMargin] = this.state.uiState === 'ready' ? '5px' : '0px';
      }
      return this.themeService.prefixStyle(style);
    }
    return { style: {}, icon: {} } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition;
  }

  ngOnInit() {
    const self = this;
    if (this.cloukitDropoutPlacement === DropoutPlacement.DOWN_CENTER || this.cloukitDropoutPlacement === DropoutPlacement.UP_CENTER ) {
      this.state.tooltipTransform = 'translate(-50%, 0)';
    }
    if (this.cloukitDropoutPlacement === DropoutPlacement.LEFT_CENTER || this.cloukitDropoutPlacement === DropoutPlacement.RIGHT_CENTER ) {
      this.state.tooltipTransform = 'translate(0, -50%)';
    }
    if (this.theme !== undefined && this.theme !== null) {
      this.themeSelected = this.themeService.getComponentTheme(this.theme);
      if (this.themeSelected === null) {
        console.log(`WARN: requested theme ${this.theme} does not exist. Falling back to default theme for tooltip.`);
        this.themeSelected = this.themeService.getComponentTheme('tooltip');
      }
    }
    // Transition to ready state once component is created
    setTimeout(() => {
      self.state.uiState = 'ready';
    }, 10)
  }

}

