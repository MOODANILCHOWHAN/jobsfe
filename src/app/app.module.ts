import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JobsDetailsComponent } from './jobs-details/jobs-details.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { DaysAgoPipe } from './days-ago.pipe';
import { AlignItemCenterDirective } from './align-item-center.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { JobCardComponent } from './components/job-card/job-card.component';
import { SearchHeaderComponent } from './components/search-header/search-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobsDetailsComponent,
    JobsListComponent,
    DaysAgoPipe,
    AlignItemCenterDirective,
    JobCardComponent,
    SearchHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
