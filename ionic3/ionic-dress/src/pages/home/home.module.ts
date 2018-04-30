
import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { ComponentsModule } from '../../components/components.module';




@NgModule({
    declarations: [
        HomePage,
    ],
    imports: [
        IonicPageModule.forChild(HomePage), ComponentsModule
    ],
})

export class HomePageModule {

}