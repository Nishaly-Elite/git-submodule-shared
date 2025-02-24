import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkflowComponent } from './workflow/workflow.component';


@NgModule({
  declarations: [
    SharedComponent, ProfileComponent, WorkflowComponent
  ],
  imports: [
  ],
  exports: [
    SharedComponent
  ]
})
export class SharedModule { }
