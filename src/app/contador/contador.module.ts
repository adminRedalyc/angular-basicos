import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent           //Para poderlo utiolizar fuera de este modulo
    ]
})

export class ContadorModule{

}