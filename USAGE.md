<!-- !!! will be dynamically included into cloukit.github.io component doc !!! -->
<!-- !!! DO NOT USE UNECESSARY MARRKUP THAT BREAKS THE CORPORATE DESIGN !!! -->

### Initial Setup

Import the needed modules in your main module.

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

**IMPORTANT:** Do not forget to place [**`cloukit-dropout-outlet`**](https://cloukit.github.io/#/component/dropout) in your `AppComponent`. 


&nbsp;

### Use the tooltip

You can create a tooltip as easy as so

```html
<span cloukitTooltip="delicious german sausage">Bratwurst</span>
```



