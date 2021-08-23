import { Injectable, Inject, ComponentFactoryResolver, ApplicationRef, Injector, ComponentRef, EmbeddedViewRef } from '@angular/core';
import { SvyBlockUI } from './blockui/blockui';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class SvyBlockUIService {
    private _delay: number;
    private _spinner: string;
    private _spinnerBgColor: string;
    private _messageStyleClass: string;
    private _overlayColor: string;
    private _overlayOpacity: number;

    blockUIComponent: ComponentRef<SvyBlockUI>;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
        private _applicationRef: ApplicationRef,
        private _injector: Injector,
        @Inject(DOCUMENT) private doc: Document) {
    }

    get delay(): number {
        return this._delay;
    }

    set delay(delay: number) {
        this._delay = delay;
    }

    get spinner(): string {
        return this._spinner;
    }

    set spinner(spinner: string) {
        this._spinner = spinner;
    }

    get spinnerBgColor(): string {
        return this._spinnerBgColor;
    }

    set spinnerBgColor(spinnerBgColor: string) {
        this._spinnerBgColor = spinnerBgColor;
    }

    get messageStyleClass(): string {
        return this._messageStyleClass;
    }

    set messageStyleClass(messageStyleClass: string) {
        this._messageStyleClass = messageStyleClass;
    }

    get overlayColor(): string {
        return this._overlayColor;
    }

    set overlayColor(overlayColor: string) {
        this._overlayColor = overlayColor;
    }

    get overlayOpacity(): number {
        return this._overlayOpacity;
    }

    set overlayOpacity(overlayOpacity: number) {
        this._overlayOpacity = overlayOpacity;
    }

    show(message: string, timeout?: number) {
        let delayStart = this.delay ? this.delay : 0;

        if (timeout > 0) {
            // change the block delay of angular-block-ui
            delayStart = timeout
        }

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SvyBlockUI);
        this.blockUIComponent = componentFactory.create(this._injector);
        this.blockUIComponent.instance.delay = delayStart;
        //TODO custom styling? should be done via css?
        this.blockUIComponent.instance.messageStyleClass = this._messageStyleClass;
        this.blockUIComponent.instance.overlayColor = this._overlayColor;
        this.blockUIComponent.instance.overlayOpacity = this._overlayOpacity;
        this.blockUIComponent.instance.spinner = this._spinner;
        this.blockUIComponent.instance.spinnerBgColor = this._spinnerBgColor;
        this._applicationRef.attachView(this.blockUIComponent.hostView);
        this.doc.body.appendChild((this.blockUIComponent.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement);

        this.blockUIComponent.instance.show(message);
    }

    setMessage(message: string) {
        if (this.blockUIComponent) this.blockUIComponent.instance.setMessage(message);
    }

    stop(timeout?: number) {
        if (timeout > 0) {
            setTimeout(() => this.stopBlocker(), timeout);
        } else {
            this.stopBlocker()
        }
    }

    stopBlocker() {
        if (this.blockUIComponent) {
            this.blockUIComponent.instance.stop();
            this.blockUIComponent.destroy();
            this.blockUIComponent = null;
        }
    }

} 