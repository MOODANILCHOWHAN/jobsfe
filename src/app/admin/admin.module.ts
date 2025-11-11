import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPostingComponent } from './job-posting/job-posting.component';
import { Route, RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'postJob',component:JobPostingComponent}
]

@NgModule({
  declarations: [
    JobPostingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
