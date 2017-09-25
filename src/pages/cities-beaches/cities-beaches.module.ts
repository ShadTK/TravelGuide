import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitiesBeaches } from './cities-beaches';

@NgModule({
  declarations: [
    CitiesBeaches,
  ],
  imports: [
    IonicPageModule.forChild(CitiesBeaches),
  ],
})
export class CitiesBeachesModule {}
