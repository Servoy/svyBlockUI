
import { NgModule } from '@angular/core';
import {SvyBlockUI} from './blockui/blockui';
import { BlockUIModule } from 'ng-block-ui';
import {SvyBlockUIService} from './blockui.service';

@NgModule({
    declarations: [
        SvyBlockUI
    ],
    providers: [
        SvyBlockUIService
    ],
    imports: [
        BlockUIModule.forRoot()
    ],
    exports: [ 
        SvyBlockUI
      ]
})
export class SvyBlockUIModule {}
