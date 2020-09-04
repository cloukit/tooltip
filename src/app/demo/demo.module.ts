import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitDropoutModule } from '@cloukit/dropout';
import { CloukitThemeModule } from '@cloukit/theme';
import { CloukitTooltipModule } from '../../../projects/cloukit/tooltip/src/public_api';
import { DemoComponent } from './demo.component';
import { CloukitStoryModule, CloukitStoryService } from '@cloukit/story';
import { Story00Component } from './stories/story-00-tooltip-directions';
import { Story01Component } from './stories/story-01-trigger-element-destroyed';


@NgModule({
  declarations: [
    DemoComponent,
    Story00Component,
    Story01Component,
  ],
  exports: [ DemoComponent ],
  imports: [
    CommonModule,
    CloukitThemeModule,
    CloukitDropoutModule,
    CloukitTooltipModule,
    CloukitStoryModule,
  ],
  providers: [ ],
  bootstrap: [ ],
})
export class DemoModule {
  constructor(private cloukitStoryService: CloukitStoryService) {
    //
    // INITIALIZE STORY SOURCES
    //
    let baseUrl = '/';
    if (document.getElementsByTagName('base') && document.getElementsByTagName('base')[0]) {
      // in Karma tests we do not have that dom element present
      baseUrl = document.getElementsByTagName('base')[0].href;
    }
    // File is auto generated by build chain 'yarn pre'
    const storySourceJsonUrl = `${baseUrl}assets/demo-stories-source.json`;
    this.cloukitStoryService.loadStoryJson(storySourceJsonUrl);
  }
}