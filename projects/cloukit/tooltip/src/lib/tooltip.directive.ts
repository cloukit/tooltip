/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import {
  Directive, Input, HostListener, ViewContainerRef, ComponentFactoryResolver, OnDestroy,
} from '@angular/core';
import { CloukitDropoutService, DropoutComponentCreationRequest, DropoutComponentRefId, DropoutPlacement } from '@cloukit/dropout';
import { CloukitTooltipComponent } from './tooltip.component';

@Directive({
  selector: '[cloukitTooltip]',
})
export class CloukitTooltipDirective implements OnDestroy {

  @Input()
  public cloukitTooltip: string;

  @Input()
  public cloukitTooltipPlacement: string;

  private dropoutRef: DropoutComponentRefId;

  constructor(private dropoutService: CloukitDropoutService,
              private viewContainerRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  _doActivate() {
    //
    // PLACEMENT
    //
    let placement: DropoutPlacement;
    let wrapperReadyModifier: string;
    if (this.cloukitTooltipPlacement === undefined || this.cloukitTooltipPlacement === 'bottom') {
      placement = DropoutPlacement.DOWN_CENTER;
      wrapperReadyModifier = 'down';
    } else if (this.cloukitTooltipPlacement === 'top') {
      wrapperReadyModifier = 'up';
      placement = DropoutPlacement.UP_CENTER;
    } else if (this.cloukitTooltipPlacement === 'left') {
      wrapperReadyModifier = 'left';
      placement = DropoutPlacement.LEFT_CENTER;
    } else if (this.cloukitTooltipPlacement === 'right') {
      wrapperReadyModifier = 'right';
      placement = DropoutPlacement.RIGHT_CENTER;
    }
    //
    // TOOLTIP
    //
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CloukitTooltipComponent);
    const tooltipRef = this.viewContainerRef.createComponent(componentFactory);
    tooltipRef.instance.tooltipText = this.cloukitTooltip;
    tooltipRef.instance.cloukitTooltipPlacement = placement;
    tooltipRef.instance.wrapperReadyModifier = wrapperReadyModifier;
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

  @HostListener('mouseenter')
  activate() {
    this._doActivate();
  }

  @HostListener('mouseleave')
  @HostListener('click')
  deactivate() {
    this._doDeactivate();
  }

  ngOnDestroy() {
    this._doDeactivate();
  }
}
