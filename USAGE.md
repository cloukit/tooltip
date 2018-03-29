<!-- !!! will be dynamically included into cloukit.github.io component doc !!! -->
<!-- !!! DO NOT USE UNECESSARY MARRKUP THAT BREAKS THE CORPORATE DESIGN !!! -->

### Initial Setup

First of all you need to define the [**`cloukit-dropout-outlet`**](https://cloukit.github.io/#/component/dropout) and in your main Bootstrap Component's template like so. Make sure you only define this once at the top level of your component hierarchy.

```html
<cloukit-dropout-outlet></cloukit-dropout-outlet>
```

Then import the needed modules in your main module.

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// (1) Package Imports
import { CloukitThemeModule } from '@cloukit/theme';
import { CloukitDropoutModule } from '@cloukit/dropout';
import { CloukitTooltipModule } from '@cloukit/tooltip';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // (2) Register Imports
    CloukitThemeModule,
    CloukitDropoutModule,
    CloukitTooltipModule,
  ],
  providers: [ ],
  bootstrap: [ AppComponent ],
})
// ....
```


&nbsp;

### Use the tooltip

You can create a tooltip as easy as so

```html
<span cloukitTooltip="delicious german sausage">Bratwurst</span>
```



&nbsp;

### How it works

cloukitSvg:https://cloukit.github.io/dropout/doc/cloukit-dropout-how-it-works.svg


Why do it that way? I am aware of the possibility to get the `rootElement` via the `ApplicationRef`, 
but this is in my opinion a hacky way of doing things that could potentially break and that is why we use the outlet to do it in a well documented way.

&nbsp;

### Version Compatibility

You can read the [release comments](https://github.com/cloukit/tooltip/releases) for full details.

Please mind the the compatibility chart

| Angular Version | Cloukit Component Version |
|-----------------|---------------------------|
| >=5.0.0         | 1.6.0 - current           |
| >=4.0.0         | 1.0.0 - 1.5.0             |

To install a specific version use:

```
yarn add @cloukit/tooltip@1.5.5
```

