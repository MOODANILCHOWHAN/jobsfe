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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobsDetailsComponent,
    JobsListComponent,
    DaysAgoPipe,
    AlignItemCenterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
