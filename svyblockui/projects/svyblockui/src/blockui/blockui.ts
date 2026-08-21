import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { BlockUI, NgBlockUI, BlockUIModule } from 'ng-block-ui';
import { CommonModule } from '@angular/common';
import { ServoyPublicModule } from '@servoy/public';

@Component({
    selector: 'svyblockui-blockui',
    templateUrl: './blockui.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [BlockUIModule, CommonModule, ServoyPublicModule]
})
export class SvyBlockUI {

    delay = 0;
    spinner = '';
    spinnerBgColor = '';
    messageStyleClass = '';
    overlayColor = '';
    overlayOpacity = 0;

    @BlockUI() blockUI!: NgBlockUI;

    readonly message = signal('');
    readonly showAs = signal<string>('text');

    show(message: string) {
        this.blockUI.start(message);
        this.message.set(message);
    }

    setMessage(message: string) {
        this.blockUI.update(message);
        this.message.set(message);
    }

    setShowAs(showAs: string) {
        const validTypes = new Set(['text', 'html', 'trusted_html']);
        if (!validTypes.has(showAs)) {
            showAs = 'text';
        }
        if (this.showAs() === showAs) return;
        this.showAs.set(showAs);
    }

    stop() {
        this.blockUI.stop();
    }

    trustAsHtml(): boolean {
        return this.showAs() === 'trusted_html';
    }
}
