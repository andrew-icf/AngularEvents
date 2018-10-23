import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventListService } from './events-list.service';

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventListService: EventListService) {}

  resolve() {
    // using map here instead of observable because this is in a resolver we need to actually
    // return the observable to Angular so that Angular can watch it and see when it finishes.
    // subscribe() returns a subscription not an observable
     return this.eventListService.getEvents().map(events => events );
  }
}
