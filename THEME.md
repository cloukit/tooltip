To be able to write a custom theme you need to know about the elements, uiStates and uiModifiers.
This graphic shows you all elements with their states and modifiers.

cloukitSvg:https://cloukit.github.io/tooltip/themeing/cloukit-tooltip-decomposed.svg

Below you can see the theme provided by tooltip. You can easily extend one of the existing themes and change it to your needs. But do not forget to register it at the [`cloukitThemeService`](https://cloukit.github.io/#/guide/themeing).

A new theme with a red background would be created like so:

```typescript
import { CloukitTooltipComponentThemeDefault } from '@cloukit/tooltip';

export class MyRedToggleTheme extends CloukitTooltipComponentThemeDefault {
  constructor() {
    super();
    const tooltip = this.getElementTheme('tooltip', 'ready', 'base');
    tooltip.styleDef.style.backgroundColor = 'red';
  }
}
```
