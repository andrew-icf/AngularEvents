import { Routes } from '@angular/router';
import { EventsListComponent } from '../events-list/events-list.component';
import { EventDetailsComponent } from '../event-details/event-details.component';
import { CreateEventComponent } from '../create-event/create-event.component';
import { Error404Component } from '../errors/404.component';
import { EventRouteAcitivator } from '../event-details/event-route-activator.service';
import { EventListResolver } from '../events-list/shared/events-list-resolver.service';
import { UserModule } from '../user/user.module';

export const appRoutes:Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] }, // here we will use a function, register this as a provider in the module. The first param passed into this function is the component itself so that properties are accessable by component
  {path: 'events', component: EventsListComponent, resolve: {events:EventListResolver} },
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteAcitivator] }, // here we used a service
  {path: '404', component: Error404Component },
  {path: '', redirectTo: '/events', pathMatch: 'full' },
  {path: 'user', loadChildren: () => UserModule }
]
