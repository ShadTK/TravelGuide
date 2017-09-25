import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitiesParadise } from './cities-paradise';

@NgModule({
  declarations: [
    CitiesParadise,
  ],
  imports: [
    IonicPageModule.forChild(CitiesParadise),
  ],
})
export class CitiesParadiseModule {}
