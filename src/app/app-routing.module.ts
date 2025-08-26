import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobsDetailsComponent } from './jobs-details/jobs-details.component';

const routes: Routes = [
  { path: 'jobsList', component: HomeComponent },
  {path:'',component:JobsListComponent},
  {path:'jobdetails/:id',component:JobsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
