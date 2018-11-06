/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { CloukitComponentTheme } from '@cloukit/theme';

/**
 * The default theme
 */
export class CloukitTooltipComponentThemeDefault extends CloukitComponentTheme {

  constructor() {
    super();
    //
    // WRAPPER
    //
    this.createStyle('wrapper', 'init', 'base', {
      style: {
        transition: `
          margin-left 300ms linear,
          margin-right 300ms linear,
          margin-top 300ms linear,
          margin-bottom 300ms linear,
          opacity 300ms ease-in-out`,
        opacity: 0,
      }
    });

    this.createStyle('wrapper', 'ready', 'left',
      this.merge(this.getStyle('wrapper', 'init', 'base'), {
        style: {
          marginRight: '5px',
          transform: 'translate(0, -50%)',
          opacity: 1,
        }
      }));

    this.createStyle('wrapper', 'ready', 'right',
      this.merge(this.getStyle('wrapper', 'init', 'base'), {
        style: {
          marginLeft: '5px',
          transform: 'translate(0, -50%)',
          opacity: 1,
        }
      }));

    this.createStyle('wrapper', 'ready', 'up',
      this.merge(this.getStyle('wrapper', 'init', 'base'), {
        style: {
          marginBottom: '5px',
          transform: 'translate(-50%, 0)',
          opacity: 1,
        }
      }));

    this.createStyle('wrapper', 'ready', 'down',
      this.merge(this.getStyle('wrapper', 'init', 'base'), {
        style: {
          marginTop: '5px',
          transform: 'translate(-50%, 0)',
          opacity: 1,
        }
      }));

    //
    // TOOLTIP
    //
    this.createStyle('tooltip', 'init', 'base', {
      style: {
        backgroundColor: '#333',
        padding: '5px 8px 5px 8px',
        color: '#fff',
      }
    });

    this.createStyle('tooltip', 'ready', 'base',
      this.merge(this.getStyle('tooltip', 'init', 'base'), {
        style: {
        }
      }));
  }

}
