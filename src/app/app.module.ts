import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventListService } from './events-list/shared/events-list.service';


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
