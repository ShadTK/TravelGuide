import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelsMap } from './hotels-map';

@NgModule({
  declarations: [
    HotelsMap,
  ],
  imports: [
    IonicPageModule.forChild(HotelsMap),
  ],
})
export class HotelsMapModule {}
