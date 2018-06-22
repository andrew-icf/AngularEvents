import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { EventListService } from '../events-list/shared/events-list.service';

// this is our route guard
@Injectable()
export class EventRouteAcitivator implements CanActivate {
  constructor(private eventService:EventListService,
              private router: Router
              ) {}

  // canActivate needs to return a Boolean
  canActivate(route:ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+route.params['id']);

    if(!eventExists)
      this.router.navigate(['/404']);
    return eventExists
  }
}
