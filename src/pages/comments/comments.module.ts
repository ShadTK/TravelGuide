import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Comments } from './comments';

@NgModule({
  declarations: [
    Comments,
  ],
  imports: [
    IonicPageModule.forChild(Comments),
  ],
})
export class CommentsModule {}
