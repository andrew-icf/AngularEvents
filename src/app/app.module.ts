import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './errors/404.component';

import { ToastrService } from './common/toastr.service';
import { EventListService } from './events-list/shared/events-list.service';
import { EventRouteAcitivator } from './event-details/event-route-activator.service';

import { appRoutes } from './common/routes';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [
    EventListService,
    ToastrService,
    EventRouteAcitivator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
