import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Cities } from './cities';

@NgModule({
  declarations: [
    Cities,
  ],
  imports: [
    IonicPageModule.forChild(Cities),
  ],
})
export class CitiesModule {}
