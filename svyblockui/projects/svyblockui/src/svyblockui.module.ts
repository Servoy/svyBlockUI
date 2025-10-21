
import { NgModule } from '@angular/core';
import {SvyBlockUI} from './blockui/blockui';
import { BlockUIModule } from 'ng-block-ui';
import {SvyBlockUIService} from './blockui.service';
import { CommonModule } from '@angular/common';
import { ServoyPublicModule } from '@servoy/public';

@NgModule({
    declarations: [
        SvyBlockUI
    ],
    providers: [
        SvyBlockUIService
    ],
    imports: [
        BlockUIModule.forRoot(),
        CommonModule,
        ServoyPublicModule
    ],
    exports: [ 
        SvyBlockUI
      ]
})
export class SvyBlockUIModule {}
