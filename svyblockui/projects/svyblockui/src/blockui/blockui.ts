import { Component, Input } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
    selector: 'svyblockui-blockui',
    templateUrl: './blockui.html'
})
export class SvyBlockUI {

    @Input() delay: number;
    @Input() spinner: string;
    @Input() spinnerBgColor: string;
    @Input() messageStyleClass: string;
    @Input() overlayColor: string;
    @Input() overlayOpacity: number;

    @BlockUI() blockUI: NgBlockUI;

    constructor() {
    }

    show(message: string) {
        this.blockUI.start(message);
    }

    setMessage(message: string) {
        this.blockUI.update(message);
    }

    stop() {
        this.blockUI.stop();
    }
}

