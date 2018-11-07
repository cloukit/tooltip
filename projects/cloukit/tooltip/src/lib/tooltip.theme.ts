/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { CloukitBaseCssDefinitions, CloukitComponentTheme } from '@cloukit/theme';

/**
 * The default theme
 */
export class CloukitTooltipComponentThemeDefault extends CloukitComponentTheme {

  constructor() {
    super();
    //
    // WRAPPER
    //
    this.buildStyle('wrapper', 'init', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        transition: `
          margin-left 300ms linear,
          margin-right 300ms linear,
          margin-top 300ms linear,
          margin-bottom 300ms linear,
          opacity 300ms ease-in-out`,
        opacity: 0,
      });

    this.buildStyle('wrapper', 'ready', 'left')
      .inheritFrom('wrapper', 'init', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        marginRight: '5px',
        transform: 'translate(0, -50%)',
        opacity: 1,
      });

    this.buildStyle('wrapper', 'ready', 'right')
      .inheritFrom('wrapper', 'init', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        marginLeft: '5px',
        transform: 'translate(0, -50%)',
        opacity: 1,
      });

    this.buildStyle('wrapper', 'ready', 'up')
      .inheritFrom('wrapper', 'init', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        marginBottom: '5px',
        transform: 'translate(-50%, 0)',
        opacity: 1,
      });

    this.buildStyle('wrapper', 'ready', 'down')
      .inheritFrom('wrapper', 'init', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        marginTop: '5px',
        transform: 'translate(-50%, 0)',
        opacity: 1,
      });

    //
    // TOOLTIP
    //
    this.buildStyle('tooltip', 'init', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        backgroundColor: '#333',
        padding: '5px 8px 5px 8px',
        color: '#fff',
      });

    this.buildStyle('tooltip', 'ready', 'base')
      .inheritFrom('tooltip', 'init', 'base');
  }

}
