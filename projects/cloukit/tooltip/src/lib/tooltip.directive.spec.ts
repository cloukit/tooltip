/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, DebugElement } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { CloukitTooltipDirective } from './tooltip.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <input
    type="text"
    cloukitTooltip="foo"
  >
  <div>outside</div>
  `
})
class TestComponent {
  public hasFocus: boolean;
  public toggleFocus(value: boolean) {
    this.hasFocus = value;
  }
}

describe('CloukitTooltipDirective', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        CloukitTooltipDirective,
      ],
    }).compileComponents();
  }));
  it('should create', async(() => {
    const fixture = TestBed.createComponent(TestComponent);
    const component = fixture.componentInstance;
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
