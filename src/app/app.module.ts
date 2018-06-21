import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventDetailsComponent } from './event-details/event-details.component';

import { ToastrService } from './common/toastr.service';
import { EventListService } from './events-list/shared/events-list.service';
import { appRoutes } from './common/routes';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    NavbarComponent,
    EventDetailsComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [EventListService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
