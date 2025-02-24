import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    SharedComponent, ProfileComponent
  ],
  imports: [
  ],
  exports: [
    SharedComponent
  ]
})
export class SharedModule { }
