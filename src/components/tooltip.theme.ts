/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import {
  CloukitComponentTheme,
  CloukitStatefulAndModifierAwareElementThemeStyleDefinition,
} from '@cloukit/theme';

/**
 * The default theme
 */
export class CloukitTooltipComponentThemeDefault extends CloukitComponentTheme {

  constructor() {
    super();
    //
    // NOTE: A margin-* of 5px will be added for wrapper.ready.base on component creation.
    //       this cannot be overridden by the theme! Since the placement influences top/bottom/left/right
    //
    this.createStyle('wrapper', 'init', 'base', {
      style: {
        transition: `
          margin-left 200ms linear, 
          margin-right 200ms linear, 
          margin-bottom 200ms linear, 
          margin-top 200ms linear, 
          opacity 200ms ease-in-out`,
        opacity: 0,
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    this.createStyle('wrapper', 'ready', 'base',
      this.merge(this.getStyle('wrapper', 'init', 'base'), {
        style: {
          opacity: 1,
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('tooltip', 'init', 'base', {
      style: {
        backgroundColor: '#333',
        padding: '4px',
        color: '#fff',
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    this.createStyle('tooltip', 'ready', 'base',
      this.merge(this.getStyle('tooltip', 'init', 'base'), {
        style: {
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
  }

}
