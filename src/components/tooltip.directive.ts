/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import {
  Directive, Input, HostListener, ViewContainerRef, ComponentFactoryResolver,
} from '@angular/core';
import { DropoutService, DropoutComponentCreationRequest, DropoutComponentRefId, DropoutPlacement } from '@cloukit/dropout';
import { CloukitTooltipComponent } from './children/tooltip.component';

@Directive({
  selector: '[cloukitTooltip]',
})
export class CloukitTooltipDirective {

  @Input('cloukitTooltip')
  cloukitDropout: string;

  @Input('cloukitTooltipPlacement')
  cloukitDropoutPlacement: DropoutPlacement = DropoutPlacement.HORIZONTAL_LEFT_BOTTOM;

  private dropoutRef: DropoutComponentRefId;

  constructor(private dropoutService: DropoutService,
              private viewContainerRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  _doActivate() {
    const request = new DropoutComponentCreationRequest();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CloukitTooltipComponent);
    const tooltipRef = this.viewContainerRef.createComponent(componentFactory);
    tooltipRef.instance.tooltipText = this.cloukitDropout;
    request.triggerElement = this.viewContainerRef.element.nativeElement;
    request.template = tooltipRef.instance.tooltipTemplate;
    request.placement = this.cloukitDropoutPlacement;
    this.dropoutRef = this.dropoutService.requestDropoutCreation(request);
  }

  _doDeactivate() {
    this.dropoutService.destroyComponent(this.dropoutRef);
    this.dropoutRef = undefined;
  }

  @HostListener('focusin')
  @HostListener('mouseenter')
  activate() {
    this._doActivate();
  }

  @HostListener('focusout')
  @HostListener('mouseleave')
  deactivate() {
    this._doDeactivate();
  }
}
