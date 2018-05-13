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

  @Input()
  public cloukitTooltipPlacement: DropoutPlacement;

  @Input()
  public wrapperReadyModifier: string;

  @Input()
  public theme: string;

  private themeSelected: CloukitComponentTheme;
  private state = {
    wrapper: {
      uiModifier: 'base',
      uiState: 'init',
    },
    tooltip: {
      uiModifier: 'base',
      uiState: 'init',
    }
  };

  constructor(private themeService: CloukitThemeService) {
    this.themeSelected = this.themeService.getComponentTheme('tooltip');
  }

  public getStyle(element: string): CloukitStatefulAndModifierAwareElementThemeStyleDefinition {
    if (this.themeSelected !== undefined && this.themeSelected !== null) {
      const style = this.themeSelected.getStyle(element, this.state[element].uiState, this.state[element].uiModifier);
      return this.themeService.prefixStyle(style);
    }
    return { style: {}, icon: {} } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition;
  }

  ngOnInit() {
    const self = this;
    if (this.theme !== undefined && this.theme !== null) {
      this.themeSelected = this.themeService.getComponentTheme(this.theme);
      if (this.themeSelected === null) {
        console.log(`WARN: requested theme ${this.theme} does not exist. Falling back to default theme for tooltip.`);
        this.themeSelected = this.themeService.getComponentTheme('tooltip');
      }
    }

    // Transition to ready state slightly after component is created
    setTimeout(() => {
      self.state.tooltip.uiState = 'ready';
      self.state.wrapper.uiState = 'ready';
      self.state.wrapper.uiModifier = this.wrapperReadyModifier;
    }, 10);
  }

}

