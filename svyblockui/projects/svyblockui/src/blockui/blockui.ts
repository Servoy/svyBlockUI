import { Component, Input } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
    selector: 'svyblockui-blockui',
    templateUrl: './blockui.html',
    standalone: false
})
export class SvyBlockUI {

    delay: number;
    spinner: string;
    spinnerBgColor: string;
    messageStyleClass: string;
    overlayColor: string;
    overlayOpacity: number;

    @BlockUI() blockUI: NgBlockUI;

    public message = "";
    public showAs: string = "text";

    constructor() {
    }

    show(message: string) {
        this.blockUI.start(message);
        this.message = message;
    }

    setMessage(message: string) {
        this.blockUI.update(message);
        this.message = message;
    }
    
    setShowAs(showAs: string) {
        const validTypes = new Set(['text', 'html', 'trusted_html']);
        if (!validTypes.has(showAs)) {
            showAs = 'text';
        }
        if (this.showAs === showAs) return;
        this.showAs = showAs;
    }

    stop() {
        this.blockUI.stop();
    }
    
    trustAsHtml(): boolean {
        return this.showAs === 'trusted_html';
    }
}

