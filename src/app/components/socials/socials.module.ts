import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser'
import {CommonModule} from '@angular/common'



import {SocialsComponent} from './socials.component'

@NgModule({
    declarations: [
         SocialsComponent
    ],
    imports:[FontAwesomeModule,CommonModule],
    exports: [
        SocialsComponent
    ]
})
 
export class SocialsModule {}