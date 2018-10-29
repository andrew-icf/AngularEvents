import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventListService } from './events-list.service';

@Injectable()
export class EventResolver implements Resolve<any> {
    constructor(private eventListService: EventListService) { }

    resolve(route: ActivatedRouteSnapshot) { // resolve automatically subscribes, normally you would need to getEvents.subscribe()
        return this.eventListService.getEvent(route.params['id']);
    }
}
