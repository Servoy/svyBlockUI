
import { NgModule } from '@angular/core';
import {SvyBlockUI} from './blockui/blockui';
import { BlockUIModule } from 'ng-block-ui';
import {SvyBlockUIService} from './blockui.service';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        SvyBlockUI
    ],
    providers: [
        SvyBlockUIService
    ],
    imports: [
        BlockUIModule.forRoot(),
        CommonModule
    ],
    exports: [ 
        SvyBlockUI
      ]
})
export class SvyBlockUIModule {}
