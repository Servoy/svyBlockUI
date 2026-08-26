import { Injectable, ApplicationRef, ComponentRef, EmbeddedViewRef, createComponent, EnvironmentInjector, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SvyBlockUI } from './blockui/blockui';


@Injectable()
export class SvyBlockUIService {
    private _delay = 0;
    private _spinner = '';
    private _spinnerBgColor = '';
    private _messageStyleClass = '';
    private _overlayColor = '';
    private _overlayOpacity = 0;
    private _showAs = 'text';

    blockUIComponent: ComponentRef<SvyBlockUI> | null = null;

    private readonly _applicationRef = inject(ApplicationRef);
    private readonly _environmentInjector = inject(EnvironmentInjector);
    private readonly doc = inject(DOCUMENT);

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

        if (timeout != null && timeout > 0) {
            delayStart = timeout;
        }

        if (this.blockUIComponent == null) {
            this.blockUIComponent = createComponent(SvyBlockUI, {
                environmentInjector: this._environmentInjector
            });
            this.blockUIComponent.instance.delay = delayStart;
            this.blockUIComponent.instance.messageStyleClass = this._messageStyleClass;
            this.blockUIComponent.instance.overlayColor = this._overlayColor;
            this.blockUIComponent.instance.overlayOpacity = this._overlayOpacity;
            this.blockUIComponent.instance.spinner = this._spinner;
            this.blockUIComponent.instance.spinnerBgColor = this._spinnerBgColor;
            this.blockUIComponent.instance.setShowAs(this._showAs);
            this._applicationRef.attachView(this.blockUIComponent.hostView);
            this.doc.body.appendChild((this.blockUIComponent.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement);
        }

        this.blockUIComponent.instance.show(message);
    }

    setMessage(message: string) {
        if (this.blockUIComponent) this.blockUIComponent.instance.setMessage(message);
    }

    setShowAs(showAs: string) {
        this._showAs = showAs;
        if (this.blockUIComponent) this.blockUIComponent.instance.setShowAs(showAs);
    }

    stop(timeout?: number) {
        if (timeout != null && timeout > 0) {
            setTimeout(() => this.stopBlocker(), timeout);
        } else {
            this.stopBlocker();
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
