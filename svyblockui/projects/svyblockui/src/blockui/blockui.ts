import { Component, Input } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
    selector: 'svyblockui-blockui',
    templateUrl: './blockui.html'
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

    stop() {
        this.blockUI.stop();
    }
}

