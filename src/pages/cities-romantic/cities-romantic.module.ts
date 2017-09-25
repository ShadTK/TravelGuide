import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitiesRomantic } from './cities-romantic';

@NgModule({
  declarations: [
    CitiesRomantic,
  ],
  imports: [
    IonicPageModule.forChild(CitiesRomantic),
  ],
})
export class CitiesRomanticModule {}
