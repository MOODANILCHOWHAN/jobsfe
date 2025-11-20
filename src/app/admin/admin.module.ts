import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPostingComponent } from './job-posting/job-posting.component';
import {  RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip'
import { NgSelectModule } from '@ng-select/ng-select';
const routes:Routes=[
  {path:'postJob',component:JobPostingComponent}
]

@NgModule({
  declarations: [
    JobPostingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatCardModule,
    MatTooltipModule,
    NgSelectModule
  ]
})
export class AdminModule { }
