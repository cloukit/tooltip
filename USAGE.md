<!-- !!! will be dynamically included into cloukit.github.io component doc !!! -->
<!-- !!! DO NOT USE UNECESSARY MARRKUP THAT BREAKS THE CORPORATE DESIGN !!! -->

### Initial Setup

First install needed peerDependencies.

```
yarn add @cloukit/dropout @cloukit/theme
```

Secondly you need to define the [**`cloukit-dropout-outlet`**](https://cloukit.github.io/#/component/dropout) and in your main Bootstrap Component's template like so. Make sure you only define this once at the top level of your component hierarchy.

```html
<cloukit-dropout-outlet></cloukit-dropout-outlet>
```

Lastly import the needed modules in your main module.

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

