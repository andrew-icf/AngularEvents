import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventListService } from './events-list.service';

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventListService: EventListService) {}

  resolve() { // resolve automatically subscribes, normally you would need to getEvents.subscribe()
     return this.eventListService.getEvents();
  }
}
