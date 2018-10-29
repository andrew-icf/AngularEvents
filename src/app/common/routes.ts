import { Routes } from '@angular/router';
import { EventsListComponent } from '../events-list/events-list.component';
import { EventDetailsComponent } from '../event-details/event-details.component';
import { CreateEventComponent } from '../create-event/create-event.component';
import { Error404Component } from '../errors/404.component';
import { EventListResolver } from '../events-list/shared/events-list-resolver.service';
import { UserModule } from '../user/user.module';
import { CreateSessionComponent } from '../event-details/create-session/create-session.component';
import { EventResolver } from '../events-list/shared/event-resolver.service';

export const appRoutes: Routes = [
  // here we use a Fn, register as a provider in the module. First param is the component itself so that props are accessable by comp
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  {path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
  {path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver} }, // here we used a service
  {path: 'events/session/new', component: CreateSessionComponent },
  {path: '404', component: Error404Component },
  {path: '', redirectTo: '/events', pathMatch: 'full' },
  {path: 'user', loadChildren: () => UserModule }
];
