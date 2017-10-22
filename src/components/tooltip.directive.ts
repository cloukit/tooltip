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
  cloukitDropoutPlacement: string;

  private dropoutRef: DropoutComponentRefId;

  constructor(private dropoutService: DropoutService,
              private viewContainerRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  _doActivate() {
    //
    // PLACEMENT
    //
    let placement: DropoutPlacement;
    let wrapperMargin: string;
    if (this.cloukitDropoutPlacement === undefined || this.cloukitDropoutPlacement === 'bottom') {
      placement = DropoutPlacement.DOWN_CENTER;
      wrapperMargin = 'marginTop';
    } else if (this.cloukitDropoutPlacement === 'top') {
      wrapperMargin = 'marginBottom';
      placement = DropoutPlacement.UP_CENTER;
    } else if (this.cloukitDropoutPlacement === 'left') {
      wrapperMargin = 'marginRight';
      placement = DropoutPlacement.LEFT_CENTER;
    } else if (this.cloukitDropoutPlacement === 'right') {
      wrapperMargin = 'marginLeft';
      placement = DropoutPlacement.RIGHT_CENTER;
    }
    //
    // TOOLTIP
    //
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CloukitTooltipComponent);
    const tooltipRef = this.viewContainerRef.createComponent(componentFactory);
    tooltipRef.instance.tooltipText = this.cloukitDropout;
    tooltipRef.instance.cloukitDropoutPlacement = placement;
    tooltipRef.instance.wrapperMargin = wrapperMargin;
    //
    // REQUEST
    //
    const request = new DropoutComponentCreationRequest();
    request.triggerElement = this.viewContainerRef.element.nativeElement;
    request.template = tooltipRef.instance.tooltipTemplate;
    request.placement = placement;
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
