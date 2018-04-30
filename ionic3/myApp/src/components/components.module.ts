import { NgModule } from '@angular/core';
import { ActionsheetComponent } from './actionsheet/actionsheet';
//引入IonicModule 解决 ionic element报错问题
import {IonicModule} from 'ionic-angular';
//引入BrowserModule 解决 ngFor报错问题
import { BrowserModule } from '@angular/platform-browser';
import { UserlistComponent } from './userlist/userlist';

@NgModule({
	declarations: [ActionsheetComponent,
    UserlistComponent],
	imports: [BrowserModule,IonicModule],
	exports: [ActionsheetComponent,
    UserlistComponent]
})
export class ComponentsModule {}
