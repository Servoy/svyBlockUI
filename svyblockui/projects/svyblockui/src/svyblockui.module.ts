
import { NgModule } from '@angular/core';
import { SvyBlockUI } from './blockui/blockui';
import { BlockUIModule } from '@servoy/ng-block-ui';
import { SvyBlockUIService } from './blockui.service';

@NgModule({
    imports: [
        SvyBlockUI,
        BlockUIModule.forRoot()
    ],
    providers: [
        SvyBlockUIService
    ],
    exports: [
        SvyBlockUI
    ]
})
export class SvyBlockUIModule {}
