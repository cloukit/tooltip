import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloukitTooltipComponent } from './tooltip.component';

describe('TooltipComponent', () => {
  let component: CloukitTooltipComponent;
  let fixture: ComponentFixture<CloukitTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloukitTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloukitTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
