import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobsDetailsComponent } from './jobs-details/jobs-details.component';
import { SearchHeaderComponent } from './components/search-header/search-header.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'jobsList',component:JobsListComponent},
  {path:'jobdetails/:id',component:JobsDetailsComponent},
  
  // {path:'jobsList',component:SearchHeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
