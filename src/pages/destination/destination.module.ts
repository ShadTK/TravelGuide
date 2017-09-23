import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Destination } from './destination';

@NgModule({
  declarations: [
    Destination,
  ],
  imports: [
    IonicPageModule.forChild(Destination),
  ],
})
export class DestinationModule {}
