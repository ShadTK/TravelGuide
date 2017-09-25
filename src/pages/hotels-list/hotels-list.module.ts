import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelsList } from './hotels-list';

@NgModule({
  declarations: [
    HotelsList,
  ],
  imports: [
    IonicPageModule.forChild(HotelsList),
  ],
})
export class HotelsListModule {}
